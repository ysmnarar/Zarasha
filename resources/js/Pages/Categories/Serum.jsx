import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../Breadcrumbs/BreadcrumbsSerum";

const Serum = ({ serum }) => {
    return (
        <section>
            <Navbar/>
            <Breadcrumb/>
            <div className="container pt-10 pb-10 mr-24 ml-20">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    {serum.map((product) => (
                        <div className="col-span-4 lg:col-span-3">
                            <div
                                key={product.id}
                                className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200"
                            >
                                <figure>
                                    <img
                                        src={`/storage/${product.img}`}
                                        alt={product.name}
                                        className="w-full h-72"
                                    />
                                </figure>

                                <div className="p-6">
                                    <header className="mb-4">
                                        <h3 className="text-xl font-medium text-slate-700">
                                            {product.name}
                                        </h3>
                                        <p className=" text-slate-400">
                                            {product.price}
                                        </p>
                                    </header>
                                    <p>{product.desc}</p>
                                </div>
                                {/*  <!-- Action base sized basic button --> */}
                                <div className="flex justify-end pt-0">
                                    <a
                                        href={`/detail/${product.id}`}
                                        className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide"
                                    >
                                        view detail
                                    </a>
                                </div>
                                <div className="flex justify-end p-6 pt-0">
                                    
                                    <a
                                        href="/formOrder"
                                        className="inline-flex mr-2 h-10 w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-400 focus:bg-purple-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                                    >
                                        <img src="/image/cart.svg" alt="" />
                                    </a>
                                    <a
                                        href="/wishlist"
                                        className="inline-flex h-10 w-1/2 items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-400 focus:bg-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                                    >
                                        <img src="/image/heart.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Serum;
