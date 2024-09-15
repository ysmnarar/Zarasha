import React from "react";
import Navbar from "../components/NavbarLogin";
import Footer from "../components/Footer";

const SuccessCO = () => {
    return (
        <div>
            <Navbar />
            <section className="bg-purple-200 pt-10">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <span className="pt-16 pl-64 text-6xl">
                        Successfully Add to Cart.
                    </span>
                    <h2 className="pl-64 text-2xl">
                        See the detail in your dashboard, & don't forget to
                        checkout !
                    </h2>
                    <div className="space-y-12">
                        <div className="border-gray-300 pb-10">
                            <img
                                src="/image/shopping-cart.jpg"
                                alt="Success"
                                className="w-full pt-7"
                            ></img>
                            <div className="pl-80 pt-8">
                                <a href="/customer/home">
                                    <button className="m-1 inline-block h-10 w-48 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-500 focus:bg-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none">
                                        Cart
                                    </button>
                                </a>
                                <a href="/customer/home">
                                    <button className="m-1 inline-block h-10 w-48 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-400 focus:bg-purple-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none">
                                        My Dashboard
                                    </button>
                                </a>
                                <a href="/customer/landing">
                                    <button className="m-1 inline-block h-10 w-40 items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-300 focus:bg-purple-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none">
                                        Back
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SuccessCO;
