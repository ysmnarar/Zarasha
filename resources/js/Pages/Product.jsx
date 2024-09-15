import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Product = ({ data }) => {
    const [showCartModal, setShowCartModal] = useState(false);
    const [showWishlistModal, setShowWishlistModal] = useState(false);

    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setShowWishlistModal(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    useEffect(() => {
        let html = document.querySelector("html");

        if (html) {
            if (showWishlistModal && html) {
                html.style.overflowY = "hidden";

                const focusableElements =
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

                const modal = document.querySelector("#modal"); // select the modal by it's id

                const firstFocusableElement =
                    modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

                const focusableContent =
                    modal.querySelectorAll(focusableElements);

                const lastFocusableElement =
                    focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

                document.addEventListener("keydown", function (e) {
                    if (e.keyCode === 27) {
                        setShowWishlistModal(false);
                    }

                    let isTabPressed = e.key === "Tab" || e.keyCode === 9;

                    if (!isTabPressed) {
                        return;
                    }

                    if (e.shiftKey) {
                        // if shift key pressed for shift + tab combination
                        if (document.activeElement === firstFocusableElement) {
                            lastFocusableElement.focus(); // add focus for the last focusable element
                            e.preventDefault();
                        }
                    } else {
                        // if tab key is pressed
                        if (document.activeElement === lastFocusableElement) {
                            // if focused has reached to last focusable element then focus first focusable element after pressing tab
                            firstFocusableElement.focus(); // add focus for the first focusable element
                            e.preventDefault();
                        }
                    }
                });

                firstFocusableElement.focus();
            } else {
                html.style.overflowY = "visible";
            }
        }
    }, [showWishlistModal]);

    return (
        <section>
            <div className="container p-10 mr-24 ml-20">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    {data.map((products) => (
                        <div className="col-span-4 lg:col-span-3">
                            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                                <figure>
                                    <img
                                        src={`/storage/${products.img}`}
                                        alt={products.name}
                                        className="w-full h-72"
                                    />
                                </figure>

                                <div className="p-6">
                                    <header className="mb-4">
                                        <h3 className="text-xl font-medium text-slate-700">
                                            {products.name}
                                        </h3>
                                        <p className=" text-slate-400">
                                            {products.price}
                                        </p>
                                    </header>
                                    <p>{products.desc}</p>
                                </div>
                                {/*  <!-- Action base sized basic button --> */}
                                <div className="flex justify-end pt-0">
                                    <a
                                        href={`/detail/${products.id}`}
                                        className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide"
                                    >
                                        view detail
                                    </a>
                                </div>
                                <div className="flex justify-end p-6 pt-0">
                                    <button
                                        onClick={() => setShowCartModal(true)}
                                        className="inline-flex h-10 mr-2 w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-500 focus:bg-gray-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-purple-300 disabled:shadow-none"
                                    >
                                        <img src="/image/cart.svg" alt="" />
                                    </button>
                                    <button
                                        onClick={() =>
                                            setShowWishlistModal(true)
                                        }
                                        className="inline-flex h-10 w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-500 focus:bg-purple-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none"
                                    >
                                        <img src="/image/heart.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            {showCartModal && typeof document !== "undefined"
                                ? ReactDOM.createPortal(
                                      <div
                                          className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
                                          aria-labelledby="header-4a content-4a"
                                          aria-modal="true"
                                          tabindex="-1"
                                          role="dialog"
                                      >
                                          {/*    <!-- Modal --> */}
                                          <div
                                              ref={wrapperRef}
                                              className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                                              id="modal"
                                              role="document"
                                          >
                                              {/*        <!-- Modal header --> */}
                                              <header
                                                  id="header-4a"
                                                  className="flex items-center"
                                              >
                                                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                                                      Want to Add this product
                                                      to your Cart?
                                                  </h3>
                                                  <button
                                                      onClick={() =>
                                                          setShowCartModal(
                                                              false
                                                          )
                                                      }
                                                      className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-purple-500 transition duration-300 hover:bg-purple-100 hover:text-purple-600 focus:bg-purple-200 focus:text-purple-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-purple-300 disabled:shadow-none disabled:hover:bg-transparent"
                                                      aria-label="close dialog"
                                                  >
                                                      <span className="relative only:-mx-5">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              className="h-5 w-5"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                              stroke="currentColor"
                                                              strokeWidth="1.5"
                                                              role="graphics-symbol"
                                                              aria-labelledby="title-79 desc-79"
                                                          >
                                                              <title id="title-79">
                                                                  Icon title
                                                              </title>
                                                              <desc id="desc-79">
                                                                  A more
                                                                  detailed
                                                                  description of
                                                                  the icon
                                                              </desc>
                                                              <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  d="M6 18L18 6M6 6l12 12"
                                                              />
                                                          </svg>
                                                      </span>
                                                  </button>
                                              </header>
                                              {/*        <!-- Modal body --> */}
                                              <div
                                                  id="content-4a"
                                                  className="flex-1"
                                              >
                                                  <div className="p-6">
                                                      <header className="mb-4">
                                                          <h3 className="text-xl font-medium text-slate-700">
                                                              {products.name}
                                                          </h3>
                                                          <p className=" text-slate-400">
                                                              {products.price}
                                                          </p>
                                                      </header>
                                                      <p>{products.desc}</p>
                                                  </div>
                                              </div>
                                              {/*        <!-- Modal actions --> */}
                                              <div className="flex justify-center gap-2">
                                                  <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-400 focus:bg-purple-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none">
                                                      <span>Add to Cart</span>
                                                  </button>
                                              </div>
                                          </div>
                                      </div>,
                                      document.body
                                  )
                                : null}
                            {showWishlistModal &&
                            typeof document !== "undefined"
                                ? ReactDOM.createPortal(
                                      <div
                                          className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
                                          aria-labelledby="header-4a content-4a"
                                          aria-modal="true"
                                          tabindex="-1"
                                          role="dialog"
                                      >
                                          {/*    <!-- Modal --> */}
                                          <div
                                              ref={wrapperRef}
                                              className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                                              id="modal"
                                              role="document"
                                          >
                                              {/*        <!-- Modal header --> */}
                                              <header
                                                  id="header-4a"
                                                  className="flex items-center"
                                              >
                                                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                                                      Want to Add this product
                                                      to your wishlist?
                                                  </h3>
                                                  <button
                                                      onClick={() =>
                                                          setShowWishlistModal(
                                                              false
                                                          )
                                                      }
                                                      className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-purple-500 transition duration-300 hover:bg-purple-100 hover:text-purple-600 focus:bg-purple-200 focus:text-purple-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-purple-300 disabled:shadow-none disabled:hover:bg-transparent"
                                                      aria-label="close dialog"
                                                  >
                                                      <span className="relative only:-mx-5">
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              className="h-5 w-5"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                              stroke="currentColor"
                                                              strokeWidth="1.5"
                                                              role="graphics-symbol"
                                                              aria-labelledby="title-79 desc-79"
                                                          >
                                                              <title id="title-79">
                                                                  Icon title
                                                              </title>
                                                              <desc id="desc-79">
                                                                  A more
                                                                  detailed
                                                                  description of
                                                                  the icon
                                                              </desc>
                                                              <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  d="M6 18L18 6M6 6l12 12"
                                                              />
                                                          </svg>
                                                      </span>
                                                  </button>
                                              </header>
                                              {/*        <!-- Modal body --> */}
                                              <div
                                                  id="content-4a"
                                                  className="flex-1"
                                              >
                                                  <div className="flex flex-col gap-6">
                                                      {/*                <!-- Input field --> */}
                                                      <div className="relative">
                                                          <input
                                                              id="id-b03"
                                                              type="email"
                                                              name="id-b03"
                                                              placeholder="your name"
                                                              className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                                          />
                                                          <label
                                                              htmlFor="id-b03"
                                                              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                                          >
                                                              Your email
                                                          </label>
                                                          <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                                                              <span>
                                                                  Type your
                                                                  email address
                                                              </span>
                                                          </small>
                                                      </div>
                                                      {/*                <!-- Input field --> */}
                                                      <div className="relative my-6">
                                                          <input
                                                              id="id-b13"
                                                              type="password"
                                                              name="id-b13"
                                                              placeholder="your password"
                                                              className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-purple-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                                          />
                                                          <label
                                                              htmlFor="id-b13"
                                                              className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                                          >
                                                              Your password
                                                          </label>
                                                          <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                                                              fill="none"
                                                              viewBox="0 0 24 24"
                                                              stroke="currentColor"
                                                              strokeWidth="1.5"
                                                          >
                                                              <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                                              />
                                                          </svg>
                                                          <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                                                              <span>
                                                                  Type your
                                                                  password
                                                              </span>
                                                          </small>
                                                      </div>
                                                  </div>
                                              </div>
                                              {/*        <!-- Modal actions --> */}
                                              <div className="flex justify-center gap-2">
                                                  <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-400 focus:bg-purple-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none">
                                                      <span>
                                                          Add to Wishlist
                                                      </span>
                                                  </button>
                                              </div>
                                          </div>
                                      </div>,
                                      document.body
                                  )
                                : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product;
