import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/myContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

function Signup() {
    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [university, setUniversity] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const signUp = async () => {
        setLoading(true);
        if (
            name === "" ||
            college === "" ||
            state === "" ||
            city === "" ||
            university === "" ||
            email === "" ||
            password === ""
        ) {
            return toast.error("All fields are required");
        } else {
            try {
                const users = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                console.log(users);

                const user = {
                    name: name,
                    uid: users.user.uid,
                    college: college,
                    state: state,
                    city: city,
                    university: university,
                    email: users.user.email,
                    time: Timestamp.now(),
                };

                const userRef = collection(fireDB, "users");
                await addDoc(userRef, user);
                toast.success("Signup Successfully");

                setTimeout(() => {
                    window.location.href = "/login"
                }, 800);

                setName("");
                setCollege("");
                setState("");
                setCity("");
                setUniversity("");
                setEmail("");
                setPassword("");

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    };

    return (
        <div className=" flex justify-center items-center h-screen">
        {loading && <Loader/>}
            <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
                <div className="">
                    <h1 className="text-center text-white text-xl mb-4 font-bold">
                        Signup
                    </h1>
                </div>

                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Name"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        name="college"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="College Name"
                    />
                </div>

                <div className="flex gap-x-2 w-full">
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        name="state"
                        placeholder="State"
                        className="bg-gray-600 mb-4 px-2 py-2 text-white placeholder:text-gray-200 outline-none rounded-lg w-1/2 lg:w-[10rem]"
                    />
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        name="city"
                        placeholder="City"
                        className="bg-gray-600 mb-4 px-2 py-2 text-white placeholder:text-gray-200 outline-none rounded-lg w-1/2 lg:w-[10rem]"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        name="University"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="University Name"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                        placeholder="Password"
                    />
                </div>
                <div className=" flex justify-center mb-3">
                    <button
                        onClick={signUp}
                        className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
                    >
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className="text-white">
                        Have an account{" "}
                        <Link className=" text-red-500 font-bold" to={"/login"}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Signup;
