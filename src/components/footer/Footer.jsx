// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/myContext";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import { Icons } from "react-toastify";


export default function Footer() {
    const context = useContext(myContext);
    const { mode } = context;

    const iconStyle = { fontSize: "1.5rem" };

    return (
        <footer
            className="text-gray-600 body-font bg-gray-300"
            style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
            }}
        >
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2
                            className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                            style={{ color: mode === "dark" ? "white" : "" }}
                        >
                            CATEGORIES
                        </h2>
                        <nav className="list-none">
                            <li>
                                <a
                                    className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                                    onClick={() => {
                                        window.location.href = "/";
                                    }}
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                                    onClick={() => {
                                        window.location.href = "/allproject";
                                    }}
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    All Project
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                                    onClick={() => {
                                        window.location.href = "/bookmarks";
                                    }}
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Bookmarks
                                </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2
                            className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
                            style={{ color: mode === "dark" ? "white" : "" }}
                        >
                            Customer Service
                        </h2>
                        <nav className="list-none">
                            <li>
                                <Link
                                    to={"/about"}
                                    className="text-gray-600 hover:text-gray-800"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/contact"}
                                    className="text-gray-600 hover:text-gray-800"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/login"}
                                    className="text-gray-600 hover:text-gray-800"
                                    style={{
                                        color: mode === "dark" ? "white" : "",
                                    }}
                                >
                                    Login
                                </Link>
                            </li>
                        </nav>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 w-full hover:cursor-pointer">
                        <h1 className="text-7xl font-bold">UniProject.io</h1>
                    </div>
                </div>
            </div>

            <div
                className="bg-gray-200"
                style={{
                    backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
                    color: mode === "dark" ? "white" : "",
                }}
            >
                <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
                    <Link to={"/"} className="flex">
                        <div className="flex ">
                            <h1
                                className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                                style={{
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                UniProject.io
                            </h1>
                        </div>
                    </Link>
                    <p
                        className="text-sm hover:cursor-pointer text-gray-500 sm:ml-6 sm:mt-0 mt-4"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        © 2023 UniProject.io —
                        <a
                            onClick={() => {
                                window.location.href = "/";
                            }}
                            rel="noopener noreferrer"
                            className="text-gray-600 ml-1"
                            target="_blank"
                            style={{ color: mode === "dark" ? "white" : "" }}
                        >
                            www.UniProject.io.com
                        </a>
                    </p>

                    {/* social media icons */}
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {/* facebook icon */}
                        <a className="text-gray-500 hover:text-blue-500 ">
                            <FaSquareFacebook style={iconStyle} />
                        </a>

                        {/* twitter icon */}
                        <a className="ml-3 text-gray-500 hover:text-blue-500 ">
                            <FaSquareXTwitter style={iconStyle} />
                        </a>

                        {/* insta icon */}
                        <a className="ml-3 text-gray-500 hover:text-blue-500 ">
                            <AiFillInstagram style={iconStyle} fontSize="2rem" />
                        </a>

                        {/* linkedin icon */}
                        <a className="ml-3 text-gray-500 hover:text-blue-500 ">
                            <FaLinkedin style={iconStyle}/>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
