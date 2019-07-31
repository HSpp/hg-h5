function initScreen(){
    var screenWidth=document.querySelector('html').offsetWidth;
    var baseSz=100;
    var pageWidth=750;
    var fz=baseSz*screenWidth/pageWidth;
    document.querySelector('html').style.fontSize=fz+'px';
}
function viewHeight(){
    var headHeight=document.querySelector('.head').offsetHeight;
    var view=document.querySelector('.body');
    view.style.height='calc(100% - '+headHeight+'px)';

}
window.onresize=function(){
    initScreen();
    viewHeight();

}
window.onload=function(){
    initScreen();
    viewHeight();

}