// ハンバーガーメニュークリック時のアニメーション
let trigger = document.getElementById('nav-open');
let cover = document.getElementById('nav-close')
if(trigger){
  trigger.addEventListener('click', function(){
    var target = document.getElementById('nav-open');
    target.classList.toggle('active');
  }, false);
}

//nav以外(暗転した背景部分)をタップした時
cover.addEventListener('click', function(){
    if(trigger.className == 'active'){
        trigger.classList.remove('active');
    }
});

// ページ上部へ戻るボタンのスクロール
let ywsa = document.getElementById("pagetop");
let yws_pagetop = function() {
    if (window.pageYOffset > 400) {
        ywsa.classList.add("fixed")
    } else {
        ywsa.classList.remove("fixed")
    }
};

window.addEventListener("load", yws_pagetop);
window.addEventListener("scroll", yws_pagetop);
ywsa.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});