import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faRetweet,
    faHeart
} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {updateTuitLiked} from "./tuits-reducer";

const TuitStats=({post})=>{
  const dispatch = useDispatch();
  const updateLikeHandler = (id) => {
    dispatch(updateTuitLiked(id));
  }
  return(
      <div className="col-10 pt-3 d-flex justify-content-between text-muted">
        <Link className="text-decoration-none text-muted"><FontAwesomeIcon
            icon={faComment}/> {post.replies}</Link>
        <Link className="text-decoration-none text-muted"><FontAwesomeIcon
            icon={faRetweet}/> {post.retuits}</Link>
        {post.liked &&<Link className="text-decoration-none text-muted" onClick={() => updateLikeHandler(post._id)}><FontAwesomeIcon style={{color:"red"}}
            icon={faHeart}/> {post.likes}</Link>}
        {!post.liked &&<Link className="text-decoration-none text-muted" onClick={() => updateLikeHandler(post._id)} ><FontAwesomeIcon
           icon={faHeart}/> {post.likes}</Link>}
        <Link className="text-decoration-none text-muted"><FontAwesomeIcon
            icon={faArrowUpFromBracket}/></Link>
      </div>
  );
}
export default TuitStats;