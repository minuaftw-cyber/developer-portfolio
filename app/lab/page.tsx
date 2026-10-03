"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  symbol: string;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "INES T-Shirt",
    category: "APPAREL",
    price: 590,
    description:
      "Minimal black creator shirt designed for the Ines Kesselring identity.",
    symbol: "I",
  },
  {
    id: 2,
    name: "Creator Mug",
    category: "LIFESTYLE",
    price: 320,
    description:
      "A simple creator-themed mug designed as part of the fictional store.",
    symbol: "M",
  },
  {
    id: 3,
    name: "ELIZABEAT Poster",
    category: "PRINT",
    price: 450,
    description:
      "A fictional music poster inspired by the ELIZABEAT project identity.",
    symbol: "E",
  },
  {
    id: 4,
    name: "Sticker Pack",
    category: "ACCESSORIES",
    price: 180,
    description:
      "A fictional sticker collection featuring the channel's visual identity.",
    symbol: "S",
  },
  {
    id: 5,
    name: "Digital Wallpaper",
    category: "DIGITAL",
    price: 120,
    description:
      "A fictional high-resolution digital wallpaper for desktop and mobile.",
    symbol: "W",
  },
  {
    id: 6,
    name: "Creator Archive",
    category: "DIGITAL",
    price: 690,
    description:
      "A fictional digital archive containing creator-themed content and assets.",
    symbol: "A",
  },
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("th-TH").format(price);

export default function LabPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    [cart]
  );

  function addToCart(product: Product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
  }

  function changeQuantity(id: number, amount: number) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(id: number) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function openCheckout() {
    setCartOpen(false);
    setCheckoutOpen(true);
  }

  function completeOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!customerName || !customerEmail || !cardNumber || !expiry || !cvv) {
      return;
    }

    setCheckoutOpen(false);
    setOrderComplete(true);
  }

  function resetStore() {
    setCart([]);
    setOrderComplete(false);
    setCustomerName("");
    setCustomerEmail("");
    setCardNumber("");
    setExpiry("");
    setCvv("");
  }

  return (
    <main className="lab-page">
      {/* Hero */}
      <section className="lab-hero">
        <div className="lab-label">TECHNICAL LAB</div>

        <h1>
          Interactive
          <br />
          Experiments.
        </h1>

        <p>
          Small applications and interactive systems built to
          demonstrate practical development skills.
        </p>
      </section>

      {/* Demo Notice */}
      <section className="lab-notice">
        <div>
          <span className="lab-notice-label">DEMO PROJECT</span>
          <p>
            This store is a fictional technical demonstration.
            No real products are sold and no real payment is processed.
          </p>
        </div>

        <div className="lab-notice-status">
          <span className="lab-status-dot" />
          Interactive
        </div>
      </section>

      {/* Store Header */}
      <section className="store-section">
        <div className="store-header">
          <div>
            <div className="section-label">LAB / 001</div>
            <h2>Ines Store</h2>
            <p>
              A fictional e-commerce interface built to
              demonstrate frontend application architecture.
            </p>
          </div>

          <button
            className="store-cart-button"
            onClick={() => setCartOpen(true)}
          >
            Cart ({cartCount})
          </button>
        </div>

        {/* Products */}
        <div className="store-grid">
          {products.map((product) => (
            <article className="store-product" key={product.id}>
              <div className="product-visual">
                <span>{product.symbol}</span>
              </div>

              <div className="product-category">
                {product.category}
              </div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <div className="product-bottom">
                <strong>฿{formatPrice(product.price)}</strong>

                <button
                  className="product-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="lab-skills">
        <div className="section-label">WHAT THIS DEMONSTRATES</div>

        <h2>More than a visual mockup.</h2>

        <div className="lab-skills-grid">
          <div>
            <span>01</span>
            <h3>State Management</h3>
            <p>
              Cart state, quantities, item removal and calculated
              totals are handled interactively.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Application Flow</h3>
            <p>
              Users can move from product selection to cart,
              checkout and order confirmation.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Form Handling</h3>
            <p>
              Checkout fields and client-side form submission
              are implemented as part of the demonstration.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Responsive UI</h3>
            <p>
              The interface is designed to adapt across desktop
              and mobile layouts.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div
          className="store-overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-header">
              <div>
                <span>CART</span>
                <h2>Your Items</h2>
              </div>

              <button
                className="drawer-close"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty.</p>
                <button
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-symbol">
                        {item.symbol}
                      </div>

                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <span>
                          ฿{formatPrice(item.price)}
                        </span>

                        <div className="quantity-control">
                          <button
                            onClick={() =>
                              changeQuantity(item.id, -1)
                            }
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              changeQuantity(item.id, 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        className="remove-item"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary">
                  <div>
                    <span>Subtotal</span>
                    <strong>฿{formatPrice(subtotal)}</strong>
                  </div>

                  <button
                    className="checkout-button"
                    onClick={openCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}

      {/* Checkout */}
      {checkoutOpen && (
        <div className="store-overlay">
          <section className="checkout-modal">
            <div className="drawer-header">
              <div>
                <span>CHECKOUT</span>
                <h2>Complete Order</h2>
              </div>

              <button
                className="drawer-close"
                onClick={() => setCheckoutOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="fake-payment-warning">
              DEMO PAYMENT — NO REAL TRANSACTION
            </div>

            <form onSubmit={completeOrder}>
              <label>
                Name
                <input
                  value={customerName}
                  onChange={(event) =>
                    setCustomerName(event.target.value)
                  }
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(event) =>
                    setCustomerEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Card Number
                <input
                  value={cardNumber}
                  onChange={(event) =>
                    setCardNumber(event.target.value)
                  }
                  placeholder="0000 0000 0000 0000"
                  required
                />
              </label>

              <div className="checkout-row">
                <label>
                  Expiry
                  <input
                    value={expiry}
                    onChange={(event) =>
                      setExpiry(event.target.value)
                    }
                    placeholder="MM/YY"
                    required
                  />
                </label>

                <label>
                  CVV
                  <input
                    value={cvv}
                    onChange={(event) =>
                      setCvv(event.target.value)
                    }
                    placeholder="000"
                    required
                  />
                </label>
              </div>

              <div className="checkout-total">
                <span>Total</span>
                <strong>฿{formatPrice(subtotal)}</strong>
              </div>

              <button className="checkout-button" type="submit">
                Pay ฿{formatPrice(subtotal)}
              </button>
            </form>
          </section>
        </div>
      )}

      {/* Order Complete */}
      {orderComplete && (
        <div className="store-overlay">
          <section className="order-success">
            <div className="success-mark">✓</div>

            <span>ORDER CONFIRMED</span>

            <h2>Thank you.</h2>

            <p>
              Your fictional order has been processed successfully.
            </p>

            <div className="order-number">
              ORDER #INES-{new Date().getFullYear()}-001
            </div>

            <small>
              This is a technical demonstration.
              No real payment was processed.
            </small>

            <button
              className="checkout-button"
              onClick={resetStore}
            >
              Back to Store
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
