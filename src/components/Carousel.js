import React, { useState } from 'react';
import data from '../data/CarouselData'


function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);

  const prev = () => {
    setCurrentItem((prevItem) => (prevItem === 0 ? data.length - 1 : prevItem - 1))
  }

  const next = () => {
    setCurrentItem((prevItem) => (prevItem === data.length - 1 ? 0 : prevItem + 1));
  }


  return(
    <section ariaLable="Newest Photos">
      <h2 className="carousel-title">My projects</h2>
      <div className="carousel">
        <button onClick={prev} className="carousel-button prev" data-carousel-button="prev">&#8249;</button>
        <button onClick={next} className="carousel-button next" data-carousel-button="next">&#8250;</button>
        <ul>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              title={item.title}
              text={item.description}
              image={item.img}
              link={item.link}
              isActive={index === currentItem}
            />
          ))}
        </ul>
      </div> 
    </section> 
  )
}

function CarouselItem({ title, text, image, link, isActive }) {
  return (
    <li className={`slide ${isActive ? 'active' : ''}`}>
      <span className="slide-about">
        <h2 className="slide-title"><a href={link}>{title}</a></h2>
        <p className="slide-text">{text}</p>
      </span>
      <img className="slide-image" src={image} alt={title} />
    </li>
  );
}

export default Carousel