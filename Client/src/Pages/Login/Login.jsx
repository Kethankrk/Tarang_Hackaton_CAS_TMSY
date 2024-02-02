import React, { useState } from "react";
import Logo from "../../assets/traveller-Logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const HandleLogin = async (e) => {
    try {
      e.preventDefault();
      if (!email || !password) return;
      const data = {
        email,
        password,
      };
      const res = await axios.post("http://localhost:3000/client/login", data);
      if (res.status != 200) {
        alert(res.data);
        return;
      }
      console.log(res.data);
      const user = res.data.data;
      const type = res.data.type;
      localStorage.setItem("type", type);
      localStorage.setItem("email", user.email);
      localStorage.setItem("name", user.name);
      navigate('/')
    } catch (error) {
      console.log(error.name);
      alert("Login failed");
      return;
    }
  };

  return (
    <div className="grid grid-cols-2 w-full bg-signinImage">
      <div className="col-span-1 flex justify-center items-end pt-14 px-14 ">
        <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded drop-shadow-lg pt-44 ">
          <img src={Logo} alt="" srcset="" />
        </div>
      </div>
      <div className="col-span-1 flex justify-center w-full h-screen items-center bg-[#6C63FF] rounded-l-2xl">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 ">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-gray-600">
              Sign in to access your account
            </p>
          </div>
          <form className="space-y-12" onSubmit={HandleLogin}>
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline text-gray-600"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-600">
                Don't have an account yet?
                <a
                  rel="noopener noreferrer"
                  href="/signup"
                  className="hover:underline text-violet-600"
                >
                  Sign up
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
