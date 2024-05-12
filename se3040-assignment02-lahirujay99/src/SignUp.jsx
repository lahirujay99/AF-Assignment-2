import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [error, setError] = useState("");

  const validatePasswords = () => {
    if (password !== cPassword) {
      setError("Passwords do not match");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = validatePasswords();

    if (!isValid) return;

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">
      <div className="mb-8 text-center">
        <h2 className="text-5xl font-bold">SIGN UP</h2>
      </div>

      <div>
        <form className="text-black">
          <div className="mb-6">
            <input
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
              placeholder="Email address"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bordder-[#E9EDF4] w-full text-base rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              placeholder="Password"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              label="Create password"
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
              className="bordder-[#E9EDF4] w-full text-base rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-2 text-red-500">{error}</div>
          <div className="mb-10">
            <button
              type="submit"
              onClick={onSubmit}
              className=" w-full font-bold text-center hover:bg-gray-600 cursor-pointer rounded-3xl bg-[#41A4FF] py-3 px-5 text-white transition hover:bg-opacity-90"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
