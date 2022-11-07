import React from "react";
import {Link as Link} from "react-router-dom";
import {useLocation} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faRobot,
  faBell,
  faMessage,
  faUser,
  faList,
  faBookmark, faInfo, faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import {faHeart,faComment} from "@fortawesome/free-regular-svg-icons";


const NavigationSidebar = (
    { active='explore'}
) =>{
  const {pathname} = useLocation();
  const paths = pathname.split('/')
   active = paths[2];
  return (
      <div className="list-group">
        <Link className="list-group-item">
          <div  className="d-inline-flex ">
            <i className="bi bi-twitter p-1"></i>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Tuiter</span>
          </div>
        </Link>
        <Link to="/tuiter/home" className={`list-group-item ${active==='home'?'active':''}`}>
          <div className="d-inline-flex ">
           <FontAwesomeIcon icon={faHome} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Home</span>
          </div>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active==='explore'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faHashtag} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Explore</span>
          </div>
        </Link>
        <Link to="/" className={`list-group-item ${active==='lab'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faRobot} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Lab</span>
          </div>
        </Link>
        <Link className={`list-group-item ${active==='notification'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faBell} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Notification</span>
          </div>
        </Link>
        <Link className={`list-group-item ${active==='message'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faMessage} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Message</span>
          </div>
        </Link>
        <Link className={`list-group-item ${active==='bookmarks'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faBookmark} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Bookmark</span>
          </div>
        </Link>
        <Link className={`list-group-item ${active==='lists'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faList} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Lists</span>
          </div>
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item ${active==='profile'||active==='edit-profile'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faUser} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">Profile</span>
          </div>
        </Link>
        <Link className={`list-group-item ${active==='More'?'active':''}`}>
          <div className="d-inline-flex ">
            <FontAwesomeIcon icon={faInfoCircle} className="p-1"/>
            <span className="d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none">More</span>
          </div>
        </Link>
      </div>
  );
};
export default NavigationSidebar;