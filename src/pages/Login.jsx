import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <div className="h-screen flex items-center justify-center font-[Poppins] bg-white">
  <div className="flex flex-col items-center">
    <div className="w-[250px] mb-[24px] text-left">
      <h1 className="text-[24px] font-bold">Welcome back!</h1>
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
      Login
    </button>

    

    <p className="text-center text-[14px] text-black mt-6">
      Don't have an account?{" "}
      <Link to="/signup" className="hover:text-[#1AC2EA]">Sign Up</Link>
    </p>
  </div>
</div>

    )    
}