import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent=()=>{
  return(`
   <div class="row">
        <div class="col-10 wd-tuiter-searchblock">
          <div class="input-group mb-3 position-relative">
            <input type="text" class="form-control rounded-pill ps-5 p-2  border-0" placeholder=" Search twitter">
            <span class="input-group-text m-0 bg-transparent border-0 position-absolute pl-2 pt-3" ><i class="fas fa-search" style="color: gray"></i></span>
          </div>
        </div>
        <div class="col-2  my-auto pb-3"><i class="fa fa-cog fa-2x" style="color:dodgerblue "></i></div>
      </div>
      <nav class="navbar navbar-expand">
        <div class="container p-0">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul id="menu-main-nav" class="navbar-nav nav-fill w-100">
              <li class="nav-item active bg-primary" ><a href="for-you.html" class="nav-link"><b class="text-white">For You</b></a></li>
              <li class="nav-item"><a href="news.html" class="nav-link"><b class="text-white">News</b></a></li>
              <li  class="nav-item "><a href="trending.html" class="nav-link"><b class="text-white">Trending</b></a></li>
              <li  class="nav-item"><a href="sports.html" class="nav-link"><b class="text-white">Sports</b></a></li>
              <li  class="nav-item "><a href="entertainment.html" class="nav-link"><b class="text-white nav-content">Entertainment</b></a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="position-relative wd-tuiterpg-mainimg">
          <img class="img-fluid" src="https://content.fortune.com/wp-content/uploads/2020/08/GettyImages-1219672105_web.jpg">
          <div class="ps-3 position-absolute bottom-0 left-0 text-white">
            <h2>Spacex Starship <span class="fa-2x">&#128640;</span></h2>
          </div>
        </div>
      <ul class="list-group">
        
      ${PostSummaryList()}
     </ul> 
  `);
}
export default ExploreComponent;