import React, { useState } from "react";

interface IProps {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ({setCategories}:IProps) => {
  const [inputValue, setInputValue] = useState("");



  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( (categories: any) =>[inputValue, ...categories ]);
            setInputValue("");
        }

       
    };

  return (
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
  );


};
