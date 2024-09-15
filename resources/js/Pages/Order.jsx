import React from "react";
import Navbar from "../components/NavbarLogin";
import Footer from "../components/Footer";

const Transaction = () => {
    return (
        <div>
            <Navbar />
            <form className="container relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] rounded-2xl bg-purple-100">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-5xl font-semibold leading-7 text-gray-900 text-center">
                            Order Detail
                        </h2>
                        <br />
                        <p className="mt-1 text-2xl leading-6 text-gray-600 text-center">
                            Use a permanent address where you can receive mail.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="user_id"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    User Id
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="user_id"
                                        name="user_id"
                                        autoComplete="user_id"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="order_id"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Order Id
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="order_id"
                                        name="order_id"
                                        autoComplete="order_id"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="payment_type"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Payment Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="payment_type"
                                        name="payment_type"
                                        autoComplete="payment_type"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="amount"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Amount
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="amount"
                                        name="amount"
                                        autoComplete="amount"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Status
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="status"
                                        name="status"
                                        autoComplete="status"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <a href="/success">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Checkout
                        </button>
                    </a>
                </div>
            </form>
            <Footer />
        </div>
    );
};

export default Transaction;
