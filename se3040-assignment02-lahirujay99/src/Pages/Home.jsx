import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [uid, setUID] = useState(sessionStorage.getItem("uid"));

  useEffect(() => {
    setUID(sessionStorage.getItem("uid")); // Update uid state when component mounts
  }, []); // Empty dependency array to run the effect only once when component mounts

  useEffect(() => {
    // Update uid state when sessionStorage changes
    const handleStorageChange = () => {
      setUID(sessionStorage.getItem("uid"));
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="md:px-36 px-8 md:py-28 py-5">
        <div className="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 justify-center p-5">
            <h1 className="text-4xl md:text-5xl font-bold">Explore</h1>
            <h1 className="text-4xl md:text-5xl font-bold">the Wonders in</h1>
            <h1 className="text-4xl md:text-6xl font-bold text-[#41A4FF]">
              Universe
            </h1>
            <p className="mt-4">
              This is the web site that include the Media galleries of
              Uncountable , unmeasurable Universe
            </p>
            {!uid && (
              <button
                className="bg-black text-white px-2 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get started
              </button>
            )}
          </div>
          <div>
            <img
              src="https://static1.squarespace.com/static/635ed3da7198ed5ea5acfbb3/t/63ae1e005232d656fe359bf6/1672355331284/unsplash-image-9wH624ALFQA.jpg?format=1500w"
              alt="heroimg"
              className="rounded-3xl h-96 w-full object-fit"
            />
          </div>
        </div>
      </div>

      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1571862777746-c59ea9425ea2"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://images.unsplash.com/photo-1536904132820-d4760eae1463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVuaXZlcnNlfGVufDB8fDB8fHww"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-[#41A4FF] mb-2 block text-lg font-semibold">
                  Why Astronomy App
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Best Place to Explore The Universe
                </h2>
                <p className="text-body-color mb-8 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  nulla enim aperiam culpa cupiditate quas animi ducimus
                  blanditiis! Dolorum, perspiciatis.
                </p>
                <p className="text-body-color mb-12 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  nulla enim aperiam culpa cupiditate quas animi ducimus
                  blanditiis! Dolorum, perspiciatis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
