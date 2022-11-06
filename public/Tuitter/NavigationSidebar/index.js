

const NavigationSidebar=(currentComponent)=>{
   var homeactive='';
   var exploreactive='';
  if(currentComponent=='home')
  {  homeactive='active';
    exploreactive='';
  }
  if(currentComponent=='explore')
  {  homeactive='';
    exploreactive='active';
  }
  return(`
    <ul class="list-group ">
        <li class="list-group-item wd-container1-listitem " >
          <div class="d-inline-flex ">
            <i class=" fab fa-twitter "></i>
            <!--            <div class=" ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" >Twitter</div>-->
          </div>
        </li>
        <li class="list-group-item ${homeactive} wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-home "></i>
            <div class=" ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" ><a href="../HomeScreen/index.html" class="text-white text-decoration-none">Home</a></div></div>
        </li>
        <li class="list-group-item ${exploreactive} wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-hashtag "></i>
            <div class="ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none fw-bolder" > <a href="../exploreJS/TuiterChallenge.html"class="text-white text-decoration-none">Explore</a></div></div>
        </li>
        <li class="list-group-item wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-bell "></i>
            <div class=" ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" ><a href="#" class="text-white text-decoration-none" >Notification</a> </div></div>
        </li>
        <li class="list-group-item wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-envelope "></i>
            <div class="ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" > <a href="#" class="text-white text-decoration-none">Message</a></div></div>
        </li>
        <li class="list-group-item wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-bookmark "></i>
            <div class="ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" ><a href="#" class="text-white text-decoration-none">Bookmarks</a> </div></div>
        </li>
        <li class="list-group-item wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-list "></i>
            <div class="ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" > <a href="#" class="text-white text-decoration-none">Lists</a></div></div>
        </li>
        <li class="list-group-item wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-user"></i>
            <div class="ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" > <a href="#" class="text-white text-decoration-none">Profile</a></div></div>
        </li>
        <li class="list-group-item wd-container1-listitem">
          <div class="d-inline-flex ">
            <i class="fa-solid fa-circle-info "></i>
            <div class="ps-3 d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-none" > <a href="#" class="text-white text-decoration-none">More</a></div></div>
        </li>
      </ul><br>
      <div class="text-center">
        <button class="btn btn-primary rounded-pill w-100 fw-bolder" >
          Tweet
        </button>
      </div>  
  `);
}
export default NavigationSidebar;