import React, { useState, useEffect } from "react";
import MyContext from "./myContext";
import { fireDB } from "../firebase/firebaseConfig";
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

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
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
    const addProduct = async () => {
        if (
            products.title == null ||
            products.price == null ||
            products.imageUrl == null ||
            products.category == null ||
            products.description == null
        ) {
            return toast.error("Please fill all fields");
        }

        
        const productRef = collection(fireDB, "/products");
        setLoading(true);
        try {
            await addDoc(productRef, products);
            toast.success("Product Add successfully");
            getProductData();
            // closeModal();
            setLoading(false);
            setProducts("");
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 1000);
            console.log(products);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const [product, setProduct] = useState([]);

    // ******* Get Product Data
    const getProductData = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy("time")
                // limit(5)
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productsArray = [];

                QuerySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id });
                });

                setProduct(productsArray);
                setLoading(false);
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const edithandle = (item) => {
        setProducts(item);
    };

    // ******* Update Product
    const updateProduct = async (item) => {
        setLoading(true);

        try {
            await setDoc(doc(fireDB, "products", products.id), products);
            toast.success("Product Update Succefully");
            getProductData();
            setLoading(false);
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 1000);
            // window.location.href = "/dashboard";
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Product Update Failed");
        }
        setProducts("");
    };

    // ******* Delete Product
    const deleteProduct = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, "products", item.id));
            toast.success("Product Delete Successfully");
            getProductData();
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
        getProductData();
    }, []);
    

    const [searchKey, setSearchKey] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterPrice, setFilterPrice] = useState("");

    return (
        <MyContext.Provider
            value={{
                mode,
                toggleMode,
                loading,
                setLoading,
                product,
                setProduct,
                addProduct,
                products,
                setProducts,
                updateProduct,
                deleteProduct,
                edithandle,
                getUserData,
                users,
                searchKey, 
                filterType,
                filterPrice,
                setSearchKey,
                setFilterPrice,
                setFilterType,
                email,
                setEmail,
                password, 
                setPassword,
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
