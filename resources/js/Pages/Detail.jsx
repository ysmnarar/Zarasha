import React from "react";
import Navbar from "../components/NavbarLogin";
import Footer from "../components/Footer";
import { usePage } from "@inertiajs/react";

const Detail = ({ data }) => {
    // id
    const { products } = usePage().props;

    // bersihkan tag html
    const cleanHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };
    const cleanedContent = cleanHtml(products.desc);

    return (
        <div>
            <Navbar />
            {products && (
                <div class="flex flex-col overflow-hidden bg-white rounded shadow-md sm:flex-row text-slate-500 shadow-slate-200">
                    <figure class="flex-1">
                        <img
                            src={`/storage/${products.img}`}
                            alt="card image"
                            class="object-cover min-h-full aspect-auto"
                        />
                    </figure>

                    <div class="flex-1 pt-20 p-6 sm:mx-6 sm:px-0">
                        <div className="p-6">
                            <header className="mb-4">
                                <h3 className="text-6xl font-medium text-slate-700">
                                    {products.name}
                                </h3>
                                <p className="pl-4 pt-4 text-2xl text-slate-400">
                                   Rp. {products.price}
                                </p>
                            </header>
                            <p className="text-xl">{products.desc}</p>
                        </div>
                        <div className="flex justify-center p-6 pt-0">
                            <a
                                href="/formOrder"
                                className="inline-flex mr-2 h-10 w-48 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-400 focus:bg-purple-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                            > Add to Cart
                            </a>
                            <a
                                href="/wishlist"
                                className="inline-flex mr-2 h-10 w-48 items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-400 focus:bg-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                            >
                                Add to Wishlist
                            </a>
                        </div>
                        <div className="flex justify-center p-6 pt-0">
                            <a
                                href="/categories"
                                className="inline-flex h-10 w-20 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-400 focus:bg-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                            >
                                Back
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Detail;
