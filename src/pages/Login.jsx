import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const Login = () => {
  const [inputs,setInputs] =useState({
    username:"",
    password:"",

  });
  const navigate = useNavigate();

  const {login} = useContext(AuthContext);



  const [err,setError]=useState(null);

  const handleChange= (e) =>{
    setInputs((prev)({...prev, [e.target.name]: e.target.value}));

  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        await login(inputs);
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
        {err && <p>{err}</p>}
        <span> У вас ещё нет аккаунта? <Link to="/register">Зарегестрироваться</Link>

        </span>

      </form>
    </div>
  )
}
