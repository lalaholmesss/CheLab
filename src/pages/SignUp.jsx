import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/images/chelab-logo.png"
import googleLogo from "../assets/images/Google-logo.png"
import appleLogo from "../assets/images/apple-logo.png"
import about from '../data/about';

export default function SignUp() {
    return(
          <div className="h-screen flex items-center justify-center font-[Poppins] bg-white">
          <div className="flex flex-col items-center">
            <div className="w-[250px] mb-[24px] text-left">
              <h1 className="text-[24px] font-bold">Get Started Now!</h1>
            </div>
        
            <div className="flex flex-col w-[250px] pb-[16px]">
            <label htmlFor="username" className="text-[14px] font-medium mb-2">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="px-4 py-[12px] rounded-[8px] border border-gray-300 focus:outline-none placeholder-gray-400 text-[14px]"
            />
            </div>

            <div className="flex flex-col w-[250px] pb-[16px]">
              <label htmlFor="email" className="text-[14px] font-medium mb-2">Email address</label>
              <input
                type="text"
                name="email"
                placeholder="username@email.com"
                className="px-4 py-[12px] rounded-[8px] border border-gray-300 focus:outline-none placeholder-gray-400 text-[14px]"
              />
            </div>
        
            <div className="flex flex-col w-[250px] pb-[40px]">
              <label htmlFor="password" className="text-[14px] font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                minLength="8"
                className="px-4 py-[12px] rounded-[8px] border border-gray-300 focus:outline-none placeholder-gray-400 text-[14px]"
              />
            </div>
        
            <button className="bg-[#00BF63] w-[250px] text-white text-[16px] font-semibold py-[10px] rounded-[8px] text-center cursor-pointer">
              Sign Up
            </button>
        
            <div className="flex my-[24px]">
              <span className="px-2 text-gray-400 text-sm">Or</span>
            </div>
        
            <div className="flex justify-center gap-4 h-[32px]">
              <button className="cursor-pointer border w-[250px] py-2 rounded-full flex items-center justify-center gap-2">
                <img src={googleLogo} alt="Google" className="w-5 h-5" />
                <span className="text-xs">Sign in with Google</span>
              </button>
            </div>
        
            <p className="text-center text-[14px] text-black mt-6">
              Already have an account? {" "}
              <Link to="/login" className="hover:text-[#1AC2EA]">Login</Link>
            </p>
          </div>
        </div>
    )    
}