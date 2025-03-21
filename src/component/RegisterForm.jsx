import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary-black">
      <form onSubmit={handleSubmit} className=" p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl font-bold  mb-4 text-white">Register</h2>
        <p className="text-xl text-primary-white">Hello, Thank you for Choosing Us!</p>
        <div className="mb-4">
          <label className="block text-primary-white">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary-white">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary-white">Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required 
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
}
