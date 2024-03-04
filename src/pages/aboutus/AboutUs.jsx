import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";

function AboutUs() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <>
            <Layout>
                <div className="w-full  mb-[20%] h-svh md:h-lvh container px-16 py-32 md:py-16 mx-auto">
                    <h1
                        className=" text-5xl font-bold text-center pb-20"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        ABOUT US
                    </h1>
                    <div
                        className="text-2xl "
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        <strong
                            className=" text-2xl"
                            style={{ color: mode === "dark" ? "white" : "" }}
                        >
                            SIH 1369 :  
                        </strong>
                        Online integrated platform for projects taken up by the
                        students of various universities/colleges
                    </div>
                    <h2
                        className="text-bold text-2xl pt-20 font-bold"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        Problem Statement:
                    </h2>
                    <div class="h-1 w-32 m-2 bg-pink-600 rounded text-center"></div>

                    <div
                        className="text-lg p-7 indent-20 "
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                    <h1
                        className="text-2xl font-bold"
                        style={{ color: mode === "dark" ? "white" : "" }}
                    >
                        Team Members
                    </h1>
                    <div class="h-1 w-32 m-2 bg-pink-600 rounded text-center"></div>

                    <div className="w-full flex justify-around items-center my-7">
                        <div
                            className="w-1/3 md:w-full text-2xl bg-gray-100 m-10  rounded-md p-5"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                            }}
                        >
                            <img
                                className="border-2 border-black rounded-full"
                                src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
                            ></img>
                            <p
                                className="text-center font-bold text-2xl border-b-4 border-pink-500 inline-block "
                                style={{
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                UDIT PANCHAL
                            </p>
                            <br/><br/>
                            <strong
                                className="text-xl"
                                style={{
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                Tech Stack
                            </strong>
                            <div>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    HTML
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    TailwindCSS
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    CSS
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    JavaScript
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-1/3 md:w-full text-2xl bg-gray-100 m-10 rounded-md p-5"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                            }}
                        >
                            <img
                                className="border-2 border-black rounded-full"
                                src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
                            ></img>
                            <p
                                className="text-center font-bold text-2xl border-b-4 border-pink-500 inline-block"
                                style={{
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                KAPIL VAISHNAV
                            </p>
                            <br/>
                            <br/>
                            <strong
                                className="text-xl"
                                style={{
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                Tech Stack
                            </strong>
                            <div>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    HTML
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    TailwindCSS
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    CSS
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    JavaScript
                                </p>
                            </div>
                        </div>
                        <div
                            className="w-1/3 md:w-full text-2xl bg-gray-100 m-10 rounded-md p-5"
                            style={{
                                backgroundColor:
                                    mode === "dark" ? "rgb(46 49 55)" : "",
                            }}
                        >
                            <img
                                className="border-2 border-black rounded-full"
                                src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png"
                            ></img>
                            <p
                                className="text-center font-bold text-2xl inline-block border-b-4 border-pink-500 "
                                style={{
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                SHIVAM KUMAR
                            </p> <br/><br/>
                            <strong
                                className="text-xl"
                                style={{
                                    color: mode === "dark" ? "white" : "",
                                }}
                            >
                                Tech Stack
                            </strong>
                            <div>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    HTML
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    TailwindCSS
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    CSS
                                </p>
                                <p className="inline-block bg-gray-300 rounded-md m-1 p-1 text-xl">
                                    JavaScript
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default AboutUs;
