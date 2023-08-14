// import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import BasicTextFields from "./TextField";

function Header() {
  return (
    <div className="w-full h-16 bg-[#2069CF] flex items-center p-6 text-white">
        <p>Mini Project</p>
        <BasicTextFields/>
        <button>
            <AddIcon/>
        </button>
    </div>
  )
}

export default Header;