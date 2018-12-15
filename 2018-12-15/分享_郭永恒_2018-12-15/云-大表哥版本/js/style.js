const section = document.getElementById('section');
const head = document.getElementById('head');
let iH = window.innerHeight;
section.style.height = iH - head.offsetHeight + 'px';

//页面所放时候计算section的高度
window.onresize = function(){
    iH = window.innerHeight;
    section.style.height = iH - head.offsetHeight + 'px';
}