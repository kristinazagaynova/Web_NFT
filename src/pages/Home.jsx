import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
const posts = [
     {
       id: 1,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://oracle-patches.com/images/2022/02/10/NFT-Non-Fungible_large.jpg",
     },
     {
       id: 2,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://fun-cats.ru/wp-content/uploads/c/b/b/cbbc29fc9150f48aa76477a6aa358bfb.jpeg",
     },
     {
       id: 3,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://proprikol.ru/wp-content/uploads/2019/10/krasivye-kartinki-pandy-na-rabochij-stol-26.jpg",
     },
     {
       id: 4,
       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
       img: "https://oracle-patches.com/images/2022/02/10/NFT-Non-Fungible_large.jpg",
     },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Далее</button>
            </div>
          </div>
         ))}
      </div>
    </div>
  );
};
