import React, { FC, useState } from "react";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import thumbnail1 from "../assets/thumbnail1.jpg";
import thumbnail2 from "../assets/thumbnail2.jpg";
import thumbnail3 from "../assets/thumbnail3.jpg";
import thumbnail4 from "../assets/thumbnail4.jpg";

const Main: FC = () => {
  const images: string[] = [product1, product2, product3, product4];
  const thumbnails: string[] = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
  const [productCount, setProductCount] = useState<number>(0);
  const [currentNum, setCurrentNum] = useState<number>(0);
  return (
    <div className="main">
      <div className="left">
        <div className="img-wrapper">
          <div
            style={{ transform: `translateX(${currentNum * -350}px)` }}
            className="inner-img-wrapper"
          >
            {images.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
        </div>
        <div className="thumbnails">
          {thumbnails.map((thumbnail, i) => (
            <div
              onClick={() => setCurrentNum(i)}
              key={i}
              className={`thumbnail ${currentNum === i && "active-thumbnail"}`}
            >
              <img src={thumbnail} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="des">
          This low-profile Sneakers are your perfect casual wearn companion.
          Featuring a durable rubber outer sole. They'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <h2>$125.00</h2>
          <span>50%</span>
        </div>
        <del>$250.00</del>
        <div className="footer-items">
          <div className="counter">
            <div
              onClick={() => {
                productCount > 0 &&
                  setProductCount((productCount) => productCount - 1);
              }}
              className="oper"
            >
              -
            </div>
            <div className="num">{productCount}</div>
            <div
              onClick={() =>
                setProductCount((productCount) => productCount + 1)
              }
              className="oper"
            >
              +
            </div>
          </div>
          <button>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white"
                fill-rule="nonzero"
              />
            </svg>
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
