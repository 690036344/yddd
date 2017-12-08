//自动轮播-------------中间轮播图效果-----------------
{
    let zzuo = document.querySelector('.zbtnn');
    console.log(zzuo);
    let nnext = document.querySelector('.ybtnn');
    let bannerbox = document.querySelector('.bannerz');
    let imgs = document.querySelectorAll('.banner-img-inner li');
    console.log(imgs);
    let dians = document.querySelectorAll('.lunbo li');
    let flag = true;
    let now = 0;
    let z = 10;
    let tp = setInterval(movee, 3000);

    function movee(dir = 'r') {
        if (dir === 'r') {
            imgs[now].classList.add('leftout');
            dians[now].classList.remove('active');
            now++;
            if (now === imgs.length) {
                now = 0;
            }
            imgs[now].classList.add('rightin');
        } else if (dir === 'l') {
            imgs[now].classList.add('rightout');
            dians[now].classList.remove('active');
            now--;
            if (now === -1) {
                now = imgs.length - 1;
            }
            imgs[now].classList.add('leftin');
        }
        imgs[now].style.zIndex = z++;
        dians[now].classList.add('active');
    }

    imgs.forEach(function (ele) {
        ele.addEventListener('animationend', function () {
            flag = true;
            ele.className = '';
        })
    })
//点击轮播点效果--------------
    dians.forEach(function (ele, index) {
        ele.onclick = function () {
            if (flag) {
                if (index > now) {
                    imgs[now].classList.add('leftout');
                    imgs[index].classList.add('rightin');
                } else if (index < now) {
                    imgs[now].classList.add('rightout');
                    imgs[index].classList.add('leftin');
                }
                dians[now].classList.remove('active');
                dians[index].classList.add('active');
                imgs[index].style.zIndex = z++;
                now = index;
            }
            flag = false;
        }
    })
    bannerbox.onmouseover = function () {
        clearInterval(tp);
    }
    bannerbox.onmouseout = function () {
        tp = setInterval(movee, 3000);
    }
    window.addEventListener('onblur', function () {
        clearInterval(tp);
    })
    window.addEventListener('onfocus', function () {
        tp = setInterval(movee, 3000);
    })
    nnext.onclick = function () {
        if (flag) {
            movee('r');
            flag = false;
        }
    }
    zzuo.onclick = function () {
        if (flag) {
            movee('l');
            flag = false;
        }
    }
}


//banner下的轮播图
{
    let lcbxObj = document.querySelector(".lcbx ul");
    let containerObj=document.querySelectorAll(".bannerxia");
    let nextObj = document.querySelector(".youbtn");
    let prevObj = document.querySelector(".zuobtn");
    let now = 4;
    let dir = "r";
    let t = setInterval(moveFn, 2000);

    function moveFn() {
        if (dir === "r") {
            now++;
        } else if (dir === "l") {
            now--;
        }
        lcbxObj.style.transition = "all 1s";

        lcbxObj.style.marginLeft = -295 * now + "px";
    }

    lcbxObj.addEventListener("transitionend", function () {
        if (now === 12) {
            now = 4;
            lcbxObj.style.transition = "none";
            lcbxObj.style.marginLeft = "-1180px";
        };
        if (now === 0) {
            now = 8;
            lcbxObj.style.transition = "none";
            lcbxObj.style.marginLeft = "-2360px";
        }
    });
    containerObj.onmouseover = function () {
        clearInterval(t);
    }
    containerObj.onmouseout = function () {
        t = setInterval(moveFn, 2000);
    }
    let flag = true;
    nextObj.onclick = function () {
        dir = "r";
        if (flag) {
            flag = false;
            moveFn();
        }
    };
    prevObj.onclick = function () {
        dir = "l";
        if (flag) {
            flag = false;
            flag -= 2;
            moveFn();
        }
    }
}
// 公告
{
    let nextObj=document.querySelector(".notice .r-a");
    let prevObj=document.querySelector(".notice .l-a");
    let noticeObj=document.querySelector(".notice ul");
    let notice=document.querySelector(".notice");
    let now=0;
    nextObj.onclick=function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";

    };
    prevObj.onclick=function(){
        if(now===0){
            now=3;
        }
        now--;
        noticeObj.style.marginTop=-38*now+"px";
    }
    let t=setInterval(function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";
    },1000);
    notice.onmouseover=function(){
        clearInterval(t);
    };
    notice.onmouseout=function(){
        t=setInterval(function(){
            if (now===2){
                now=-1;
            }
            now++;
            noticeObj.style.marginTop=-38*now+"px";
        },1000)
    }
}