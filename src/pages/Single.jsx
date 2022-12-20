import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import {Link} from "react-router-dom";
import {Menu} from "../components/Menu";

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://mobimg.b-cdn.net/v3/fetch/89/89b1452e43e738be92c573fdebfb1d22.jpeg" alt="" />
      <div className="user">
        <img src="https://www.thesun.co.uk/wp-content/uploads/2017/10/nintchdbpict000359242682.jpg" alt="" />
      <div className="info">
        <span>Сергей</span>
        <p>Опубликовано 2 дня назад</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
        </Link>
        <img src={Delete} alt="" />
      </div>
    </div>
    <h1>Какой-то супер длинный тайтл здесь будет</h1>
  <p>Supply chain management (SCM) is a complex sequence of activities that involves getting a raw product to the end consumer in its finished state. In any industry, optimizing systems and processes is no easy task– from material handling and distribution to information management. NFTs can potentially reduce the pain points in the complex supply chain sector. But first, what are the current challenges? 1. Product Information
In our increasingly globalized and interconnected world, the origin of the products we purchase can be hard to trace. The supply chain in any industry is complex and spans multiple countries, making the authentication process even more demanding. Existing solutions like QR codes that have helped reduce counterfeit products are still subject to manipulation. Unsuspecting buyers can divulge valuable information via QR codes and possibly suffer incalculable losses.2. Bottlenecks
As any business owner knows, supply chain management is essential for keeping costs down and ensuring that products are delivered on time. However, achieving efficiency in the supply chain is often easier said than done. Several factors impact efficiency, including the number of suppliers, the location of suppliers, and the type of products being transported. In addition, disruptions in the supply chain can often lead to significant delays and cost increases. </p>
    </div>
    <Menu />
      


    </div>
  )
}

