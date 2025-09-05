import React from 'react'

function MyAccount() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-5 px-4">
   
      <h1 className="text-4xl font-serif bg-[#d3c2a5] px-6 py-2 rounded-sm mb-10">
        My Account
      </h1>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
        
        <div className="border-gray-300 border-2  rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-medium mb-6">Access</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full  border-gray-100 border-2  rounded-md px-3 py-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full  border-gray-100 border-2 rounded-md px-3 py-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="bg-[#c3ad8a] text-white px-5 py-2 rounded-md"
              >
                Access
              </button>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
            </div>
            <p className="text-sm text-gray-400 cursor-pointer">
              Forgot your password?
            </p>
          </form>
        </div>

         <div className="border-gray-300 border-2 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-medium mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full  border-gray-100 border-2 rounded-md px-3 py-2 bg-gray-50 focus:outline-none"
              />
            </div>
            <p className="text-sm mb-4 text-gray-600">
              A link will be sent to your email address to set a new password.
             </p>
             <p className='text-sm mb-4 text-gray-600'>
              Your personal data will be used to process your order, improve your
              experience on this website, and manage access to your account.
            </p>
            <button
              type="submit"
              className="bg-[#c3ad8a] text-white px-5 py-2 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MyAccount