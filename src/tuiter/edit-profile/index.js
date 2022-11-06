import React, {useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import "./index.css";
import {Form, Link} from "react-router-dom";
import {addTodo} from "../../labs/a7/redux-examples/reducers/todos-reducer";
import {updateProfile} from "../profile/profile-reducer";


const EditProfile=()=>{
  const usrprofile=useSelector(state => state.profile)
  const [profile,setProfile]=useState(usrprofile);
  const dispatch = useDispatch();
  const updateProfileHandler= () => {
    dispatch(updateProfile(profile))
  }
  return(
      <div>
        <div className="row">
          <div className=" col-12 position-relative">
            <img style={{width:"100%" ,height:"300px"}}className="p-0 m-0"
                 src="https://images.template.net/56075/Motivational-Linkedin-Banner-Template-sm-1611744369353-560750.jpeg"
            />
            <div className="position-absolute user-profile-pic">
              <img width={80} className="rounded-circle " style={{width:"125px",height:"125px"}}
                   src="https://media-exp1.licdn.com/dms/image/C5603AQEmnsRfW-lcig/profile-displayphoto-shrink_800_800/0/1590154400960?e=2147483647&v=beta&t=vxq_oNfR6h-JMIjeAPDkX1CHXHbbvcJdSOCSS0R4r48"
              />
            </div>
            <div className="p-1">
            <Link to="/tuiter/profile"> <button onClick={updateProfileHandler} className="btn btn-outline-dark w-25 rounded-pill float-end">Update Profile</button></Link>
            </div>
          </div>
          <div className="pt-5">
            {/*<form></form>*/}
            {/*<label for="firstname">Firstname :*/}
            {/*<input id="firstname" type="text" value={profile.firstName} onChange={(e)=>{setProfile(prevState=>({...prevState,firstName:e.target.value}))}}/>*/}
            {/*</label>*/}
            <form>
                <div className="form-group row p-2">
                  <label htmlFor="firstname"
                         className="col-sm-2 col-form-label">FirstName</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control"
                           onChange={(e)=>{setProfile(prevState=>({...prevState,firstName:e.target.value}))}}
                           id="firstname" value={profile.firstName}/>
                  </div>
                </div>
              <div className="form-group row p-2">
                <label htmlFor="lastname"
                       className="col-sm-2 col-form-label">LastName</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         onChange={(e)=>{setProfile(prevState=>({...prevState,lastName:e.target.value}))}}
                         id="lastname" value={profile.lastName}/>
                </div>
              </div>
              <div className="form-group row p-2">
                <label htmlFor="handle"
                       className="col-sm-2 col-form-label">Handle</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         onChange={(e)=>{setProfile(prevState=>({...prevState,handle:e.target.value}))}}
                         id="handle" value={profile.handle}/>
                </div>
              </div>
              <div className="form-group row p-2">
                <label htmlFor="dateofbirth"
                       className="col-sm-2 col-form-label">D.O.B</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         onChange={(e)=>{setProfile(prevState=>({...prevState,dateOfBirth:e.target.value}))}}
                         id="dateofbirth" value={profile.dateOfBirth}/>
                </div>
              </div>
              <div className="form-group row p-2">
                <label htmlFor="bio"
                       className="col-sm-2 col-form-label">Bio</label>
                <div className="col-sm-10">
                  <textarea  className="form-control"
                             onChange={(e)=>{setProfile(prevState=>({...prevState,bio:e.target.value}))}}
                         id="bio" value={profile.bio}/>
                </div>
              </div>
              <div className="form-group row p-2">
                <label htmlFor="location"
                       className="col-sm-2 col-form-label">Location</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control"
                         onChange={(e)=>{setProfile(prevState=>({...prevState,location:e.target.value}))}}
                         id="location" value={profile.location}/>
                </div>
              </div>

            </form>
            </div>

        </div>
      </div>
  )
}
export default EditProfile;