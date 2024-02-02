import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LocalGuideView = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [user, setuser] = useState([]);
  useEffect(() => {
    const add = localStorage.getItem("curloc");
    console.log(add);

    axios.get("http://localhost:3000/client/guide-location").then((res) => {
      console.log(res.data.data);
      setuser(res.data.data);
    });

    setemail(localStorage.getItem("type"));
  }, []);
  if (email == "guide") {
    navigate("/req");
  }

  return (
    <>
      <h1
        className="font-bold text-xl
                    "
      >
        Nearby Local Guides
      </h1>
      <div className="flex flex-col gap-5 mt-3">
        {user.map((usr) => (
          <div className="flex justify-between items-center bg-gray-100 px-3 py-3 rounded-xl shadow-md">
            <div className="flex gap-3">
              <img
                src={usr.img}
                alt=""
                className="h-20 rounded-full"
              />
              <div className="flex flex-col ">
                <h1 className="font-semibold text-xl"></h1>
                <h1>{usr.phone}</h1>
                <h1>{usr.address}</h1>
              </div>
            </div>
            <button
              type="button"
              className="px-8 py-1 font-semibold rounded-full bg-[#6C63FF] shadow-md text-gray-100"
            >
              Choose
            </button>
          </div>
        ))}
      </div>{" "}
    </>
  );
};

export default LocalGuideView;
