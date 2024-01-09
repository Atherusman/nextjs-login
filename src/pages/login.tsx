// components/SignupForm.tsx
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
const Login: React.FC = () => {
  const router = useRouter();
  const fromik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (val) => {
      if (val.email === "ather@gmail.com" && val.password === "Admin") {
        router.push("/header");
      }
      else{
        alert('invalid Cridentials')
      }
    },
  });

  return (
    <form className="max-w-sm mx-auto mt-8 p-3 rounded border-solid border-2 " onSubmit={fromik.handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your email"
          onChange={fromik.handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-600 text-sm font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Enter your password"
          onChange={fromik.handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Login;
