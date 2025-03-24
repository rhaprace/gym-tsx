
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
const SignUp = () => {
  const navigate = useNavigate(); // Hook for navigation
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [authing, setAuthing] = useState(false);
const sigInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
        console.log(response.user.uid);
        navigate('/')
    })
    .catch(error => {
        console.log(error)
        setAuthing(false)
    });
}

    const signInWithEmail = async () => {
        if(password !== confirmPassword){
            setError("Password Does Not Match")
            return;
        }
        setAuthing(true)
        setError('');

        createUserWithEmailAndPassword(auth, email, password)
              .then(response => {
                console.log(response.user.uid);
                navigate('/');
              })
              .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
              })
    }
  return (
    <div id="signup" className="fixed inset-0 bg-gray-20 bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="relative w-full max-w-md bg-[#1a1a1a] p-8 rounded-md">
      <button onClick={() => navigate('/')}
            className="flex text-white pb-4"
            >
            <ArrowLongLeftIcon className="h-6 w-6 text-gray-50"/>
          </button>
        <h3 className="text-4xl font-bold mb-2 text-white">Sign Up</h3>
        <p className="text-lg mb-4 text-white text-center">Create an account to get started!</p>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <input
            type="password"
            placeholder="Re-Enter Password"
            className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
            <div className="mb-4">
          <button
            className="w-full bg-transparent border border-white text-white font-semibold rounded-md p-4"
            onClick={signInWithEmail}
            disabled={authing}>
                Register
          </button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className='w-full flex items-center justify-center relative py-4'>
            <div className='w-full h-[1px] bg-gray-500'></div>
            <p className='text-lg absolute text-gray-500 bg-[#1a1a1a] px-2'>OR</p>
        </div>
          < button
            className="w-full bg-white text-black font-semibold rounded-md p-4 text-center flex items-center"
            onClick={sigInWithGoogle}
            disabled={authing}
          >
            Log In With Google
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <button onClick={() => navigate('/login')} className="text-white">
            Already have an account? <span className='text-blue-500'>Log In Here</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
