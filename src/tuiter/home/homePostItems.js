import React from "react";
import "./index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import  {faRetweet,faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons";
import {faHeart,faComment} from "@fortawesome/free-regular-svg-icons";
import {Link} from "react-router-dom";
import HomeSubPosts from "./homeSubposts";
const HomePostItems =(
    {
      post={
        "_id":"234",
        userName:"ElonMusk",
        userHandle:"ElonMusk",
        profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Rl2XOZnnfo6HjBPi6TsiscCEpxaRpDM3_Q&usqp=CAU",
        timeOfPost:"2h",
        postDescription:"The Spacex project is going in full fledged hope it gets completed by the end"
            + " of 2022.Hopefully we shall start our service from mid 2023",
        image: 'https://www.usda.gov/sites/default/files/fs-fall-colors-blog-092118.jpg',
        imgHeading:'1914 translation by H. Rackham',
        imageDescription: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.',
        retweets:"123",
        comments:"77",
        shares:"24",
        likes:"1.1K",
        "referenceAttached": false,
        "referenceLink": "",
        "retweetedDisplay": true,
        "retwitterUser": "MarsExplore",
        "subPost": false,
        "subPostContent": {
        }
      }
    }
) =>{
  return(<div>
      <li className="list-group-item">
        {post.retweetedDisplay && <div className="pl-0">
          <FontAwesomeIcon icon={faRetweet}/>
            <span className="text-muted"> {post.retwitterUser} Retweeted</span></div>}
        <div className="row">
          <div className="col-1 p-0">
            <img className="wd-Profile-img"
                 src={post.profilePic} />
          </div>
          <div className="col-11 pl-5">
            <div className="row">
              <div className="col-11">
                <span className="fw-bold">{post.userName}<i
                    className="bi bi-patch-check-fill" style={{color:"dodgerblue"}}></i></span>
                <span className="text-muted"> @{post.userHandle} .{post.timeOfPost}</span>
              </div>
              <div className="col-1">...</div>
            </div>
            <div className="pb-2">{post.postDescription}</div>
            <div className="rounded-4 p-0" style={{overflow: "hidden",borderColor:"lightgray", borderStyle:"solid"}}>
              <img src={post.image} style={{width:"100%",padding:"0px"}}/>
              <div className={`${post.imageDescription==''?"":"p-2"}`}>
                {post.imageDescription}
              </div>
              {post.subPost && <HomeSubPosts post={post.subPostContent}/>}
            </div>
            <div className="col-10 pt-3 d-flex justify-content-between text-muted" >
              <Link className="text-decoration-none text-muted"><FontAwesomeIcon icon={faComment}/> {post.comments}</Link>
              <Link className="text-decoration-none text-muted"><FontAwesomeIcon icon={faRetweet}/> {post.retweets}</Link>
              <Link className="text-decoration-none text-muted"><FontAwesomeIcon icon={faHeart}/> {post.likes}</Link>
              <Link className="text-decoration-none text-muted"><FontAwesomeIcon icon={faArrowUpFromBracket} /></Link>
            </div>
            {post.referenceAttached && <a className="text-decoration-none" href={post.referenceLink}>Show This Thread</a>}
          </div>
        </div>

      </li>
  </div>);
};
export default HomePostItems;