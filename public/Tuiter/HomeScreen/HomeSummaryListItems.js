const HomeSummaryListItems=(post)=>{
  var paddingImgDescription='';
  if(post.imgHeading==''&& post.imageDescription=='')
  {  paddingImgDescription='p-0'
  }
  return(`
     <div class="wd-flex-contentContainer">
    <div class="wd-flex-contentContainer-A">
      <img class="wd-Profile-img"
           src=${post.profilePic} />
    </div>
    <div class="wd-flex-contentContainer-B">
      <div class="wd-flex-contentContainer-B1">
        <div class="wd-flex-contentContainer-B1A">
          <span class="wd-heading-white">${post.userName}</span>
          <span class="wd-content-lightgray">${post.userHandle}</span>
        </div>
        <div class="wd-flex-contentContainer-B1B">
          <span class="wd-flex-dots">...</span>
        </div>
      </div>
      <div class="wd-flex-contentContainer-B2">
       <p class="wd-main-content">
          ${post.titleDescription}
          </p>
      </div>
      <div class="wd-flex-contentContainer-B3">
      <div class="wd-flex-contentContainer-B3A">
        <div class="wd-B3A-content">
        <img src=${post.image}>
        <div class="wd-pad-all ${paddingImgDescription}">
        <h2 class="wd-heading-white">${post.imgHeading}</h2>
        <h2 class="wd-content-lightgray">${post.imageDescription}</h2>
          </div>
        </div>
      </div>
      </div>
        <div class="wd-flex-contentContainer-B4">
           <div class="wd-flex-contentContainer-B4A">
             <a href="#">
             <i class="fa-regular fa-comment"></i>
             </a>
             <span class="wd-padd-sides">${post.commentCount}</span>
           </div>
           <div class="wd-flex-contentContainer-B4B">
             <a href="#">
             <i class="fa-solid fa-retweet"></i>
             </a>
             <span class="wd-padd-sides">${post.retweetCount}</span>
           </div>
           <div class="wd-flex-contentContainer-B4C">
             <a href="#">
             <i class="fa-solid fa-heart bg-color-red"></i>
             </a>
             <span class="wd-padd-sides bg-color-red">${post.loveCount}</span>
           </div>
           <div class="wd-flex-contentContainer-B4D">
             <a href="#">
             <i class="fa-solid fa-arrow-up-from-bracket"></i>
             </a>
           </div>
      </div>

    </div>
  </div>
  `);
}
export default HomeSummaryListItems;