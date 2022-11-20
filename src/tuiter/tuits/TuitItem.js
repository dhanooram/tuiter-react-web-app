import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";

import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));

  }

  return <>
   <li className="list-group-item">
    <div className="row">
      <div className="col-1 p-0">
        <img className="wd-Profile-img" src={`/images/${post.image}`}
              />
      </div>
      <div className="col-11 pl-5">
        <div className="row">
          <div className="col-11">
                <span className="fw-bold">{post.username}<i
                    className="bi bi-patch-check-fill"
                    style={{color: "dodgerblue"}}></i></span>
            <span className="text-muted"> {post.handle} .{post.time}</span>
          </div>
          <div className="col-1">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(post._id)}></i>
          </div>
        </div>
        <div className="pb-2">{post.tuit}</div>
        <TuitStats post={post}/>
      </div>
    </div>
    </li>
  </>
}
export default TuitItem;