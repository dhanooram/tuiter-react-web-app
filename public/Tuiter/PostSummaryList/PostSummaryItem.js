
const PostSummaryItem=(post)=>{
  return(`
     <li class="list-group-item">
          <div class="row">
            <div class="col-9">
              <div class="text-muted pb-1">${post.topic}</div>
              <div class="text-white" ><b>${post.userName}</b><i class="fa-solid fa-circle-check" ></i><span class="text-muted"> ${post.time}</span></div>
              <div><b>${post.title}</b></div>
              <div class="text-muted">${post.tweets}</div>
            </div>
            <div class="col-3 text-center">
              <a class="fa-3x text-muted text-decoration-none"href="#">
              <img class="img-fluid rounded" style="height: 100px;width: 100px" src=${post.image}>
              </a>
            </div>
          </div>
        </li>  
  `);
}
export default PostSummaryItem;

