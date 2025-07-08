let dblClickLike = document.querySelector('.post')
let changeTheLikeBtn = document.querySelector('.unlikedImg')



dblClickLike.addEventListener("dblclick", function () {
   let img = document.createElement('img')
   img.setAttribute('src', 'like.png')
   img.setAttribute('class', 'likeImg')
   img.style.width = '70px'
   img.style.height = '70px'
   img.style.position = 'absolute'
   img.style.top = '400px'
   document.body.appendChild(img)
   setTimeout(() => {
    img.style.position = 'absolute'
   img.style.top = '-99999px'
   }, 2000);
   changeTheLikeBtn.setAttribute('src','like.png')
});
