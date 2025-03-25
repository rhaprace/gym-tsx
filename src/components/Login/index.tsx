
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';

const LogIn = () => {
  const navigate = useNavigate(); 
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authing, setAuthing] = useState(false);
const sigInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(response => {
        console.log(response.user.uid);
        navigate('/dashboard')
    })
    .catch(error => {
        console.log(error)
        setAuthing(false)
    });
}

    const signInWithEmail = async () => {
        setAuthing(true)
        setError('');

        signInWithEmailAndPassword(auth, email, password)
              .then(response => {
                console.log(response.user.uid);
                navigate('/dashboard');
              })
              .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
              })
    }

  return (
    <div id="signup" className="fixed inset-0 bg-secondary-400 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="relative w-full max-w-md p-8 rounded-md bg-transparent bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-white border-opacity-30">
      <button onClick={() => navigate('/')}
            className="flex justify-end text-white pb-4"
            >
            <ArrowLongLeftIcon className="h-6 w-6 text-gray-50"/>
          </button>
        <h3 className="text-4xl font-bold mb-2 text-white">LogIn</h3>
        <p className="text-lg mb-4 text-white text-center">Welcome Back!</p>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full text-black py-2 mb-4 bg-transparent border-b border-white focus:outline-none focus:border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-black py-2 mb-4 bg-transparent border-b border-white focus:outline-none focus:border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <div className="mb-4">
          <button
            className="w-full bg-transparent border border-white text-white font-semibold rounded-md p-4"
            onClick={signInWithEmail}
            disabled={authing}
          >
            Log In
          </button>

        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className='w-full flex items-center justify-center relative py-4'>
            <p className='text-lg absolute text-white bg-transparent px-2 mb-5'>OR</p>
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
          <button onClick={() => navigate('/signup')} className="text-white">
            Don't have an account? <span className='text-blue-950'>Sign Up here</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
