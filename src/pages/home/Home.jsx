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

    console.log(cartItem);

    const addCart = () => {
        dispatch(addToCart("shirt"));
    };

    const deleteCart = () => {
        dispatch(deleteFromCart("shirt"));
    };
    
    return (
        <Layout>
            <Filter />
            <ProjectCard />
            <div className="flex justify-center -mt-10 mb-10">
                <Link to={'/allproject'}>
                    <button className=" bg-gray-300 px-5 py-2 rounded-xl"> See More</button>
                </Link>
            </div>
            <Testimonial />
        </Layout>
    );
}

export default Home;
