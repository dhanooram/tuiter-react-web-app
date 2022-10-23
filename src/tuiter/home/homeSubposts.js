import React from "react";

const HomeSubPosts = ({post}) => {
  return (
      <div className="row p-2">
        <div className="col-12">
          <img src={`/images/${post.profilePic}`} style={{width:"28px", height:"28px"}}/>
          <span className="p-1 fw-bold">{post.userName}<i
           className="bi bi-patch-check-fill" style={{color: "dodgerblue"}}></i></span>
          <span
              className="text-muted"> @{post.userHandle} -{post.timeOfPost}</span>
        </div>
        <div ><p>{post.postDescription}</p></div>
      </div>)
};
export default HomeSubPosts;