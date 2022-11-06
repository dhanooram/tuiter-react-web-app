import React from "react";
import "./index.css";
import postsArray from "./homepost.json"
import HomePostItems from "./homePostItems";
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/TuitsList";
const Home =() =>{
  return(
      <div>
        <>
          <h4>Home</h4>
          <WhatsHappening/>
          <TuitsList/>
        </>

  </div>);
};
export default Home;