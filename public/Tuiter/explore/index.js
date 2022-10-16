import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import ExploreComponent from "./ExploreComponent.js";
function exploreComponent() {
  $('#wd-explore').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
   <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
      ${NavigationSidebar('explore')} 
   </div>
   <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6  ">
    ${ExploreComponent()}
   </div>
   <div class="dcol-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none">
  
    ${WhoToFollowList()}
   </div>
  </div>
  
   `);
}
$(exploreComponent);