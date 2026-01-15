import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import logo from '../assets/logo-3.png';

const Login = () => {

    const navigate = useNavigate();
    const [ inputValues, setInputValues ] = useState({
        email: "",
        password: ""
    });
    const {email, password} = inputValues;
    const [ emailError, setEmailError] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const handleInput = (e) =>{
        const {name, value} = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
        setEmailError("");
        setPasswordError("");        
    };
    const handleSubmit = async (e) => {
        if(e.target.checkValidity()){     
            e.preventDefault();       
            try {
                const {data} = await axios.post("http://localhost:4000/login", {
                    ...inputValues,
                }, {withCredentials: true});
                
                const { success, message, emailNotFound, passwordNotFound } = data;
                if(success){
                    setTimeout(()=>{navigate("/")}, 0);
                } else {
                    if(emailNotFound){
                        setEmailError(message);
                    };
                    if(passwordNotFound){
                        setPasswordError(message);
                    };                
                }
            } catch (err) {
                console.error(err);
            }
        };        
    };
    

  return (
    <div data-theme="nord">
      <div className="min-h-screen flex flex-col items-center justify-top py-10 px-4">
        <div className="max-w-[480px] w-full">
          <a href="javascript:void(0)"><img
            src={logo} alt="logo" className="w-40 mb-8 mx-auto block" />
          </a>
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <h1 className="text-slate-900 text-center text-3xl font-semibold">Account Login</h1>
            <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" required 
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                  placeholder="Enter user name" onChange={handleInput}/>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer"viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="3 14 9 14 9 17 15 17 15 14 21 14" fill="none" stroke="bbb" strokeMiterlimit="10" strokeWidth="2"></polyline><rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="bbb" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></rect></g></svg>
                </div>
                <div className= "text-red-600 h-3 flex">
                    <span className="ml-1">{emailError}</span>
                </div>
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" required 
                  className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600" 
                  placeholder="Enter password" onChange={handleInput}/>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
                <div className= "text-red-600 h-3 flex">
                    <span className="ml-1">{passwordError}</span>
                </div>
              </div>
              {/*
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="javascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>
              */}
              <div className="flex justify-around">
                <button data-theme="coffee" type="submit" className="mt-4 text-white text-lg w-full btn bg-blue-600 border-0 hover:bg-blue-700">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
