/* eslint-disable react/prop-types */
// import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import BasicTextFields from "./TextField";
import EditIcon from '@mui/icons-material/Edit';

function Header({ state, handleChange, handleAdd, isEdit, handleEdit }) {

  return (
    <div className="w-full h-16 bg-[#2069CF] flex items-center p-6 text-white">
      <p>Mini Project</p>
      <BasicTextFields state={state} handleChange={handleChange} />
      {isEdit ? (
        <button onClick={() => handleEdit(state)}>
          <EditIcon />
        </button>
      ) : (
        <button onClick={() => handleAdd(state)}>
          <AddIcon />
        </button>
      )}
    </div>
  );
}

export default Header;
