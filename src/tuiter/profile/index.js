import React from 'react'
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faLocationDot,faCake,faCalendar
} from "@fortawesome/free-solid-svg-icons";

const Profile=()=>{
  const profile=useSelector(state => state.profile)
  return(
      <div>
        <div className="row">
          <div className="position-relative">
           <img style={{width:"100%" ,height:"300px"}}className="p-0 m-0"
                src={profile.bannerPicture}
           />
            <div className="position-absolute user-profile-pic">
            <img width={80} className="rounded-circle " style={{width:"125px",height:"125px"}}
                src={profile.profilePicture}
                />
            </div>
            <div className="p-1">
          <Link to="/tuiter/edit-profile" className="p-1"> <button className="btn btn-light w-25 rounded-pill float-end">Edit Profile</button></Link>
            </div>
            </div>
            <div className="col-12 p-1">
          <h5>{profile.firstName} {profile.lastName}</h5>
          <h7>{profile.handle}</h7>
        </div>
         <div className="col-12 p-1 pb-0">
           <p>{profile.bio}</p>
         </div>
           <div className="col-8 p-1 d-flex justify-content-between text-muted">
             <Link className="text-decoration-none text-muted"><FontAwesomeIcon
                 icon={faLocationDot}/> {profile.location}</Link>
             <Link className="text-decoration-none text-muted"><FontAwesomeIcon
                 icon={faCake}/> {profile.dateOfBirth}</Link>
             <Link className="text-decoration-none text-muted"><FontAwesomeIcon
                 icon={faCalendar}/> Joined {profile.dateJoined}</Link>
           </div>
         <div className="col-6 p-1 d-flex justify-content-between">
           <span>{profile.followersCount} <span className="text-muted">Followers</span></span>
           <span>{profile.followingCount} <span className="text-muted">Following</span></span>
         </div>
       </div>
      </div>
  )
}
export default Profile;