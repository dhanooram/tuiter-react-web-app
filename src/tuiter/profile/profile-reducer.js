import React from "react";
import {createSlice} from "@reduxjs/toolkit";
const profileUser={
  firstName: 'Dhanooram',
  lastName: 'Nagaraj',
  handle: '@Dhanoo',
  profilePicture: 'jose.png',
  bannerPicture: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs32615.pcdn.co%2Fwp-content%2Fuploads%2F2020%2F08%2Flinderpix-NEU-KCCS-0320-web-INLINE-DEFAULT.jpg&imgrefurl=https%3A%2F%2Fwww.khoury.northeastern.edu%2Flocations%2Fboston%2F&tbnid=qMl53E5XVPfKtM&vet=12ahUKEwiQ3dXupZj7AhXgsXIEHRSPBVMQMygDegUIARDGAQ..i&docid=iXLikejzjuIM8M&w=1500&h=1000&q=khoury%20college%20of%20computer%20science&ved=2ahUKEwiQ3dXupZj7AhXgsXIEHRSPBVMQMygDegUIARDGAQ',
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
