"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import fon from "../../public/fon.png";
import versace from "../../public/versace.svg";
import zara from "../../public/zara.svg";
import gucci from "../../public/gucci.svg";
import prada from "../../public/prada.svg";
import calvinKlein from "../../public/calvin_klein.svg";
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
        setLoading(false); // Ma'lumotlar olinganidan so'ng loading holatini o'zgartirish
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false); // Xato yuz berganda ham loading holatini o'zgartirish
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="relative bg-black">
        <Image
          src={fon}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />

        <div className=" inset-0 flex flex-col items-center justify-center text-center text-white p-8 bg-black bg-opacity-50 rounded-lg z-10">
          <h1 className="font-integral text-4xl font-bold leading-tight mb-4">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi text-base font-normal mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="btn btn-primary">Shop Now</button>
          <div className="flex justify-around w-full mt-8">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">200+</div>
              <div>Items</div>
            </div>
            <div className="text-white text-center">
              <div className="text-2xl font-bold">200+</div>
              <div>Designs</div>
            </div>
            <div className="text-white text-center">
              <div className="text-2xl font-bold">200+</div>
              <div>Brands</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-4 flex justify-around mb-[72px]">
        <Image
          src={versace}
          alt="Versace"
          className="h-12"
          width={80}
          height={48}
        />
        <Image src={zara} alt="Zara" className="h-12" width={80} height={48} />
        <Image
          src={gucci}
          alt="Gucci"
          className="h-12"
          width={80}
          height={48}
        />
        <Image
          src={prada}
          alt="Prada"
          className="h-12"
          width={80}
          height={48}
        />
        <Image
          src={calvinKlein}
          alt="Calvin Klein"
          className="h-12"
          width={80}
          height={48}
        />
      </div>

      <div className="flex flex-col">
        <h2 className="font-integral text-4xl font-bold leading-[57.6px] text-center mb-4">
          NEW ARRIVALS
        </h2>
        <div className="py-8 px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Discover the latest trends and styles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading
              ? Array(8)
                  .fill(0)
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                    >
                      <div className="animate-pulse flex flex-col items-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4" />
                        <div className="w-24 h-6 bg-gray-200 rounded mb-2" />
                        <div className="w-32 h-4 bg-gray-200 rounded mb-2" />
                        <div className="w-16 h-4 bg-gray-200 rounded" />
                      </div>
                    </div>
                  ))
              : products.map(
                  ({
                    id,
                    description,
                    price,
                    gender,
                    image,
                    sizes,
                    color,
                    rating,
                  }) => (
                    <div
                      key={id}
                      className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
                    >
                      <img
                        src={image}
                        alt={description}
                        className="w-full h-32 object-cover rounded-md mb-4"
                      />
                      <div className="text-lg font-semibold mb-2">
                        {description}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Price: ${price}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Gender: {gender}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Sizes: {sizes.join(", ")}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Color: {color}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Rating: {rating}
                      </div>
                    </div>
                  )
                )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
