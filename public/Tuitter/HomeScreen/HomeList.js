import HomeSummaryListItems from "./HomeSummaryListItems.js";
import post from "./posts.js"

const HomeList = () => {

  return (`
  <div class="wd-flex-maiContainer">

  <div class="wd-flex-BookmarkHeading">
    <div class="wd-flex-BookmarkHeading-A">
      <h2>HomeScreen</h2>
      <h4>@Dhanoo</h4>
    </div>
    <div class="wd-flex-BookmarkHeading-B">
      <div class="wd-flex-dots">...</div>
    </div>
  </div>
    ${post.map(post => { return(HomeSummaryListItems(post))}).join('')}
</div>

      
 `);

}
export default HomeList;
