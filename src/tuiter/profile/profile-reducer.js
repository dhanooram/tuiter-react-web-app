import React from "react";
import {createSlice} from "@reduxjs/toolkit";
const profileUser={
  firstName: 'Dhanooram',
  lastName: 'Nagaraj',
  handle: '@Dhanoo',
  profilePicture: "https://media-exp1.licdn.com/dms/image/C5603AQEmnsRfW-lcig/profile-displayphoto-shrink_800_800/0/1590154400960?e=2147483647&v=beta&t=vxq_oNfR6h-JMIjeAPDkX1CHXHbbvcJdSOCSS0R4r48",
  bannerPicture: "https://images.template.net/56075/Motivational-Linkedin-Banner-Template-sm-1611744369353-560750.jpeg",
  bio: 'Student, Software Engineer,Programmer and AI, Space, and renewable enthusiast.Action cures fear.',
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA',	dateOfBirth: '30/04/1999',	dateJoined: '04/2009',
  followingCount: 340,	followersCount: 223
}
const profileSlice=createSlice({
  name:'profile',
  initialState:profileUser,
  reducers:{
    updateProfile(state,action){
      return action.payload
    }
  }
})
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
