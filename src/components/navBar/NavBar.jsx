import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import myContext from "../../context/myContext";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { FaBookBookmark } from "react-icons/fa6";

function NavBar() {
  const [open, setOpen] = useState(false);

  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const user = JSON.parse(localStorage.getItem("user"));

  const linkStyle =
    "text-sm font-medium text-gray-700 hover:text-blue-400 hover:duration-200";

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/";
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const login = () => {
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
  };

  const bookmarkItem = useSelector((state) => state.cart);

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-bold text-gray-900"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      All Products
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to={"/addproject"}
                      className="-m-2 block p-2 font-bold text-gray-900"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      Add Projects
                    </Link>
                  </div>

                  {user?.user?.email === "uditpanchal1106@gmail.com" ||
                  user?.user?.email === "kapil12vaishnav@gmail.com" ||
                  user?.user?.email === "temp@gmail.com" ||
                  user?.user?.email === "admin@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-bold text-gray-900"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-bold text-gray-900 cursor-pointer"
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/order"}
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                        className="-m-2 block p-2 font-bold text-gray-900 "
                      >
                        Login
                      </Link>
                    </div>
                  )}
                  <div className="border-t border-gray-200 "></div>

                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 p-2 font-medium text-gray-900 cursor-pointer flex"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzewQ_JGAS5FVP6PWfoTSzZ9TnNJWuMJFfLg&usqp=CAU"
                        alt="Profile"
                      />
                      <div className=" p-2 font-bold ">Profile</div>
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
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
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproject"}
                    className={linkStyle}
                    style={{
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    All Projects
                  </Link>

                  <Link
                    to={"/addproject"}
                    className={linkStyle}
                    style={{
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    Add Projects
                  </Link>

                  {user?.user?.email === "uditpanchal1106@gmail.com" ||
                  user?.user?.email === "kapil12vaishnav@gmail.com" ||
                  user?.user?.email === "temp@gmail.com" ||
                  user?.user?.email === "admin@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className={linkStyle}
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 duration-200 "
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      Logout
                    </a>
                  ) : (
                    <a
                      onClick={login}
                      className="text-sm font-medium text-gray-700 cursor-pointer hover:text-red-500 duration-200 "
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      Login
                    </a>
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzewQ_JGAS5FVP6PWfoTSzZ9TnNJWuMJFfLg&usqp=CAU"
                      alt="Profile"
                    />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Bookmark */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/bookmarks"}
                    className="group -m-2 flex items-center p-2"
                    style={{
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    <FaBookBookmark fontSize={24} />

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      {bookmarkItem.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
