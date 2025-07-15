// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Users, Rocket, Calendar, MessageSquare, ChevronRight, Check, Star } from 'lucide-react';
// import { Button } from '@/components/ui/Button';
// import { useAuth } from '@/context/AuthContext';
// import { motion } from 'framer-motion';

// export default function Home() {
//   const { user } = useAuth();
//   const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

//   const features = [
//     {
//       icon: Users,
//       title: "Skill-Based Matching",
//       description: "Find teammates with complementary skills to build a balanced and effective team.",
//       color: "text-blue-600",
//       gradient: "from-blue-50 to-blue-100"
//     },
//     {
//       icon: Calendar,
//       title: "Schedule Coordination",
//       description: "Easily align your availability with potential teammates to ensure smooth collaboration.",
//       color: "text-green-600",
//       gradient: "from-green-50 to-green-100"
//     },
//     {
//       icon: MessageSquare,
//       title: "Team Communication",
//       description: "Built-in tools for seamless communication and project coordination with your team.",
//       color: "text-purple-600",
//       gradient: "from-purple-50 to-purple-100"
//     }
//   ];

//   return (
//     <div className="mt-20">
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white overflow-hidden">
//         {/* Hero Section */}
//         <motion.section 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="container mx-auto px-4 py-20 text-center relative"
//         >
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/20 to-white/10 -z-10 opacity-50"></div>
//           <div className="max-w-4xl mx-auto relative">
//             <motion.h1 
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight"
//             >
//               Find Your Perfect Hackathon Team
//             </motion.h1>
//             <p className="mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
//               Connect with fellow students, form balanced teams, and create amazing projects together. 
//               Whether you're a beginner or experienced, TeamUp helps you find the right teammates.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {user ? (
//                   <Link to="/teams">
//                     <Button size="lg" className="shadow-lg hover:shadow-xl transition-all group">
//                       Find Teams
//                       <Rocket className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
//                     </Button>
//                   </Link>
//                 ) : (
//                   <Link to="/login">
//                     <Button size="lg" className="shadow-lg hover:shadow-xl transition-all group">
//                       Get Started
//                       <Users className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                     </Button>
//                   </Link>
//                 )}
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>

//         {/* Features Section */}
//         <section className="container mx-auto px-4 py-16">
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map(({ icon: Icon, title, description, color, gradient }) => (
//               <motion.div 
//                 key={title} 
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 whileHover={{ scale: 1.05 }}
//                 className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform relative overflow-hidden group`}
//                 onMouseEnter={() => setHoveredFeature(title)}
//                 onMouseLeave={() => setHoveredFeature(null)}
//               >
//                 <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
//                   <Icon className="h-32 w-32" />
//                 </div>
//                 <Icon className={`h-12 w-12 ${color} mb-4 relative z-10`} />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3 relative z-10">{title}</h3>
//                 <p className="text-gray-600 leading-relaxed relative z-10">{description}</p>
//                 {hoveredFeature === title && (
//                   <motion.div 
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     className="absolute bottom-4 right-4 text-blue-600"
//                   >
//                     <ChevronRight className="h-6 w-6" />
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* CTA Section */}
//         <motion.section 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 relative overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-20"></div>
//           <div className="container mx-auto px-4 text-center relative z-10">
//             <motion.h2 
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               className="text-4xl font-bold mb-6 flex justify-center items-center"
//             >
//               Ready to find your team? 
//               <Star className="ml-4 text-yellow-300 animate-pulse" />
//             </motion.h2>
//             <p className="mx-auto max-w-2xl text-xl text-blue-100 mb-10">
//               Join hundreds of students who have found their perfect hackathon teams through TeamUp.
//             </p>
//             <div className="flex justify-center">
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {user ? (
//                   <Link to="/profile">
//                     <Button variant="secondary" size="lg" className="shadow-lg hover:shadow-xl group">
//                       Complete Your Profile
//                       <Check className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
//                     </Button>
//                   </Link>
//                 ) : (
//                   <Link to="/login">
//                     <Button variant="secondary" size="lg" className="shadow-lg hover:shadow-xl group">
//                       Sign Up Now
//                       <Users className="ml-2 h-5 w-5 group-hover:scale-125 transition-transform" />
//                     </Button>
//                   </Link>
//                 )}
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// }
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Users, Rocket, Calendar, MessageSquare, ChevronRight, Check, Star,Share2,UserCog ,MessageCircle} from 'lucide-react';
// import { Button } from '@/components/ui/Button';
// import { useAuth } from '@/context/AuthContext';
// import { motion } from 'framer-motion';

// export default function Home() {
//   const { user } = useAuth();
//   const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

//   const features = [
//     {
//       icon: UserCog,
//       title: "Complementary Skill Pairing",
//       description: "Discover team members whose unique talents seamlessly complement one another, ensuring a versatile and cohesive team.",
//       color: "text-pink-500",
//       gradient: "from-pink-100 to-pink-200",
//       animation: { x: [-100, 0], opacity: [0, 1] }
//     },
//     {
//       icon: Share2,
//       title: "Unified alignment",
//       description: "Align your schedule with those of your collaborators, reducing conflicts and paving the way for smooth, productive teamwork.",
//       color: "text-purple-500",
//       gradient: "from-purple-100 to-purple-200",
//       animation: { y: [-100, 0], opacity: [0, 1] }
//     },
//     {
//       icon: MessageCircle,
//       title: "Unified Communication Platform",
//       description: "Enjoy a seamless flow of information with integrated features for real-time chat, task management, and document collaboration, keeping your team aligned and productive throughout the project lifecycle.",
//       color: "text-indigo-500",
//       gradient: "from-green-100 to-green-200",
//       animation: { x: [100, 0], opacity: [0, 1] }
//     }
//   ];

//   return (
//     <div className="mt-20 w-full max-w-7xl mx-auto">

//       {/* <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white overflow-hidden"> */}
//       <div className="min-h-screen bg-[#171717]  overflow-hidden">
//         {/* Hero Section */}
//         <motion.section 
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="container mx-auto px-4 py-20 text-center relative"
//         >
//           <motion.h1 
//             className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6 leading-tight max-w-3xl mx-auto text-center"
//           >
//             {"Build Your Ideal Crew".split(" ").map((word, index) => (
//               <motion.span 
//                 key={index} 
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.5 }}
//                 className="mr-2"
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </motion.h1>
//           <p className="mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
//           Discover like-minded peers, combine complementary talents, and form a powerhouse team that’s ready to tackle any hackathon challenge. 
//           </p>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link to={user ? "/teams" : "/login"}>
//               <Button 
//                 size="lg" 
//                 className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all group"
//               >
//                 {user ? "Find Teams" : "Get Started"}
//                 {/* <Rocket className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> */}
//               </Button>
//             </Link>
//           </motion.div>
//         </motion.section>

//         {/* Features Section */}
//         <section className="container mx-auto px-4 py-16">
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map(({ icon: Icon, title, description, color, gradient,animation },index) => (
//               <motion.div 
//                 key={title} 
//                 initial={{ opacity: 0, ...animation }}
//                 animate={{ opacity: 1, x: 0, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 className={`bg-gradient-to-br ${gradient} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all relative overflow-hidden group`}
//                 onMouseEnter={() => setHoveredFeature(title)}
//                 onMouseLeave={() => setHoveredFeature(null)}
//               >
//                 <Icon className={`h-12 w-12 ${color} mb-4`} />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{description}</p>
//                 {hoveredFeature === title && (
//                   <motion.div 
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     className="absolute bottom-4 right-4 text-pink-600"
//                   >
//                     <ChevronRight className="h-6 w-6" />
//                   </motion.div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </section>

 
//         <motion.section className="container mx-auto px-4 py-16">
//   <motion.div className="bg-gradient-to-r from-pink-300 to-pink-500 rounded-2xl shadow-2xl p-12 md:p-16 relative overflow-hidden">
//     <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
//     <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
//       <div className="md:w-2/3">
//         <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center md:text-left flex items-center">
//           Eager to build your winning crew?
//           <Star className="ml-4 text-yellow-300 animate-pulse" />
//         </motion.h2>
//         <p className="text-center md:text-left mx-auto md:mx-0 max-w-2xl text-lg md:text-xl text-white/90 mb-10">
//           Join a thriving community of students who have found their perfect partners on Connect2Code and kickstart your journey to innovation and success.
//         </p>
//         <div className="flex justify-center md:justify-start">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Link to={user ? "/profile" : "/login"}>
//               <Button 
//                 variant="secondary" 
//                 size="lg" 
//                 className="bg-white text-purple-700 shadow-lg hover:shadow-xl group font-semibold"
//               >
//                 {user ? "Complete Your Profile" : "Sign Up Now"}
                
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//       <div className="md:w-1/3 flex justify-center">
//         <img 
//           src="/images/Meeting-Download-PNG-Image.png"
//           alt="Team collaboration"
//           className="rounded-full w-54 h-54 md:w-68 md:h-68 object-cover shadow-xl"
//         />
//       </div>
//     </div>
//   </motion.div>
// </motion.section>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus,Users, Rocket, Calendar, MessageSquare, ChevronRight, Check, Star, Share2, UserCog, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function Home() {
  const { user } = useAuth();
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: UserCog,
      title: "Complementary Skill Pairing",
      description: "Discover team members whose unique talents seamlessly complement one another, ensuring a versatile and cohesive team.",
      color: "text-pink-500",
      gradient: "from-pink-100 to-pink-200",
      animation: { x: [-100, 0], opacity: [0, 1] }
    },
    {
      icon: Share2,
      title: "Unified alignment",
      description: "Align your schedule with those of your collaborators, reducing conflicts and paving the way for smooth, productive teamwork.",
      color: "text-purple-500",
      gradient: "from-purple-100 to-purple-200",
      animation: { y: [-100, 0], opacity: [0, 1] }
    },
    {
      icon: MessageCircle,
      title: "Unified Communication Platform",
      description: "Enjoy a seamless flow of information with integrated features for real-time chat, task management, and document collaboration.",
      color: "text-indigo-500",
      gradient: "from-green-100 to-green-200",
      animation: { x: [100, 0], opacity: [0, 1] }
    }
    ,
    {
      icon: UserPlus,
      title: "Smart Team Invitations",
      description: "Send and accept connection requests seamlessly. Build teams effortlessly with intelligent recommendations based on skills and interests.",
      color: "text-blue-500",
      gradient: "from-blue-100 to-blue-200",
      animation: { y: [100, 0], opacity: [0, 1] }
    }
    
  ];

  return (
    <div className="mt-16 w-full max-w-7xl mx-auto">
      <div className="min-h-screen bg-[#171717] overflow-hidden">
        {/* Hero Section with Side Image */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-12 md:py-20 relative"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2 text-left">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
              >
                {"Build Your Ideal Crew".split(" ").map((word, index) => (
                  <motion.span 
                    key={index} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Discover like-minded peers, combine complementary talents, and form a powerhouse team that's ready to tackle any hackathon challenge.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={user ? "/teams" : "/login"}>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all group"
                  >
                    {user ? "Connect with Teams" : "Let's Go"}
                  </Button>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
              <img 
                src="/images/Meeting-Download-PNG-Image.png"
                alt="Team collaboration"
                className="w-full max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description, color, gradient, animation }, index) => (
              <motion.div 
                key={title} 
                initial={{ opacity: 0, ...animation }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group border border-white/10"
                onMouseEnter={() => setHoveredFeature(title)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Icon className={`h-12 w-12 ${color} mb-6`} />
                <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
                {hoveredFeature === title && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute bottom-4 right-4 text-pink-500"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <motion.section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white flex items-center justify-center"
            >
              Eager to build your winning crew?
              <Star className="ml-4 text-yellow-300 animate-pulse" />
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10">
              Join a thriving community of students who have found their perfect partners on Connect2Code and kickstart your journey to innovation and success.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to={user ? "/profile" : "/login"}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg hover:shadow-xl group font-semibold"
                >
                  {user ? "Complete Your Account Setup" : "Sign Up"}
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
