"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import fon from "../../public/fon.png";
import zara from "../../public/zara.svg";
import gucci from "../../public/gucci.svg";
import prada from "../../public/prada.svg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { Product } from "@/types";

function Item() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData as Product[]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="relative">
            <div className="flex">
              <div>
                <div className="absolute">
                  <div className="pl-[50px] mt-20">
                    <h1 className="text-6xl text-black w-full max-w-xl font-extrabold">
                      FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <p className="py-8 w-full max-w-xl">
                      Browse through our diverse range of meticulously crafted
                      garments, designed to bring out your individuality and
                      cater to your sense of style.
                    </p>
                    <button className="btn rounded-3xl py-4 px-16 text-white bg-black hover:bg-white hover:text-black mb-12">
                      Shop Now
                    </button>
                    <div className="flex items-start justify-start gap-16">
                      <div className="item1">
                        <h2 className="text-4xl text-black font-bold">200+</h2>
                        <p>International Brands</p>
                      </div>
                      <div className="item2">
                        <h2 className="text-4xl text-black font-bold">
                          2,000+
                        </h2>
                        <p>High-Quality Products</p>
                      </div>
                      <div className="item3">
                        <h2 className="text-4xl text-black font-bold">
                          30,000+
                        </h2>
                        <p>Happy Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full color-[#bc3c3c]">
                <img src={fon.src} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-8 flex justify-center gap-[106px] mb-[72px]">
          <Image
            src={zara}
            alt="Zara"
            className="h-12"
            width={91}
            height={38}
          />
          <Image
            src={gucci}
            alt="Gucci"
            className="h-12"
            width={156}
            height={36}
          />
          <Image
            src={prada}
            alt="Prada"
            className="h-12"
            width={192}
            height={32}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="font-integral text-4xl font-bold leading-[57.6px] text-center mb-4">
            NEW ARRIVALS
          </h2>
          <div className="py-8 px-4">
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loading
                ? Array(8)
                    .fill(0)
                    .map((_, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                      >
                        <div className="animate-pulse w-[295px] h-[298px] bg-gray-200 rounded-lg mb-4" />
                        <div className="animate-pulse w-24 h-6 bg-gray-200 rounded mb-2" />
                        <div className="animate-pulse w-16 h-4 bg-gray-200 rounded mb-2" />
                        <div className="animate-pulse w-12 h-4 bg-gray-200 rounded" />
                      </div>
                    ))
                : products.map(({ id, name, price, image, rating }) => (
                    <div
                      key={id}
                      className="flex flex-col items-start mb-[250px] cursor-pointer  transform transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={image}
                        className="w-[295px] h-[298px] object-cover rounded-[20px] mb-4"
                        alt={name}
                      />
                      <div className="font-medium mb-2">{name}</div>
                      <div className="text-yellow-500 mb-2">
                        <div className="flex justify-start">
                          {[...Array(5)].map((_, index) => (
                            <svg
                              key={index}
                              className={`w-4 h-4 fill-current ${
                                index < Math.floor(rating)
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 15l-5.878 3.09 1.122-6.545L0 7.545l6.561-.954L10 1l2.439 5.591L19 7.545l-5.244 4.999 1.122 6.545z" />
                            </svg>
                          ))}
                          <span className="text-sm text-gray-500 ml-2">
                            {rating.toFixed(1)}/5
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-2 ">
                        ${price}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
