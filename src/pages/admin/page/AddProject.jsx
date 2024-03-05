import React, { useContext } from "react";
import myContext from "../../../context/myContext";

function AddProduct() {
    const context = useContext(myContext);
    const { projects, setProjects, addProject } = context;
    return (
        <div>
            <div className=" flex justify-center items-center h-screen">
                <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
                    <div className="">
                        <h1 className="text-center text-white text-xl mb-4 font-bold">
                            Add Project
                        </h1>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={projects.project_title}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    project_title: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20.5em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Project Title"
                        />
                    </div>
                    <div className="flex gap-x-2 w-full">
                        <input
                            type="text"
                            value={projects.imageUrl}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    imageUrl: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[10em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Image URL"
                        />
                        <input
                            type="text"
                            value={projects.githubUrl}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    githubUrl: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[10em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Github URL"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={projects.roll_no}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    roll_no: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20.5em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Roll No"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={projects.team_member_1}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    team_member_1: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20.5em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Team Member 1 ( Team Leader )"
                        />
                    </div>
                    <div className="flex gap-x-2 w-full">
                        <input
                            type="text"
                            value={projects.team_member_2}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    team_member_2: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-1/2 lg:w-[10em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Team Member 2"
                        />
                        <input
                            type="text"
                            value={projects.team_member_3}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    team_member_3: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-1/2 lg:w-[10em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Team Member 3"
                        />
                    </div>
                    
                    <div>
                        <input
                            type="text"
                            value={projects.category}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    category: e.target.value,
                                })
                            }
                            name="title"
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20.5em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Category"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="price"
                            value={projects.college}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    college: e.target.value,
                                })
                            }
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20.5em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="College Name"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="price"
                            value={projects.university}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    university: e.target.value,
                                })
                            }
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20.5em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="University Name"
                        />
                    </div>
                    
                    <div className="flex gap-x-2 w-full">
                        <input
                            type="text"
                            name="imageurl"
                            value={projects.state}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    state: e.target.value,
                                })
                            }
                            className=" bg-gray-600 mb-4 px-2 py-2 w-1/2 lg:w-[10em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="State"
                        />
                        <input
                            type="text"
                            name="imageurl"
                            value={projects.city}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    city: e.target.value,
                                })
                            }
                            className=" bg-gray-600 mb-4 px-2 py-2 w-1/2 lg:w-[10em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="City"
                        />
                    </div>
                    <div>
                        <textarea
                            cols="10"
                            rows="10"
                            name="description"
                            value={projects.description}
                            onChange={(e) =>
                                setProjects({
                                    ...projects,
                                    description: e.target.value,
                                })
                            }
                            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20.5em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                            placeholder="Product Description"
                        ></textarea>
                    </div>
                    <div className=" flex justify-center mb-3">
                        <button
                            onClick={addProject}
                            className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
                        >
                            Add Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
