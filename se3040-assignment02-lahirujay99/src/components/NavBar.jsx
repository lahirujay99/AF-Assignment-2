import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";

const NavBar = ({ user }) => {
  const navigate = useNavigate();

  const handleUID = async () => {
    await auth.signOut();
    sessionStorage.removeItem("uid");
    navigate("/");
  };
  return (
    <div className="">
      <nav className="bg-gray-900 p-6 flex justify-between items-center">
        <div className="text-zinc-50 font-bold text-xl">Space Explorer</div>
        <div className="hidden md:block">
          {user ? (
            <>
              <Link to="/" className="text-white mx-4 hover:text-blue-100">
                Home
              </Link>
              <Link to="/apod" className="text-white mx-4 hover:text-blue-100">
                Astronomy Picture of the Day
              </Link>
              <Link to="/media" className="text-white mx-4 hover:text-blue-100">
                Explore
              </Link>
              <Link
                to="/"
                className="text-white mx-4 hover:text-blue-100"
                onClick={handleUID}
              >
                log out
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mx-4 hover:text-blue-100">
                Sign in
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button className="text-white hover:text-cosmic-silver focus:outline-none">
            {/* Hamburger menu icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
