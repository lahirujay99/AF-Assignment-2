import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("uid", user.uid);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="py-32 lg:py-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto mt-[-5rem] max-w-[525px] overflow-hidden bg-transparent py-16 px-10 text-center sm:px-12 md:px-[60px]">
                <div className="mb-10 text-center md:mb-16">
                  <h2 className="text-5xl font-bold">LOGIN</h2>
                </div>
                <form className="text-black">
                  <div className="mb-6">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                      className="bordder-[#E9EDF4] w-full rounded-3xl focus:ring border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Password"
                      className="bordder-[#E9EDF4] w-full rounded-3xl border focus:ring bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-6">
                    <button
                      onClick={onLogin}
                      className="w-full cursor-pointer rounded-3xl font-bold bg-[#41A4FF] text-center hover:bg-gray-600 py-3 px-5 text-white transition hover:bg-opacity-90"
                    >
                      Login
                    </button>
                  </div>
                </form>

                <p className="text-base text-[#adadad]">
                  Not a member yet?
                  <Link
                    to="/signup"
                    className="text-primary cursor-pointer hover:underline ms-2 font-bold"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
