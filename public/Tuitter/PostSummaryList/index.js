import post from "./posts.js";

import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList=()=>{
  return(`
          
             ${post.map(post => { return(PostSummaryItem(post))}).join('')}
         
           

`);
}
export default PostSummaryList;