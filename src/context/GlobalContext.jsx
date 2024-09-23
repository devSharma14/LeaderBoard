import React, { createContext, useState } from 'react';

// Create the context
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    lcHandle: '',
    cfHandle: '',
    ccHandle: '',
  });

  // Function to update the form data
  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
    // console.log("Global data updated:", { ...formData, ...data }); // Updated logging
  };


  return (
    <GlobalContext.Provider value={{ formData, updateFormData }}>
      {children}
    </GlobalContext.Provider>
  );
};
