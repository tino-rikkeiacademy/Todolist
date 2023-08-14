// import React from 'react'

import {  useEffect, useState } from "react";
import Header from "./components/header"
import List from "./components/list"

function MiniProject() {
  const [state, setState] = useState('');
  const [selectedData, setSelectedData] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const listData = JSON.parse(localStorage.getItem('todoList')) || [];

  const handleChange = (e) => {
    setState(e.target.value);
  } 

  const handleAdd = (item) => {
    let newData = [...listData, {job : item ,check : false}]
    localStorage.setItem('todoList', JSON.stringify(newData) );
    location.reload();
  }

  const handleEdit = (item) => {
    setSelectedData(item.job);
    setIsEdit(true);
  }

  const handleDelete = (index) => {
    listData.splice(index,1);
    let newData = listData
    localStorage.setItem('todoList', JSON.stringify(newData) );
    location.reload();
  }

  const handleCheck = (index,item) => {
    listData.splice(index,1, {job : item.job, check : !item.check});
    let newData = listData
    localStorage.setItem('todoList', JSON.stringify(newData) );
    location.reload();
  }

  useEffect(() =>{
    setState(selectedData)
  },[selectedData])


  return (
    <div>
        <Header state={state} listData={listData}  handleChange={handleChange} handleEdit={handleEdit}  handleAdd={handleAdd} isEdit={isEdit} />
        <List listData={listData} handleEdit={handleEdit} handleDelete={handleDelete} handleCheck={handleCheck}/>
    </div>
  )
}

export default MiniProject