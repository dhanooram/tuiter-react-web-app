import who from "./who.js";

import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList=()=>{
  return(`
<ul class="list-group">
           <li class="list-group-item text-white fw-bolder"><b>Who to follow</b></li>
          ${who.map(who => { return(WhoToFollowListItem(who))}).join('')}
           </ul>
           

`);
}
export default WhoToFollowList;