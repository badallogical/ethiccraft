// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     fname: "",
//     lname: "",
//     gender: "",
//     contact: "",
//     whatsapp: "",
//     email: "",
//     collegeName: "",
//     address: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.fname) newErrors.fname = "First Name is required";
//     if (!formData.gender) newErrors.gender = "Gender is required";
//     if (!formData.contact || !/^\d{10}$/.test(formData.contact))
//       newErrors.contact = "Valid Contact Number is required";
//     if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Valid E-Mail is required";
//     if (!formData.collegeName)
//       newErrors.collegeName = "College Name is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Form submitted successfully!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-3">
//       <motion.div
//         className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h3 className="text-2xl font-bold text-green-600 text-center mb-6">
//           Register Now
//         </h3>
//         <form onSubmit={handleSubmit} noValidate>
//           {/* First Name */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               <span className="text-red-500">*</span> First Name:
//             </label>
//             <input
//               name="fname"
//               value={formData.fname}
//               onChange={handleChange}
//               required
//               type="text"
//               className={`w-full p-3 mt-2 border rounded-md transition duration-300 
//               }`}
//             />
//             {errors.fname && (
//               <span className="text-sm text-red-500">{errors.fname}</span>
//             )}
//           </div>

//           {/* Last Name */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Last Name:
//             </label>
//             <input
//               name="lname"
//               value={formData.lname}
//               onChange={handleChange}
//               type="text"
//               className="w-full p-3 mt-2 border rounded-md border-gray-300"
//             />
//           </div>

//           {/* Gender */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               <span className="text-red-500">*</span> Gender:
//             </label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className={`w-full p-3 mt-2 border rounded-md transition duration-300`}
//               className={`w-full p-3 mt-2 border rounded-md transition duration-300 ${
//                 errors.gender ? "border-red-500" : "border-gray-300"
//               }`}
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//             {errors.gender && (
//               <span className="text-sm text-red-500">{errors.gender}</span>
//             )}
//           </div>

//           {/* Contact */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               <span className="text-red-500">*</span> Contact:
//             </label>
//             <input
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//               type="tel"
//               pattern="[0-9]{10}"
//               className={`w-full p-3 mt-2 border rounded-md transition duration-300
//               }`}
//             />
//             {errors.contact && (
//               <span className="text-sm text-red-500">{errors.contact}</span>
//             )}
//           </div>

//           {/* Whatsapp */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Whatsapp:
//             </label>
//             <input
//               name="whatsapp"
//               value={formData.whatsapp}
//               onChange={handleChange}
//               pattern="[0-9]{10}"
//               type="tel"
//               className="w-full p-3 mt-2 border rounded-md border-gray-300"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               <span className="text-red-500">*</span> E-Mail:
//             </label>
//             <input
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               type="email"
//               className={`w-full p-3 mt-2 border rounded-md transition duration-300
//               }`}
//             />
//             {errors.email && (
//               <span className="text-sm text-red-500">{errors.email}</span>
//             )}
//           </div>

//           {/* College Name */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               <span className="text-red-500">*</span> College Name:
//             </label>
//             <input
//               name="collegeName"
//               value={formData.collegeName}
//               onChange={handleChange}
//               type="text"
//               className="w-full p-3 mt-2 border rounded-md border-gray-300"
//             />

//             {errors.collegeName && (
//               <span className="text-sm text-red-500">{errors.collegeName}</span>
//             )}

//           </div>

//           {/* Submit Button */}
//           <motion.button
//             type="submit"
//             className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Registration;
