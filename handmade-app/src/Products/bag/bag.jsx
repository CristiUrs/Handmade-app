import { useContext, useEffect, useState } from "react";

import { Item } from "../../HandMade/Item";

import { ItemsContext } from "../../ItemContext";

import "./bag.css";

import img from "../../Image/alvaro-serrano-pFLNV4gkXsc-unsplash.jpg";

export default function Bag() {
    const { wallets, setWallets } = useContext(ItemsContext);

    function bookmark(product, wishlist) {
        console.log(product);
        product.wishlist = !wishlist;
        const productId = product.id;

        fetch(`http://localhost:3004/products/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        setWallets(structuredClone(wallets));
    }

    return (
        <main className="bag">
            <div className="container">
                <img src={img} alt="" className="imgTitle" />
                <h1 className="titleCard">Bags</h1>
            </div>

            <section className="wallet-container">
                {wallets
                    .filter((product) =>
                        product.name.toLowerCase().includes("bag")
                    )
                    .map((product) => (
                        <Item
                            key={product.id}
                            product={product}
                            bookmark={bookmark}
                        ></Item>
                    ))}
            </section>
        </main>
    );
}
