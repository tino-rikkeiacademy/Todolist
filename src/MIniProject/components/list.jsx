// import React from 'react'
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
function List() {
    const [check, setCheck] = useState(false);

  return (
    <div>
      <p className="font-bold text-center my-4">
        You have 1 tasks to complete!
      </p>
      <div className="flex justify-center">
        <div
          className="w-[400px] h-[50px] flex justify-evenly items-center bg-white "
          style={{
            padding: "10px",
            boxShadow: "5px 10px 18px #888888",
          }}
        >
          <Checkbox checked={check} onChange={() => {setCheck(!check)}}/>
          {!check ? <p>Lau nha</p> : <del>Lau nha</del>}

          <Button
            variant="contained"
            startIcon={<EditIcon />}
            sx={{ height: "30px", m: 2 }}
          >
            EDIT{" "}
          </Button>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            sx={{ height: "30px", m: 2, bgcolor: "red" }}
          >
            DELL{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default List;
