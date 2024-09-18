import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-8'
        style={{ height: '80vh', width: '90vw' }}
      >
        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
          Welcome Back
        </h2>

        <form>
          <div className='relative mb-4'>
            <Mail className='absolute top-3 left-3 text-green-500' size={20} />
            <input
              type='email'
              placeholder='Email Address'
              className='w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300'
            />
          </div>

          <div className='relative mb-4'>
            <Lock className='absolute top-3 left-3 text-green-500' size={20} />
            <input
              type='password'
              placeholder='Password'
              className='w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300'
            />
          </div>

          <div className='flex items-center mb-6'>
            <Link to='/forgot-password' className='text-sm text-green-400 hover:underline'>
              Forgot password?
            </Link>
          </div>

          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
              type='button' // Change type to button since it's not a form submission
            >
              Login
            </motion.button>
          </Link>
        </form>
        <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center mt-10'>
          <p className='text-sm text-gray-400'>
            Don't have an account?{" "}
            <Link to='/' className='text-green-400 hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default SignIn;
