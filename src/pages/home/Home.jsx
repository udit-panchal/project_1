import React, { useContext } from "react";
import Layout from "../../components/layout/Layout.jsx";
import myContext from "../../context/myContext";
import Filter from "../../components/filter/Filter";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart);

    const context = useContext(myContext);

    const{mode} = context;

    console.log(cartItem);

    const addCart = () => {
        dispatch(addToCart("shirt"));
    };

    const deleteCart = () => {
        dispatch(deleteFromCart("shirt"));
    };

    return (
        <Layout>
            <h2
                className=" text-center text-4xl font-semibold my-10"
                style={{ color: mode === "dark" ? "white" : "" }}
            >
                Welcome to  <span className=" text-pink-500">UniProject.io</span>
            </h2>
            <Filter />
            <ProjectCard />
            <div className="flex justify-center -mt-10 mb-10">
                <Link to={"/allproject"}>
                    <button className="focus:outline-none h-14 text-white bg-[#8E7AB5] hover:bg-[#B784B7] focus:ring-4 focus:ring-purple-300 font-medium rounded-2xl px-4 text-sm w-full py-15 hover:shadow-gray-100 hover:shadow-2xl">
                        {" "}
                        See More
                    </button>
                </Link>
            </div>
            <Testimonial />
        </Layout>
    );
}

export default Home;
