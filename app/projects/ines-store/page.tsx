"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Ines Kesselring T-Shirt",
    category: "APPAREL",
    price: 590,
    description:
      "Official-style merchandise concept designed for the Ines Kesselring channel.",
  },
  {
    id: 2,
    name: "Elizabeth Acrylic Stand",
    category: "COLLECTIBLE",
    price: 450,
    description:
      "Elizabeth Kesselring acrylic stand concept from Project EK.",
  },
  {
    id: 3,
    name: "ELIZABEAT Poster",
    category: "ART",
    price: 350,
    description:
      "Limited poster concept for the ELIZABEAT music segment.",
  },
  {
    id: 4,
    name: "Ines Kesselring Hoodie",
    category: "APPAREL",
    price: 1290,
    description:
      "Heavyweight hoodie merchandise concept for the channel.",
  },
];

export default function InesStorePage() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((count) => count + 1);
  }

  return (
    <main className="store-page">

      {/* Store Header */}

      <section className="store-header">

        <div>
          <p className="section-label">
            INES KESSELRING / STORE
          </p>

          <h1>
            Merchandise
            <br />
            &amp; Objects.
          </h1>

          <p className="store-intro">
            A fictional e-commerce experience built as a
            demonstration of modern web application development.
          </p>
        </div>

        <button className="store-cart">
          Cart
          <span>{cartCount}</span>
        </button>

      </section>


      {/* Products */}

      <section className="store-products">

        {products.map((product) => (

          <article
            className="store-product"
            key={product.id}
          >

            <div className="product-image">

              <div className="product-placeholder">
                <span>
                  INES
                </span>
              </div>

            </div>

            <div className="product-info">

              <p className="product-category">
                {product.category}
              </p>

              <h2>
                {product.name}
              </h2>

              <p className="product-description">
                {product.description}
              </p>

              <div className="product-footer">

                <span className="product-price">
                  ฿{product.price.toLocaleString()}
                </span>

                <button
                  className="product-add"
                  onClick={addToCart}
                >
                  Add to Cart →
                </button>

              </div>

            </div>

          </article>

        ))}

      </section>


      {/* Demo Notice */}

      <section className="store-demo-note">

        <p className="section-label">
          DEMONSTRATION
        </p>

        <h2>
          This is a fictional store.
        </h2>

        <p>
          No real products are sold and no real payments are
          processed. The store exists as an interactive
          demonstration of frontend development, application
          state, shopping cart logic, and checkout workflows.
        </p>

      </section>

    </main>
  );
}
