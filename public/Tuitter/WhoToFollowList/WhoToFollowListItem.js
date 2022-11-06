const WhoToFollowListItem = (who) => {
  return(`
  <li class="list-group-item" >
  <div class="row">
            <div class="col-2">
              <img class="img-fluid rounded-circle" src=${who.avatarIcon} style="width: 48px;height: 48px;border-radius: 48px"
               />
                   </div>
            <div class="col-8 row">
              <div class="col-12 text-white"><b>${who.userName}</b> <i class="fa-solid fa-circle-check" ></i>
              </div>
              <div class="col-12">@ ${who.handle}</div>
            </div>
            <div class="p-1 col-2 my-auto">
              <button class="btn btn-primary rounded-pill fw-bolder">
                Follow
              </button>
            </div>
          </div>
   </li>
  `)
}
export default WhoToFollowListItem;





