import React from "react";
import style from "./style.module.css";

export default function Header() {
  return (
    <div className="container">
      <section className={style.wrapper}>
        <div className={style.logoDiv}>
<<<<<<< HEAD
          <h1 className={style.logoText}>SHOP.CO</h1>
=======
          <h1 className={style.logoText}>Sofuna</h1>
>>>>>>> b6c16ff3d39fcdad6c52886439ac932cece6bb73
        </div>
        <nav className={style.nav}>
          <ul className={style.list}>
            <select className={style.navselect}>Shop</select>
            <li className={style.navList}>On Sale</li>
            <li className={style.navList}>New Arrivals</li>
            <li className={style.navList}>Brands</li>
          </ul>
        </nav>
        <div className={style.searchDiv}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            className="icon icon-search"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
<<<<<<< HEAD
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
=======
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
>>>>>>> b6c16ff3d39fcdad6c52886439ac932cece6bb73
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" name="" id="" className={style.input} />
        </div>
        <div className={style.lastDiv}>
          <svg
            width="23"
            height="22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.375 19.25a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm7.875-1.875a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75Zm4.825-11.294-2.558 8.316a2.614 2.614 0 0 1-2.51 1.853H7.775a2.637 2.637 0 0 1-2.525-1.904L2.045 3.125h-.92a1.125 1.125 0 0 1 0-2.25h1.202a1.882 1.882 0 0 1 1.803 1.36l.683 2.39H21a1.125 1.125 0 0 1 1.075 1.456Zm-2.598.794H5.455l1.959 6.853a.375.375 0 0 0 .36.272h9.233a.375.375 0 0 0 .36-.264l2.11-6.861Z"
              fill="#000"
            />
          </svg>
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875ZM7.46 18.428a5.625 5.625 0 0 1 9.08 0 7.848 7.848 0 0 1-9.08 0Zm1.915-7.178a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Zm8.813 5.62a7.827 7.827 0 0 0-2.72-2.196 4.875 4.875 0 1 0-6.937 0 7.827 7.827 0 0 0-2.719 2.195 7.875 7.875 0 1 1 12.366 0h.01Z"
              fill="#000"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
