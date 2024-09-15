import React, { useState } from "react";
import axios from "axios";

const Search = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const searchHandler = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        // Delay the search to avoid frequent requests while typing
        setTimeout(() => {
            setIsLoading(true);
            setProducts([]);

            // Make the search request
            axios
                .post(`/search`, {
                    q: term,
                })
                .then((response) => {
                    setIsLoading(false);
                    setProducts(response.data.products);
                })
                .catch((error) => {
                    console.error("Error fetching products:", error);
                    setIsLoading(false);
                });
        }, 500); // Adjust the delay as needed
    };

    return (
        <div className="justify-content-center">
            <div
                className="modal fade text-center pt-4"
                id="search"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => searchHandler(e)}
                                    placeholder="Search product here..."
                                />
                            </div>
                        </div>
                        <div
                            className="modal-body"
                            style={{ height: "10px", overflow: "auto" }}
                        >
                            {isLoading && (
                                <div className="justify-content-center mb-3 text-center">
                                    <div
                                        className="spinner-border text-success"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-10 pb-10 mr-24 ml-20">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    {products.map((products, index) => (
                        <div className="col-span-4 lg:col-span-3">
                            <div className="overflow-hidden rounded bg-white text-slate-500 
                            shadow-md shadow-slate-200">
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
                                        className="inline-flex h-10 w-full items-center justify-center 
                                        gap-2 whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide"
                                    >
                                        view detail
                                    </a>
                                </div>
                                <div className="flex justify-end p-6 pt-0">
                                    <a
                                        href="/cart"
                                        className="inline-flex mr-2 h-10 w-1/2 items-center justify-center 
                                        gap-2 whitespace-nowrap rounded bg-purple-400 px-5 text-sm font-medium 
                                        tracking-wide text-white transition duration-300 hover:bg-purple-400
                                      focus:bg-purple-400 focus-visible:outline-none disabled:cursor-not-allowed
                                       disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                                    >
                                        <img src="/image/cart.svg" alt="" />
                                    </a>
                                    <a
                                        href="/wishlist"
                                        className="inline-flex h-10 w-1/2 items-center justify-center 
                                        gap-2 whitespace-nowrap rounded bg-gray-400 px-5 text-sm font-medium 
                                        tracking-wide text-white transition duration-300 hover:bg-gray-400
                                         focus:bg-gray-400 focus-visible:outline-none disabled:cursor-not-allowed
                                          disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                                    >
                                        <img src="/image/heart.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className="text-center w-full">
                ————————————————————————————————————————————————————————————————————————————————</h1>
        </div>
    );
};

export default Search;
