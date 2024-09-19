import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // After form submission, redirect to /dashboard
    navigate('/dashboard');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-md"
    >
      {/* Name Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Name
        </label>
      </div>

      {/* Course Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="course"
          id="course"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="course"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Course
        </label>
      </div>

      {/* Branch Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="branch"
          id="branch"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="branch"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Branch
        </label>
      </div>

      {/* Student ID Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="student_id"
          id="student_id"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="student_id"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Student ID
        </label>
      </div>

      {/* Year of Passing Out Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="number"
          name="year_of_passing_out"
          id="year_of_passing_out"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="year_of_passing_out"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Year of Passing Out
        </label>
      </div>

      {/* LC Handle Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="lc_handle"
          id="lc_handle"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="lc_handle"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Leetcode Handle
        </label>
      </div>

      {/* Codeforces Handle Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="codeforces_handle"
          id="codeforces_handle"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="codeforces_handle"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Codeforces Handle
        </label>
      </div>

      {/* Codechef Handle Field */}
      <div className="relative z-0 w-full mb-8 group">
        <input
          type="text"
          name="codechef_handle"
          id="codechef_handle"
          className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="codechef_handle"
          className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
        >
          Codechef Handle
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;