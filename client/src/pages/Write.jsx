import React,{ useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Заголовок' />
        <div className="editorContainer">
        <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Опубликовать</h1>
          <span>
            <b>Статус: </b> Черновик
          </span>
          <span>
            <b>Видимость: </b> Для всех
          </span>
          <input style={{display:"none"}} type="file" id='file' name=""  />
          <label className="file" htmlFor="file">Загрузить изображение</label>
          <div className="buttons">
            <button>Сохранить черновик</button>
            <button>Сохранить</button>
          </div>
        </div>
        <div className="item">
          <h1>Категория</h1>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="art"/>
          <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="design" id="art"/>
          <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="food" id="art"/>
          <label htmlFor="food">Food</label>
          </div>
        </div>
        </div>
    </div>
  )
}

