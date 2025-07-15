// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithPopup } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { auth, googleProvider, db } from '@/lib/firebase';
// import { Button } from '@/components/ui/Button';
// import { Chrome } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Login() {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (!userDoc.exists()) {
//         // Create new user profile
//         await setDoc(doc(db, 'users', user.uid), {
//           email: user.email,
//           displayName: user.displayName,
//           photoURL: user.photoURL,
//           skills: [],
//           availability: [],
//           experience: 'beginner',
//           interests: [],
//           bio: '',
//           createdAt: new Date().toISOString()
//         });
//       }

//       navigate('/profile');
//     } catch (err) {
//       setError('Failed to sign in with Google');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="mt-20">
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
//     >
//       <motion.div 
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-2xl border border-gray-100"
//       >
//         <div className="text-center">
//           <motion.h2 
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl font-bold tracking-tight text-blue-900"
//           >
//             TeamUp
//           </motion.h2>
//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-3 text-gray-600"
//           >
//             Find your perfect hackathon team today
//           </motion.p>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="space-y-4"
//         >
//           <Button
//             onClick={handleGoogleSignIn}
//             className="w-full group"
//             size="lg"
//             variant="outline"
//           >
//             <Chrome className="mr-3 h-5 w-5 text-red-500 group-hover:scale-110 transition-transform" />
//             Continue with Google
//           </Button>

//           {error && (
//             <motion.p 
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg"
//             >
//               {error}
//             </motion.p>
//           )}
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-8 text-center text-sm text-gray-500"
//         >
//           By signing in, you agree to our{' '}
//           <a href="#" className="text-blue-600 hover:underline">
//             Terms of Service
//           </a>{' '}
//           and{' '}
//           <a href="#" className="text-blue-600 hover:underline">
//             Privacy Policy
//           </a>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//     </div>
//   );
// }
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithPopup } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { auth, googleProvider, db } from '@/lib/firebase';
// import { Button } from '@/components/ui/Button';
// import { LogIn} from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Login() {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (!userDoc.exists()) {
//         // Create new user profile
//         await setDoc(doc(db, 'users', user.uid), {
//           email: user.email,
//           displayName: user.displayName,
//           photoURL: user.photoURL,
//           skills: [],
//           availability: [],
//           experience: 'beginner',
//           interests: [],
//           bio: '',
//           createdAt: new Date().toISOString()
//         });
//       }

//       navigate('/profile');
//     } catch (err) {
//       setError('Failed to sign in with Google');
//       console.error(err);
//     }
//   };

//   return (
//     <div className="mt-20">
//     {/* <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
//     > */}
//       <motion.div 
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="w-full max-w-md space-y-8 rounded-2xl bg-gray-300 p-8 shadow-2xl border border-gray-100"
//       >
//         <div className="text-center">
//           <motion.h2 
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-4xl font-bold tracking-tight text-gray-900"
//           >
//             Connect2Code
//           </motion.h2>
//           <motion.p 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="mt-3 text-gray-900"
//           >
//            Build your ideal hackathon team now!
//           </motion.p>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="space-y-4"
//         >
//           {/* <Button
//             onClick={handleGoogleSignIn}
//             className="w-full group"
//             size="lg"
//             variant="outline"
//           >
//             <LogIn className="mr-3 h-5 w-5 text-pink-500 group-hover:scale-110 transition-transform" />

//             Continue with Google
//           </Button> */}
//           <Button
//   onClick={handleGoogleSignIn}
//   className="w-full group bg-gray-800 text-white border border-white hover:bg-gray-900 transition-colors"
//   size="lg"
//   variant="outline"
// >
//   <LogIn className="mr-3 h-5 w-5 text-white group-hover:scale-110 transition-transform" />
//   Continue with Google
// </Button>


//           {error && (
//             <motion.p 
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg"
//             >
//               {error}
//             </motion.p>
//           )}
//         </motion.div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-8 text-center text-sm text-gray-500"
//         >
//           By signing in, you agree to our{' '}
//           <a href="#" className="text-blue-600 hover:underline">
//             Terms of Service
//           </a>{' '}
//           and{' '}
//           <a href="#" className="text-blue-600 hover:underline">
//             Privacy Policy
//           </a>
//         </motion.div>
//       </motion.div>
   
//     </div>
//   );
// }
// 
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithPopup } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { auth, googleProvider, db } from '@/lib/firebase';
// import { Button } from '@/components/ui/Button';
// import { LogIn } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Login() {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (!userDoc.exists()) {
//         // Create new user profile
//         await setDoc(doc(db, 'users', user.uid), {
//           email: user.email,
//           displayName: user.displayName,
//           photoURL: user.photoURL,
//           skills: [],
//           availability: [],
//           experience: 'beginner',
//           interests: [],
//           bio: '',
//           createdAt: new Date().toISOString()
//         });
//       }

//       navigate('/profile');
//     } catch (err) {
//       setError('Failed to sign in with Google');
//       console.error(err);
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       // Center the box on the viewport without an extra outer container
//       className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md space-y-8 rounded-2xl bg-gray-300 p-8 shadow-2xl border border-gray-100 mx-100 my-100 mr-100 ml-100"
// >
//       <div className="text-center">
//         <motion.h2 
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-4xl font-bold tracking-tight text-gray-900"
//         >
//           Connect2Code
//         </motion.h2>
//         <motion.p 
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-3 text-gray-900"
//         >
//           Build your ideal hackathon team now!
//         </motion.p>
//       </div>

//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//         className="space-y-4"
//       >
//         <Button
//           onClick={handleGoogleSignIn}
//           className="w-full group bg-gray-800 text-white border border-white hover:bg-gray-900 transition-colors"
//           size="lg"
//           variant="outline"
//         >
//           <LogIn className="mr-3 h-5 w-5 text-white group-hover:scale-110 transition-transform" />
//           Continue with Google
//         </Button>

//         {error && (
//           <motion.p 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg"
//           >
//             {error}
//           </motion.p>
//         )}
//       </motion.div>

//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="mt-8 text-center text-sm text-gray-500"
//       >
//         By signing in, you agree to our{' '}
//         <a href="#" className="text-blue-600 hover:underline">
//           Terms of Service
//         </a>{' '}
//         and{' '}
//         <a href="#" className="text-blue-600 hover:underline">
//           Privacy Policy
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// }

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithPopup } from 'firebase/auth';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { auth, googleProvider, db } from '@/lib/firebase';
// import { Button } from '@/components/ui/Button';
// import { LogIn } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function Login() {
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;

//       // Check if user exists in Firestore
//       const userDoc = await getDoc(doc(db, 'users', user.uid));

//       if (!userDoc.exists()) {
//         // Create new user profile
//         await setDoc(doc(db, 'users', user.uid), {
//           email: user.email,
//           displayName: user.displayName,
//           photoURL: user.photoURL,
//           skills: [],
//           availability: [],
//           experience: 'beginner',
//           interests: [],
//           bio: '',
//           createdAt: new Date().toISOString()
//         });
//       }

//       navigate('/profile');
//     } catch (err) {
//       setError('Failed to sign in with Google');
//       console.error(err);
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 0.4 }}
//       // Center the box on the viewport without an extra outer container
//       className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
//                  w-full max-w-md space-y-8 rounded-2xl bg-gray-300 p-8 shadow-2xl border border-gray-100"
//     >
//       <div className="text-center">
//         <motion.h2 
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-4xl font-bold tracking-tight text-gray-900"
//         >
//           Connect2Code
//         </motion.h2>
//         <motion.p 
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-3 text-gray-900"
//         >
//           Build your ideal hackathon team now!
//         </motion.p>
//       </div>

//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//         className="space-y-4"
//       >
//         <Button
//           onClick={handleGoogleSignIn}
//           className="w-full group bg-gray-800 text-white border border-white hover:bg-gray-900 transition-colors"
//           size="lg"
//           variant="outline"
//         >
//           <LogIn className="mr-3 h-5 w-5 text-white group-hover:scale-110 transition-transform" />
//           Continue with Google
//         </Button>

//         {error && (
//           <motion.p 
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg"
//           >
//             {error}
//           </motion.p>
//         )}
//       </motion.div>

//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//         className="mt-8 text-center text-sm text-gray-500"
//       >
//         By signing in, you agree to our{' '}
//         <a href="#" className="text-blue-600 hover:underline">
//           Terms of Service
//         </a>{' '}
//         and{' '}
//         <a href="#" className="text-blue-600 hover:underline">
//           Privacy Policy
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// }
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));

      if (!userDoc.exists()) {
        // Create new user profile
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          skills: [],
          availability: [],
          experience: 'beginner',
          interests: [],
          bio: '',
          createdAt: new Date().toISOString()
        });
      }

      navigate('/profile');
    } catch (err) {
      setError('Failed to sign in with Google');
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md space-y-8 rounded-2xl bg-gray-300 p-8 shadow-2xl border border-gray-100"
      >
        <div className="text-center">
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900"
          >
            Connect2Code
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-gray-900"
          >
            Build your ideal hackathon team now!
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {/* <Button
            onClick={handleGoogleSignIn}
            className="w-full group bg-gray-800 text-white border border-white hover:bg-gray-900 transition-colors"
            size="lg"
            variant="outline"
          >
            <LogIn className="mr-3 h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            Continue with Google
          </Button> */}
          {/* <Button
  onClick={handleGoogleSignIn}
  className="w-full group bg-gray-800 text-white border border-white hover:bg-gray-900 transition-colors flex items-center"
  size="lg"
  variant="outline"
>
  <span className="mr-3 flex items-center justify-center h-6 w-6 rounded-full bg-white text-gray-800 font-bold group-hover:scale-110 transition-transform">
    G
  </span>
  Continue with Google
</Button> */}
<Button
  onClick={handleGoogleSignIn}
  className="w-full group bg-gray-800 text-white border border-white hover:bg-gray-900 transition-colors flex items-center"
  size="lg"
  variant="outline"
>
  <span className="mr-3 flex items-center justify-center h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white text-gray-800 font-bold text-lg sm:text-xl group-hover:scale-110 transition-transform">
    G
  </span>
  Continue with Google
</Button>


          {error && (
            <motion.p 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center text-sm text-red-600 bg-red-50 p-2 rounded-lg"
            >
              {error}
            </motion.p>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          By signing in, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
