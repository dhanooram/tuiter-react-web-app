import React from "react";
import "./index.css";
import postsArray from "./homepost.json"
import HomePostItems from "./homePostItems";
const Home =() =>{
  return(
      <div>
    <ul className="list-group">
      {
        postsArray.map(post =>
            <HomePostItems
                key={post._id} post={post}/> )
      }
    </ul>
  </div>);
};
export default Home;