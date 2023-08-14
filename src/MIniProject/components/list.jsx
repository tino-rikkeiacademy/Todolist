/* eslint-disable react/prop-types */
// import React from 'react'
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function List({listData , handleEdit, handleDelete, handleCheck}) {
  const [check, setCheck] = useState(false);

  return (
    <div>
      <p className="font-bold text-center my-4">
        You have {listData.length} tasks to complete!
      </p>
      <div className="flex justify-center">
        <div >
            {
                listData.length >0 && listData.map((item,index) => (
                    <div
                    className="w-[400px] h-[50px] flex justify-evenly items-center bg-white "
                    style={{
                      padding: "10px",
                      boxShadow: "5px 10px 18px #888888",
                    }}
                    key={index}
                  >
                    <Checkbox
                      checked={item.check}
                      onChange={() => {
                        setCheck(!check);
                        handleCheck(index, item);
                      }}
                    />
                    {!item.check ? <p>{item.job}</p> : <del>{item.job}</del>}
        
                    <Button
                      variant="contained"
                      startIcon={<EditIcon />}
                      sx={{ height: "30px", m: 2 }} 
                      onClick={() => handleEdit(item)}
                    >
                      EDIT
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      color="error"
                      sx={{ height: "30px", m: 2}}
                      onClick={() => handleDelete(index)}
                    >
                      DELL
                    </Button>
                  </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default List;
