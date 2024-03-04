import React, { useContext, useEffect } from "react";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function ProductCard() {
    const context = useContext(myContext);
    const {
        mode,
        product,
        searchKey,
        filterType,
        filterPrice,
        setSearchKey,
        setFilterPrice,
        setFilterType,
    } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success("Add To Cart");
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1
                        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        Our Latest Collection
                    </h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product
                        .filter((obj) =>
                            obj.title.toLowerCase().includes(searchKey)
                        )
                        .filter((obj) =>
                            obj.category.includes(filterType)
                        )
                        .filter((obj) => obj.price.includes(filterPrice))
                        .slice(0, 8)
                        .map((item, index) => {
                            const { title, price, description, imageUrl, id } =
                                item;
                            return (
                                <div key={id} className="p-4 md:w-1/4  drop-shadow-lg ">
                                    <div>
                                        <div
                                            className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-200 ease-in-out    border-gray-200 border-opacity-60 rounded-t-2xl overflow-hidden"
                                            style={{
                                                backgroundColor:
                                                    mode === "dark"
                                                        ? "rgb(46 49 55)"
                                                        : "",
                                                color:
                                                    mode === "dark"
                                                        ? "white"
                                                        : "",
                                            }}
                                            onClick={() =>
                                                (window.location.href = `/productinfo/${id}`)
                                            }
                                        >
                                            {/* image URL */}
                                            <div className="flex justify-center cursor-pointer">
                                                <img
                                                    className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-200 ease-in-out object-contain "
                                                    src={imageUrl}
                                                    alt="blog"
                                                />
                                            </div>

                                            <div className="p-5 border-t-2">
                                                {/* uniproject.io */}
                                                <h2
                                                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                                    style={{
                                                        color:
                                                            mode === "dark"
                                                                ? "white"
                                                                : "",
                                                    }}
                                                >
                                                    UniProject.io
                                                </h2>

                                                {/* title */}
                                                <h1
                                                    className="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-1"
                                                    style={{
                                                        color:
                                                            mode === "dark"
                                                                ? "white"
                                                                : "",
                                                    }}
                                                >
                                                    {title}
                                                </h1>

                                                {/* price */}
                                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                                <p
                                                    className="leading-relaxed mb-3"
                                                    style={{
                                                        color:
                                                            mode === "dark"
                                                                ? "white"
                                                                : "",
                                                    }}
                                                >
                                                    {price}
                                                </p>
                                            </div>
                                        </div>
                                        {/* button : add to cart*/}
                                        <div className="mt-auto flex justify-center">
                                            <button
                                                onClick={() => addCart(item)}
                                                type="button"
                                                className="focus:outline-none h-14 text-white bg-[#8E7AB5] hover:bg-[#B784B7] focus:ring-4 focus:ring-purple-300 font-medium rounded-b-2xl text-sm w-full py-2 hover:shadow-gray-100 hover:shadow-2xl"
                                            >
                                                Add To Bookmark
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
