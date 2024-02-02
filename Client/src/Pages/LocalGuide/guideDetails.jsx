import { Select } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const GuideDetails = () => {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const Options = ["A", "B", "C"];
  const [imageFile, setImageFile] = useState("");
  const [name, setName] = useState("");
  const [vClass, setVClass] = useState("");
  const [vImage, setVImage] = useState("");
  const [seat, setSeat] = useState("");

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=3d8bf11ce249ae916c6a0f8c59052db8",
        formData
      );

      // The response.data.data.image.url contains the URL of the uploaded image
      console.log(response.data);
      const imageUrl = response.data.data.image.url;
      console.log("Image uploaded successfully:", imageUrl);

      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // You can handle the error based on your application's needs
    }
  };

  const uploadVehicle = async () => {
    try {
      if (!imageFile || !name || !seat) return;
      const image = await uploadImage(imageFile);
      const request = {
        email,
        vehicles: {
          name,
          class: vClass,
          seat,
          image: image,
        },
      };
      console.log(request);
      const res = await axios.post(
        "http://localhost:3000/guide/set-vehicle",
        request
      );
      console.log(res.data);
      alert("success");
    } catch (error) {
      alert("error");
    }
  };

  useEffect(() => {
    setemail(localStorage.getItem("email"));
    axios
      .post("http://localhost:3000/client/get-guide", { email })
      .then((res) => {
        setuser(res.data.data);
      });
  });
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="flex bg-white rounded-3xl shadow-md px-9 py-3 justify-between items-center border-r-4 border-blue-500">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl">Hello {user.name}</h1>
          <h1 className=" text-green-500 text-lg">{user.email}</h1>
          <h1 className="font-bold text-lg">{user.address}</h1>
        </div>
        <img className="w-32 h-w-32" src={user.img} alt="" />
      </div>
      <div className="flex flex-col bg-white rounded-3xl shadow-md px-9 py-3  border-r-4 border-blue-500 gap-3">
        <h1 className="text-center text-red-500 font-bold text-2xl">
          Complete your profile
        </h1>
        <div className="flex flex-col gap-3">
          <div>
            <label for="email" className="block mb-2 text-sm">
              Vehicle Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-1 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm">
              No. Seats
            </label>
            <input
              type="text"
              className="w-full px-3 py-1 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              onChange={(e) => setSeat(e.target.value)}
              value={seat}
            />
          </div>
          <div>
            <label for="email" className="block mb-2 text-sm">
              Vehicle Class
            </label>
            <select
              className="w-96 border py-1 px-2 rounded-md bg-white"
              onChange={(e) => setVClass(e.target.value)}
            >
              {Options.map((e) => (
                <option value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm">
              Image
            </label>
            <input
              type="file"
              className="text-sm"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-400 px-5 py-1 rounded-md text-sm font-medium"
              onClick={uploadVehicle}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;
