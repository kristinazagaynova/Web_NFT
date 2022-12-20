import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [inputs,setInputs] =useState({
    username:"",
    password:"",

  });
  const navigate = useNavigate();

  const [err,setError]=useState(null);

  const handleChange= (e) =>{
    setInputs((prev)({...prev, [e.target.name]: e.target.value}));

  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        await axios.post("/auth/login",inputs);
        navigate("/");

    }
    catch(err){
      setError(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1> Вход </h1>
      <form>
        <input required type="text" placeholder='Логин' name="Имя пользователя" onChange={handleChange}/>
        <input required type="password" placeholder='Пароль' name="Пароль" onChange={handleChange}/>
        <button onClick={handleSubmit}>Вход</button>
        {err && <p>{This is an error!}</p>}
        <span> У вас ещё нет аккаунта? <Link to="/register">Зарегестрироваться</Link>

        </span>

      </form>
    </div>
  )
}
