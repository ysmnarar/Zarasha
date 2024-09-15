import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/NavbarLogin";

export default function Home() {
    return (
        <div>
            <Navbar/>

            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Beauty skincare are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                This month, our new skincare collection will
                                shelter you from the harsh elements of a world
                                that doesn't care if you live or die.
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://i.pinimg.com/564x/9c/0d/d9/9c0dd9132bb7fd96dae4db1ed01abe7b.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://product-images-cdn.liketoknow.it/nlbakV1xNx2BF.KBQB1LkKBEdqcsSDZ3euGmFwBhvWTYlwcL5_CHcFJz0d3Ngq9jp6FAzCjNe.raF2M1sjWvpYsdRcLgbVAIu_WLFJ4XirT7vDOlKJih23yNqOTAnZ3Agho8UiP4Um.rwH14Fzf9VpHPa0_YOjtSkOj_C9ARx2_1Sireiuaftx34Gmw-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2.625"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://i.pinimg.com/564x/d4/f5/a0/d4f5a0cfd62d5922aacd8bb19fd7c73b.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://i.pinimg.com/564x/c9/37/70/c9377090650f2145402d466772020f24.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://i.pinimg.com/564x/8e/dd/71/8edd71851df56cfb81165bb1ef9d35ca.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://i.pinimg.com/564x/fc/0d/ba/fc0dba9f28189e6134382b0f8208d3d4.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://i.pinimg.com/564x/06/86/cf/0686cf30c3e86e6d57d2fd6eb24106db.jpg"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href="/categories/product"
                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >
                                    Shop Now !
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
