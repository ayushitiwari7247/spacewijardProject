import React, { useState } from "react";
import imgp from "../assets/Profile_img 3.png"
import Union from "../assets/Union (1).png"

const Profile = () => {
    const [form, setForm] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        Role: "",
        organigation: "",
        profilePic: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        // If the field is file input, use files[0]
        if (files) {
            setForm({ ...form, [name]: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };
    const handleSubmit = (e) => {
    }


        // Here, you can process the form data including the profilePic.
        // For file uploads, consider using FormData:
        const formData = new FormData();
        formData.append("FirstName", form.FirstName);
        formData.append(" LastName", form.LastName);
        formData.append("email", form.email);
        formData.append("Role", form.Role);
        formData.append("organigation", form.organigation)
        formData.append("profilePic", form.profilePic);

        // Example: send formData to your backend endpoint
        // fetch("/api/register", { method: "POST", body: formData })

        console.log(form);


        return (
            <div className=" bg-primary-black flex flex-col items-center justify-center p-4">
                <div className="bg-primary-black p-8 rounded shadow-md w-full flex  justify-evenly items-center ">

                    <div className="mb-4 ">
                        <label htmlFor="profilePic" className="block  mb-1 ">
                            <img src={imgp} alt="" />

                        </label>
                        <input
                            type="email"
                            name="profilePic"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full text-primary-white text-center"
                        />
                    </div>
                    <form  encType="onSubmit={handleSubmit}">
                        <h2 className="text-2xl font-bold mb-6 text-primary-white">Good Morning {form.FirstName}! </h2>
                        <div className="flex gap-10">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-primary-white">
                                    First  Name
                                </label>
                                <input
                                    type="text"
                                    name="FirstName"
                                    id="FirstName"
                                    value={form.FirstName}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded focus:outline-none text-primary-white focus:ring-1 bg-[#131117]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-primary-white">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="LastName"
                                    id="LastName"
                                    value={form.LastName}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded focus:outline-none text-primary-white focus:ring-1 bg-[#131117]"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-primary-white">
                                    email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded focus:outline-none text-primary-white focus:ring-1 bg-[#131117]"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="confirmPassword" className="block text-primary-white">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    name="Role"
                                    id="Role"
                                    value={form.Role}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded focus:outline-none text-primary-white focus:ring-1 bg-[#131117]"
                                    required
                                />
                            </div>
                            </div>
                            <div>
                            <div className="mb-6 ">
                                <label htmlFor="confirmPassword" className="block text-primary-white">
                                    Orgnigation
                                </label>
                                <input
                                    type="text"
                                    name="organigation"
                                    id="organigation"
                                    value={form.organigation}
                                    onChange={handleChange}
                                    className="mt-1 w-full px-4 py-2 border rounded focus:outline-none text-primary-white focus:ring-1 bg-[#131117]"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                        >
                            Edit Profile
                        </button>
                    </form>
                </div>
                <div>
                    <img src={Union} alt="" srcset="" />
                </div>
            </div>
        );

    };
    export default Profile;
