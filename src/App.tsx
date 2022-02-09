import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { IUserData } from "./Models/UserData";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function App(this: any,props:any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const customId = "custom-id"
  let navigate = useNavigate();


   const login = (token:string) =>{
     console.log(token);
     localStorage.setItem('token',token);
     localStorage.setItem('username',username);
     toast.success("Login Successfully", {
      position: toast.POSITION.TOP_CENTER,
      toastId: customId
    });
    console.log('heeer 22');
    // console.log('heeer', this.props.history.push('home'));

    navigate('/home');
     
   }
  const handleSubmit = (event: any) => {
    event.preventDefault();
     const userData: IUserData ={username,password}
 

    axios.post(`https://reqres.in/api/login`, userData )
      .then(res => {
        if(res.status == 200)
         login(res.data) 
       
      }).catch(()=>{

  
         
         
        toast.error("Opss!! Worng Credintials", {
         position: toast.POSITION.TOP_CENTER,
         toastId: customId
       });;
      })
  };

  return (
    <div className="container">
      <ToastContainer />

      <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")',
          }}
        />
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="107.581"
              height="24.829"
              viewBox="0 0 107.581 24.829"
              className="header__logo"
            >
              <g transform="translate(0 0)">
                <path
                  d="M948.032,970.649a9.44,9.44,0,0,1-6.513-2.365,9.459,9.459,0,0,1-1.292-11.466,8.906,8.906,0,0,1,3.584-3.068,10.979,10.979,0,0,1,4.8-1.063,8.684,8.684,0,0,1,2.965.48,8.068,8.068,0,0,1,2.347,1.3l-2.911,3.771a3.351,3.351,0,0,0-2.037-.823,3.4,3.4,0,0,0-2.729,1.148,4.615,4.615,0,0,0-.982,3.1,4.5,4.5,0,0,0,1.019,3.1,3.186,3.186,0,0,0,2.474,1.149,3.917,3.917,0,0,0,1.51-.309,6.684,6.684,0,0,0,1.4-.788l2.4,3.839a7.906,7.906,0,0,1-3,1.56A11.909,11.909,0,0,1,948.032,970.649Z"
                  transform="translate(-938.863 -945.82)"
                  fill="#2E66A3"
                />
                <path
                  d="M1224.406,960.528a5.176,5.176,0,0,1-4-1.577,5.279,5.279,0,0,1-1.455-3.7,4.769,4.769,0,0,1,2.329-4.2q2.328-1.525,7.568-2.04-.218-1.782-2.547-1.782a10.91,10.91,0,0,0-4.585,1.439l-2.182-3.839a17.508,17.508,0,0,1,3.893-1.68,14.633,14.633,0,0,1,4.111-.583,7.756,7.756,0,0,1,5.567,1.9q2,1.9,2,6.119v9.529h-5.094l-.436-1.645h-.145a10.073,10.073,0,0,1-2.329,1.491A6.4,6.4,0,0,1,1224.406,960.528Zm2.183-4.525a2.228,2.228,0,0,0,1.255-.325,6.443,6.443,0,0,0,1-.84v-2.331a7.222,7.222,0,0,0-3.092.926,1.7,1.7,0,0,0-.837,1.337Q1224.915,956,1226.588,956Z"
                  transform="translate(-1202.513 -936.259)"
                  fill="#2E66A3"
                />
                <path
                  d="M1527.875,960.528a11.654,11.654,0,0,1-3.693-.651,11.307,11.307,0,0,1-3.365-1.748l2.765-3.634a8.072,8.072,0,0,0,4.439,1.714q1.818,0,1.819-1.028,0-.686-1.055-1.08l-2.437-.908a11.08,11.08,0,0,1-3.093-1.766,3.98,3.98,0,0,1-1.492-3.308,4.809,4.809,0,0,1,2-4.045,8.416,8.416,0,0,1,5.2-1.508,9.7,9.7,0,0,1,3.875.7,15.451,15.451,0,0,1,2.82,1.56l-2.765,3.5a6.883,6.883,0,0,0-3.711-1.44q-1.6,0-1.6.96,0,.686,1.019,1.028t2.4.823a11.153,11.153,0,0,1,3.147,1.679,4.047,4.047,0,0,1,1.51,3.462,5.065,5.065,0,0,1-1.983,4.045A8.892,8.892,0,0,1,1527.875,960.528Z"
                  transform="translate(-1486.667 -936.259)"
                  fill="#2E66A3"
                />
                <path
                  d="M2064.715,944.923q-1.946-2.434-5.983-2.435a8.58,8.58,0,0,0-3.623.8l-5.092,8.919a8.087,8.087,0,0,0,2.669,5.881,9.778,9.778,0,0,0,6.694,2.367,12.379,12.379,0,0,0,3.347-.513,11.655,11.655,0,0,0,3.275-1.473l-2.037-3.5a8.028,8.028,0,0,1-3.711,1.027,5.576,5.576,0,0,1-2.656-.6,3.283,3.283,0,0,1-1.564-2.143l10.369,0q.073-.308.164-1.011a11.628,11.628,0,0,0,.092-1.457A9.1,9.1,0,0,0,2064.715,944.923Zm-8.752,4.488a2.843,2.843,0,0,1,2.911-2.467,2.221,2.221,0,0,1,1.947.755,2.916,2.916,0,0,1,.526,1.714Z"
                  transform="translate(-1985.952 -936.185)"
                  fill="#2E66A3"
                />
                <path
                  d="M1824.74,839.727a7.3,7.3,0,0,0-1.184-3.035,4.935,4.935,0,0,0-4.33-1.9,6.591,6.591,0,0,0-3.184.72,16.221,16.221,0,0,0-1.984,1.251h0v-8.277H1807.8V852.34h6.258V841.1a9.673,9.673,0,0,1,1.31-.96,2.832,2.832,0,0,1,1.456-.343,1.662,1.662,0,0,1,1.382.548,3.79,3.79,0,0,1,.437,2.194V850.4Z"
                  transform="translate(-1757.961 -828.482)"
                  fill="#2E66A3"
                />
                <path
                  d="M2367.678,949.986l-2.115,12.408h-.146l-2.833-12.41-5.312,0-2.7,12.408h-.145l-2.1-12.409-6.186,0,4.36,17.141,7.131,0,2.042-11h.146l2.179,11,7.276,0,4.154-17.138Z"
                  transform="translate(-2265.846 -943.262)"
                  fill="#2E66A3"
                />
              </g>
            </svg>
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome
          </p>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              login with email
            </a>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email or username
              </label>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>
              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mt-8">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <p className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
              Cashew
            </p>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
