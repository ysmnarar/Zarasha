import React, { useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
import Product from "../Product";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Search from "../Search";

const Categories = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterProductsByCategory = (category) => {
        const updatedItems = products.category_id(
            (product) =>
                product.category_id.toLowerCase() === category.toLowerCase()
        );
        console.log("Filtered Products:", updatedItems); // Tambahkan ini untuk melihat hasil filter di konsol
        setFilteredProducts(updatedItems);
    };
    return (
        <div>
            <Navbar />
            <Breadcrumb />
            <div className="flex p-6 pt-1 mt-10">
                <a href="/categories/toner">
                    <button
                        onClick={() => filterProductsByCategory("Toner")}
                        className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-14 mr-10 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-300 focus:bg-purple-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none"
                    >
                        Toner
                    </button>
                </a>
                <a href="/categories/facial-wash">
                    <button
                        onClick={() => filterProductsByCategory("Facial Wash")}
                        className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-14 mr-10 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-300 focus:bg-purple-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none"
                    >
                        Facial Wash
                    </button>
                </a>
                <a href="/categories/serum">
                    <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-14 mr-10 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-300 focus:bg-purple-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none">
                        Serum
                    </button>
                </a>
                <a href="/categories/moisturizer">
                    <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-14 mr-10 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-300 focus:bg-purple-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none">
                        Moisturizer
                    </button>
                </a>
                <a href="/categories/sunscreen">
                    <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-14 mr-10 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-300 focus:bg-purple-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none">
                        Sunscreen
                    </button>
                </a>
                <a href="/categories/lipbalm">
                    <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-300 px-14 mr-10 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-300 focus:bg-purple-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none">
                        Lipbalm
                    </button>
                </a>
            </div>
            <Search/>
            <Product data={filteredProducts} />
            <Footer />
        </div>
    );
};

export default Categories;
