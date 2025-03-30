import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_HOST } from "../ApiConfig/ApiConfig";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (email === "abc@gmail.com" && password === "123") {
      localStorage.setItem('role', "ADMIN");
      localStorage.setItem('email', email);
      navigate('/dashboard');

    } else {
      setError('Invalid Credintial');
    }


    // try {
    //   const response = await fetch(`${API_HOST}/auth/login?email=${email}&password=${password}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     localStorage.setItem('authToken', data?.token);
    //     localStorage.setItem('role', data?.user?.role);
    //     localStorage.setItem('email', data?.user?.email);
    //     localStorage.setItem('id', data?.user?.id);
    //     localStorage.setItem('portfolio', data?.user?.portfolio);
    //     navigate('/dashboard');
    //   } else {
    //     setError(data.message || 'Login failed');
    //   }
    // } catch (error) {
    //   setError('Something went wrong, please try again.');
    // }
  };



  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 mt-1"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-4 h-4 text-blue-600" />
                ) : (
                  <FaEye className="w-4 h-4 text-blue-600" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 mt-6 rounded-md hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Don't rebamber password? <a href="#" className="text-purple-600 hover:underline">Forgate</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
