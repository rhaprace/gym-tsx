
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
        navigate('/dashboard')
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
                navigate('/login');
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
            <input
            type="password"
            placeholder="Re-Enter Password"
            className="w-full text-black py-2 mb-4 bg-transparent border-b border-white focus:outline-none focus:border-black"
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
            <p className='text-lg absolute text-white bg-transparent px-2 pb-5'>OR</p>
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
            Already have an account? <span className='text-blue-950'>Log In Here</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
