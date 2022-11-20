import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
//import postsArray from './posts.json';
import {findTuitsThunk}
  from "../../services/tuits-thunks";
import PostSummaryItem
  from "./post-summary-item";

const PostSummaryList = () => {
  const {tuits, loading} = useSelector(
      state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
  //const postsArray=useSelector(state => state.tuits)
  return(
      <ul className="list-group">
        {
          tuits.map(post =>
              <PostSummaryItem
                  key={post._id} post={post}/> )
        }
      </ul>
  );
};
export default PostSummaryList;

