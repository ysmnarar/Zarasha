import { Link } from "@inertiajs/react";
import React from "react";

export default function Footer() {
    return (
        <>
            {/*<!-- Component: Primary Light Theme Footer --> */}
            <footer className="w-full text-gray-400">
                {/*  <!-- Sub Footer --> */}
                <div className="py-4 text-base border-t border-gray-200/90 bg-gray-100/80">
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div className="col-span-2 md:col-span-4 lg:col-span-6">
                                © 2023{" "}
                                <a
                                    href="https://www.instagram.com/ysmnairr/"
                                    target="_blank"
                                    className="text-purple-400 bold hover:text-purple-900"
                                >
                                    Zarasha's.
                                </a>
                            </div>
                            <div>
                                <Link href="/about">About</Link>
                            </div>
                            <div>
                                <Link href="https://wa.me/6281218813483">
                                    Contact
                                </Link>
                            </div>
                            <div>
                                <Link href="/" className="text-purple-400">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*<!-- End Primary Light Theme Footer --> */}
        </>
    );
}
