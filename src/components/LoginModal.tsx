import React, { useState } from 'react';
import { account } from '../AppwriteConfig'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginModal({ isOpen, onClose}) {
  if (!isOpen) return null;

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
})

const Login = async (e) => {
 e.preventDefault()

 try {
  await account.createEmailPasswordSession(user.email, user.password);
  navigate("/dashboard")
  window.location.reload();
  } catch (error) {
     console.log(error)
     toast.error("Login Failed..........")
  }
 }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
        <ToastContainer />
      <form onSubmit={Login} className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm relative">
          <img src='https://cdn-icons-png.flaticon.com/512/7915/7915522.png' width={70} className='mx-auto mb-2' />
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border text-black px-4 py-2 rounded-md focus:ring focus:outline-none"
                id='email'
                name='email'
                onChange={(e) => {
                    setUser({
                      ...user,
                      email: e.target.value
                    })
                  }}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border text-black px-4 py-2 rounded-md focus:ring focus:outline-none"
                id='password'
                name='password'
                onChange={(e) => {
                    setUser({
                      ...user,
                      password: e.target.value
                    })
                  }}
          />
        </div>

        <div className="w-full px-2 mt-6">
          <button
           type='submit'
            className="px-4 py-2 w-full bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
        >
          ×
        </button>
      </form>
    </div>
  );
}
