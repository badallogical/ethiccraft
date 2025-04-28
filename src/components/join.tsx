import React, { useState } from "react";
import { motion } from "framer-motion";

type FormDataType = {
  firstName: string;
  lastName: string;
  gender: string;
  contact: string;
  whatsapp: string;
  email: string;
  collegeName: string;
  courseName: string;
  courseYear: string;
  address: string;
  achievements: string;
  hobbies: string;
  inspiration: string;
};

export default function JoinUsForm() {
  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    gender: "",
    contact: "",
    whatsapp: "",
    email: "",
    collegeName: "",
    courseName: "",
    courseYear: "",
    address: "",
    achievements: "",
    hobbies: "",
    inspiration: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormDataType, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormDataType, string>> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.contact || !/^[0-9]{10}$/.test(formData.contact))
      newErrors.contact = "Valid Contact Number is required";
    if (!formData.email || !/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email))
      newErrors.email = "Valid Email is required";
    if (!formData.collegeName.trim()) newErrors.collegeName = "College Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    const url = "https://script.google.com/macros/s/AKfycbyxYHNwPgLj0Ig1aU80AQUsYinO9aCRZggwIAbuRaoHffGuM8f0wwt8XpQsq6PGicoUZA/exec"; // Replace with actual URL

  try {
      const response = await fetch(url, {
          method: "POST",
          mode: "no-cors",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      // // no-cors mode means we cannot access response data
      // if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
              firstName: "",
              lastName: "",
              gender: "",
              contact: "",
              whatsapp: "",
              email: "",
              collegeName: "",
              courseName: "",
              courseYear: "",
              address: "",
              achievements: "",
              hobbies: "",
              inspiration: "",
          });
      // } else {
          // alert("Submission failed, please try again.");
      // }

  } catch (error) {
      console.error("Error submitting form:", error);
      // alert("An error occurred. Please try again later.");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5 pt-24">

      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-green-600 text-center mb-8">Register Now</h3>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {[
            { name: "firstName", placeholder: "First Name" },
            { name: "lastName", placeholder: "Last Name" },
            { name: "contact", placeholder: "Contact" },
            { name: "whatsapp", placeholder: "WhatsApp" },
            { name: "email", placeholder: "E-Mail", type: "email" },
            { name: "collegeName", placeholder: "College Name" },
            { name: "courseName", placeholder: "Course Name" },
            { name: "courseYear", placeholder: "Course Year" },
          ].map(({ name, placeholder, type = "text" }) => (
            <div key={name}>
              <input
                type={type}
                name={name}
                value={formData[name as keyof FormDataType]} // Fix for TS error
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors[name as keyof FormDataType] && (
                <p className="text-red-500 text-sm mt-1">{errors[name as keyof FormDataType]}</p>
              )}
            </div>
          ))}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          {[
            { name: "address", placeholder: "Address" },
            { name: "achievements", placeholder: "Achievements" },
            { name: "hobbies", placeholder: "Hobbies" },
            { name: "inspiration", placeholder: "Inspiration for Joining Ethicraft Club" },
          ].map(({ name, placeholder }) => (
            <textarea
              key={name}
              name={name}
              value={formData[name as keyof FormDataType]} // Fix for TS error
              onChange={handleChange}
              placeholder={placeholder}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
          <motion.button
            type="submit"
            className="w-full p-3 bg-emerald-600 text-white rounded-md hover:bg-blue-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
