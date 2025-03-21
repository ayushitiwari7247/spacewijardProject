import { useState } from "react";

const Resetpassword = () => {
    const [formData, setFormData] = useState({
        email: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        
            <div className='flex flex-col iteam-center justify-center w-2/4 mx-auto gap-5 '>

                <h2 className='text-white text-4xl font-bold '>Reset password</h2>
                <p className='text-primary-white text-[16px] w-[320px]'>We will send you an email with instructions
                    on how to reset your password.</p>
                <div className="mb-4">
                    <label className="block text-primary-white">Email</label>
                    <input
                    placeholder="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-75 px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                </div>
                <button type="submit" className="w-75 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                    Send
                </button>
                <p className="text-blue-500 text-center" >Return to login</p>
            </div>
        
    )
}

export default Resetpassword
