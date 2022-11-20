import {createSlice} from "@reduxjs/toolkit";
import tuits from "../data/tuits.json";
import {deleteTuitThunk, createTuitThunk, findTuitsThunk, updateTuitThunk}
  from "../../services/tuits-thunks";


const initialState = {
  tuits: [],
  loading: false
}


const currentUser = {
  "userName": "NASA",
  "handle": "nasa",
  "image": "nasa.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "replies": 0,
  "retuits": 0,
  "likes": 0,
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
          .filter(t => t._id !== payload)
        },
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state) => {
          state.loading = false
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.tuits.push(
                payload
          )
          state.loading = false
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        }


  },

  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },
    updateTuitLiked(state,action){
      const tuit = state
      .find(tuit =>
          tuit._id === action.payload);
      tuit.likes=tuit.liked?tuit.likes-1:tuit.likes+1;
      tuit.liked=!tuit.liked
    }
  }

});
export const {createTuit,deleteTuit,updateTuitLiked} = tuitsSlice.actions;
export default tuitsSlice.reducer