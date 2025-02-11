import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/Button';
import { User, SkillCategory } from '@/types';
import { Users, Search, Filter, Code, Palette, Phone, Database, Layout, Briefcase, LineChart } from 'lucide-react';

const skillCategories: { id: SkillCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'frontend', label: 'Frontend', icon: <Layout className="h-5 w-5" /> },
  { id: 'backend', label: 'Backend', icon: <Database className="h-5 w-5" /> },
  { id: 'mobile', label: 'Mobile', icon: <Phone className="h-5 w-5" /> },
  { id: 'design', label: 'Design', icon: <Palette className="h-5 w-5" /> },
  { id: 'product', label: 'Product', icon: <Code className="h-5 w-5" /> },
  { id: 'business', label: 'Business', icon: <Briefcase className="h-5 w-5" /> },
  { id: 'data', label: 'Data', icon: <LineChart className="h-5 w-5" /> },
];

export default function Teams() {
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<SkillCategory[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [connectingTo, setConnectingTo] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!user) return;

      try {
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(usersRef);
        const usersData = querySnapshot.docs
          .filter(doc => doc.id !== user.uid)
          .map(doc => ({
            uid: doc.id,
            ...doc.data()
          } as User));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  const handleConnect = async (targetUser: User) => {
    if (!user) return;
    
    setConnectingTo(targetUser.uid);
    try {
      const requestsRef = collection(db, 'teamRequests');
      await addDoc(requestsRef, {
        senderId: user.uid,
        senderName: user.displayName,
        senderPhoto: user.photoURL,
        receiverId: targetUser.uid,
        status: 'pending',
        message: `Hi ${targetUser.displayName}, I'd like to connect and possibly team up!`,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setConnectingTo(null);
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = !searchTerm || 
      user.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.skills?.some(skill => skill.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesSkills = selectedSkills.length === 0 ||
      user.skills?.some(skill => selectedSkills.includes(skill.category));

    const matchesExperience = selectedExperience.length === 0 ||
      selectedExperience.includes(user.experience);

    return matchesSearch && matchesSkills && matchesExperience;
  });

  const toggleSkill = (skillCategory: SkillCategory) => {
    setSelectedSkills(prev =>
      prev.includes(skillCategory)
        ? prev.filter(s => s !== skillCategory)
        : [...prev, skillCategory]
    );
  };

  const toggleExperience = (experience: string) => {
    setSelectedExperience(prev =>
      prev.includes(experience)
        ? prev.filter(e => e !== experience)
        : [...prev, experience]
    );
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Find Teammates</h1>
        <Link to="/create-team">
          <Button>
            <Users className="mr-2 h-5 w-5" />
            Create Team
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search by name or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-5 w-5" />
            Filters
          </Button>
        </div>

        {/* Skill Categories */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skillCategories.map(category => (
              <button
                key={category.id}
                onClick={() => toggleSkill(category.id)}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                  selectedSkills.includes(category.id)
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Experience Level</h3>
          <div className="flex gap-2">
            {['beginner', 'intermediate', 'advanced'].map(level => (
              <button
                key={level}
                onClick={() => toggleExperience(level)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedExperience.includes(level)
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(targetUser => (
          <div 
            key={targetUser.uid} 
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedUser(targetUser)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {targetUser.photoURL ? (
                  <img
                    src={targetUser.photoURL}
                    alt={targetUser.displayName}
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                )}
                <div className="ml-3">
                  <h3 className="font-semibold">{targetUser.displayName}</h3>
                  <p className="text-sm text-gray-500 capitalize">{targetUser.experience} Developer</p>
                </div>
              </div>
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleConnect(targetUser);
                }}
                disabled={connectingTo === targetUser.uid}
              >
                {connectingTo === targetUser.uid ? 'Sending...' : 'Connect'}
              </Button>
            </div>

            {targetUser.bio && (
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{targetUser.bio}</p>
            )}

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-700">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {targetUser.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-gray-800 text-sm"
                  >
                    {skillCategories.find(cat => cat.id === skill.category)?.icon}
                    <span className="ml-1">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* User Profile Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  {selectedUser.photoURL ? (
                    <img
                      src={selectedUser.photoURL}
                      alt={selectedUser.displayName}
                      className="w-16 h-16 rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="h-8 w-8 text-gray-400" />
                    </div>
                  )}
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold">{selectedUser.displayName}</h2>
                    <p className="text-gray-500 capitalize">{selectedUser.experience} Developer</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                {selectedUser.bio && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">About</h3>
                    <p className="text-gray-600">{selectedUser.bio}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedUser.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800"
                      >
                        {skillCategories.find(cat => cat.id === skill.category)?.icon}
                        <span className="ml-2">{skill.name}</span>
                        <span className="ml-1 text-gray-500">• {skill.level}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {(selectedUser.githubUrl || selectedUser.linkedinUrl || selectedUser.portfolioUrl) && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Links</h3>
                    <div className="space-y-2">
                      {selectedUser.githubUrl && (
                        <a
                          href={selectedUser.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline block"
                        >
                          GitHub Profile
                        </a>
                      )}
                      {selectedUser.linkedinUrl && (
                        <a
                          href={selectedUser.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline block"
                        >
                          LinkedIn Profile
                        </a>
                      )}
                      {selectedUser.portfolioUrl && (
                        <a
                          href={selectedUser.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline block"
                        >
                          Portfolio Website
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleConnect(selectedUser);
                    setSelectedUser(null);
                  }}
                  disabled={connectingTo === selectedUser.uid}
                >
                  {connectingTo === selectedUser.uid ? 'Sending Request...' : 'Send Connection Request'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <Users className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}