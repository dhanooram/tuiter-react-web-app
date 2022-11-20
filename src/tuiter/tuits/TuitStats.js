import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faRetweet,
    faHeart,
    faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {updateTuitLiked} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats=({post})=>{
  const dispatch = useDispatch();
  const updateLikeHandler = (id) => {
    let likes_soFar=post.liked?post.likes-1:post.likes+1;
    let isliked=!post.liked
    dispatch(updateTuitThunk({
      ...post,
      likes: likes_soFar,
      liked:isliked
    }));
  }
  const updateDisLikeHandler = (id) => {
    let dislikes_soFar=post.disliked?post.dislikes-1:post.dislikes+1;
    let isdisliked=!post.disliked
    dispatch(updateTuitThunk({
      ...post,
      dislikes: dislikes_soFar,
      disliked:isdisliked
    }));
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
        {post.disliked &&<Link className="text-decoration-none text-muted" onClick={() => updateDisLikeHandler(post._id)}>
          <FontAwesomeIcon style={{color:"brown"}}icon={faThumbsDown}/> {post.dislikes}</Link>}
        {!post.disliked &&<Link className="text-decoration-none text-muted" onClick={() => updateDisLikeHandler(post._id)} >
          <FontAwesomeIcon icon={faThumbsDown}/> {post.dislikes}</Link>}
        <Link className="text-decoration-none text-muted"><FontAwesomeIcon
            icon={faArrowUpFromBracket}/></Link>
      </div>
  );
}
export default TuitStats;