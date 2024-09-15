import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div>
            <Navbar />
            <>
                <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                    {/*  <!-- Image --> */}
                    <figure className="flex-1">
                        <img
                            src="https://i.pinimg.com/564x/86/d5/ba/86d5bac9c72ff8b0329d7f6a888ccb7d.jpg"
                            alt="card image"
                            className="object-cover w-auto aspect-auto"
                        />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                                <div className="sm:max-w-lg">
                                    <h6 className="text-sm text-purple-400 sm:text-xl pl-2 font-medium">
                                        ABOUT ZARASHA
                                    </h6>
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        We’re your commerce partner for life
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-500">
                                        This month, our new skincare collection
                                        will shelter you from the harsh elements
                                        of a world that doesn't care if you live
                                        or die.
                                    </p>
                                    <br />
                                    <div className="flex justify-center p-6 pt-0">
                                        <a
                                            href="/categories"
                                            className="inline-flex mt-5 h-10 w-96 items-center justify-center gap-2 whitespace-nowrap rounded bg-purple-400 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-purple-400 focus:bg-purple-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-purple-400 disabled:bg-purple-400 disabled:shadow-none"
                                        >
                                            Shop Now !
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                    {/*  <!-- Body--> */}
                    <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                                <div className="pl-16 sm:max-w-lg">
                                    <h6 className="text-sm text-blue-400 sm:text-xl pl-2 font-medium">
                                        FLEXIBLE PRETTY COMMERCE
                                    </h6>
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        We’re the tech company so you don’t have
                                        to be
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-500">
                                        You don’t look, sound, or work like
                                        anyone else, because you aren’t like
                                        anyone else. You don’t fear change—you
                                        drive it. And you’re a lot like us.
                                        Bold. Innovative. Nimble. <br />
                                        <br /> We simplify the complex with
                                        technology that’s both powerful and easy
                                        to use. We make the tools you need to
                                        evolve, scale, and thrive. We give you
                                        the freedom to experiment and expand
                                        your brand in game-changing ways. <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  <!-- Image --> */}
                    <figure className="flex-1">
                        <img
                            src="https://i.pinimg.com/564x/da/df/da/dadfda2a9c2ca019095a26aef2320935.jpg"
                            alt="card image"
                            className="object-cover pt-28 aspect-auto"
                        />
                    </figure>
                </div>
                <section className="bg-purple-100 p-10">
                    <div className="container px-56 m-14">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div className="col-span-4">
                                <img
                                    className="pl-6"
                                    src="https://preview.colorlib.com/theme/pillowmart/img/icon/feature_icon_2.svg"
                                    alt="#"
                                ></img>
                                <h2>Online Order</h2>
                            </div>
                            <div className="col-span-4">
                                <img
                                    className="pl-4"
                                    src="https://preview.colorlib.com/theme/pillowmart/img/icon/feature_icon_3.svg"
                                    alt="#"
                                ></img>
                                <h2>Free Delivery</h2>
                            </div>
                            <div className="col-span-4">
                                <img
                                    className="pl-8"
                                    src="https://preview.colorlib.com/theme/pillowmart/img/icon/feature_icon_4.svg"
                                    alt="#"
                                ></img>
                                <h2>Product with Gift</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </div>
    );
}
