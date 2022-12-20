import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [inputs,setInputs] =useState({
    username:"",
    email:"",
    password:"",

  });
  const navigate = useNavigate();

  const [err,setError]=useState(null);

  const handleChange= (e) =>{
    setInputs(prev({...prev, [e.target.name]: e.target.value}));

  }

  const handleSubmit = async e=>{
    e.preventDefault();
    try{
        await axios.post("/auth/register",inputs);
        navigate("/login");

    }
    catch(err){
      setError(err.response.data);
    }
  }

  return (
    <div className='auth'>
      <h1> Регистрация </h1>
      <form>
        <input required type="text" placeholder='Имя пользователя' name='Имя пользователя' onChange={handleChange}/>
        <input required type="email" placeholder='Электронная почта' name='Электронная почта' onChange={handleChange}/>
        <input required type="password" placeholder='Пароль' email='Пароль' onChange={handleChange}/>
        <button onClick={handleSubmit}> Регистрация </button>
        {err && <p>Пользователь уже существует</p>}
        <span> Уже есть аккаунт? <Link to="/login"> Вход </Link>

        </span>

      </form>
    </div>
  )
}
