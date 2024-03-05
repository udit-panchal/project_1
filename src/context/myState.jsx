import React, { useState, useEffect } from "react";
import MyContext from "./myContext";
import { fireDB, auth } from "../firebase/firebaseConfig";
import {
    Timestamp,
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
    deleteDoc,
    doc,
    setDoc,
    getDocs,
} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function MyState(props) {
    const [mode, setMode] = useState("light");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // ******* Dark and Light Mode
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "rgb(17, 24, 39)";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };

    const login = async () => {
        setLoading(true);
        try {
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            localStorage.setItem("user", JSON.stringify(result));
            toast.success("Signin Successfully");
            setTimeout(() => {
                window.location.href = "/";
            }, 800);
            // navigate("/");
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error("Login Failed");
            setLoading(false);
        }
    };

    // const [products, setProducts] = useState({
    //     title: null,
    //     price: null,
    //     imageUrl: null,
    //     category: null,
    //     description: null,
    //     user_email: email,
    //     time: Timestamp.now(),
    //     date: new Date().toLocaleString("en-US", {
    //         month: "short",
    //         day: "2-digit",
    //         year: "numeric",
    //     }),
    // });

    const [projects, setProjects] = useState({
        project_title: null,
        college: null,
        university: null,
        roll_no: null,
        state: null,
        city: null,
        team_member_1: null,
        team_member_2: null,
        team_member_3: null,
        imageUrl: null,
        githubUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
    });

    // ******* Add Product
    const addProject = async () => {
        if (
            projects.project_title == null ||
            projects.imageUrl == null ||
            projects.roll_no == null ||
            projects.college == null ||
            projects.university == null ||
            projects.state == null ||
            projects.city == null ||
            projects.team_member_1 == null ||
            projects.category == null ||
            projects.description == null ||
            projects.githubUrl == null
        ) {
            return toast.error("Please fill all fields");
        }

        const projectRef = collection(fireDB, "/projects");
        setLoading(true);
        try {
            await addDoc(projectRef, projects);
            toast.success("Product Add successfully");
            getProjectData();
            // closeModal();
            setLoading(false);
            setProjects("");
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 1000);
            console.log(projects);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const [project, setProject] = useState([]);

    // ******* Get Product Data
    const getProjectData = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "projects"),
                orderBy("time")
                // limit(5)
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let projectArray = [];

                QuerySnapshot.forEach((doc) => {
                    projectArray.push({ ...doc.data(), id: doc.id });
                });

                setProject(projectArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const edithandle = (item) => {
        setProjects(item);
    };

    // ******* Update Product
    const updateProject = async (item) => {
        setLoading(true);

        try {
            await setDoc(doc(fireDB, "projects", projects.id), projects);
            toast.success("Project Update Succefully");
            getProjectData();
            setLoading(false);
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 1000);
            // window.location.href = "/dashboard";
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Project Update Failed");
        }
        setProjects("");
    };

    // ******* Delete Product
    const deleteProject = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, "projects", item.id));
            toast.success("Project Delete Successfully");
            getProjectData();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    // ******* Get User Data
    const [users, setUser] = useState([]);
    const getUserData = async () => {
        setLoading(true);

        try {
            const result = await getDocs(collection(fireDB, "users"));

            const usersArray = [];

            result.forEach((doc) => {
                usersArray.push(doc.data());
                setLoading(false);
            });

            setUser(usersArray);
            console.log(usersArray);

            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error("Not able to get user data");
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserData();
        getProjectData();
    }, []);

    const [searchKey, setSearchKey] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterCollege, setFilterCollege] = useState("");

    return (
        <MyContext.Provider
            value={{
                mode,
                toggleMode,
                loading,
                setLoading,
                project,
                setProject,
                addProject,
                projects,
                setProjects,
                updateProject,
                deleteProject,
                edithandle,
                getUserData,
                users,
                searchKey,
                filterType,
                filterCollege,
                setSearchKey,
                setFilterCollege,
                setFilterType,
                email,
                setEmail,
                password,
                setPassword,
                login,
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
