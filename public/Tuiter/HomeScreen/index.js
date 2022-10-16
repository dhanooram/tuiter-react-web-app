import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import HomeList from "./HomeList.js";
function exploreComponent() {
  $('#wd-home').append(`
       <h2>Explore</h2>
  <div class="row mt-2">
   <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
      ${NavigationSidebar('home')} 
   </div>
   <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6  ">
  ${HomeList()}
   </div>
   <div class="dcol-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4 d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none">
  
    ${PostSummaryList()}
   </div>
  </div>
  
   `);
}
$(exploreComponent);