import React, { useContext } from "react";
import myContext from "../../context/myContext";
import { FaSearch } from "react-icons/fa";

function Filter() {
    const context = useContext(myContext);
    const {
        mode,
        searchKey,
        filterType,
        filterPrice,
        setSearchKey,
        setFilterPrice,
        setFilterType,
        product,
        uid,
    } = context;

    const reset = () => {
        setFilterPrice("");
        setFilterType("");
        setSearchKey("");
    };

    return (
        <div>
            <div className=" container mx-auto px-4 mt-5 ">
                <div
                    className="p-5 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200"
                    style={{
                        backgroundColor: mode === "dark" ? "#282c34" : "",
                        color: mode === "dark" ? "white" : "",
                    }}
                >
                    <div className="relative">
                        <div className="absolute flex items-center ml-2 h-full">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            name="searchkey"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            id="searchkey"
                            placeholder="Search here"
                            className="px-8 py-3 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(64 66 70)" : "",
                                color: mode === "dark" ? "white" : "",
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-medium">Filters</p>
                        <button
                            onClick={reset}
                            className="px-4 py-2 bg-gray-50hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md hover:text-red-500 duration-200 "
                            style={{ color: mode === "dark" ? "white" : "" }}
                        >
                            Reset Filter
                        </button>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                            <select
                                key={uid}
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                style={{
                                    backgroundColor:
                                        mode === "dark" ? "rgb(64 66 70)" : "",
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                <option value="" disabled>
                                    Select Category
                                </option>
                                {product.map((item, index) => {
                                    const { category } = item;
                                    return (
                                        <option value={category}>
                                            {category}
                                        </option>
                                    );
                                })}
                            </select>
                            <select
                                value={filterPrice}
                                onChange={(e) => setFilterPrice(e.target.value)}
                                className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0  focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                style={{
                                    backgroundColor:
                                        mode === "dark" ? "rgb(64 66 70)" : "",
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                <option value="" disabled>
                                    Select ----
                                </option>
                                {product.map((item, index) => {
                                    const { price } = item;
                                    return (
                                        <option value={price}>{price}</option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
