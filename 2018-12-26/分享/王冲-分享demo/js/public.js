(function (doc, win) {
    let docEl = doc.documentElement,//获取html根元素
   
    /*
        orientationchange事件是在用户水平|垂直翻转设备时触发的事件
        判断window有没有orientationchange事件，有就执行这个没有返回resize
    */
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //如果可视区域宽度大于750就让html的fontsize等于40，否则等于20
            if(clientWidth>750){
                docEl.style.fontSize =40+'px';
            }else{
                docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
            }
            console.log(clientWidth);
        };
        // console.log(docEl);
    if (!doc.addEventListener) return;//如果dom没有addEventListener方法就返回
    win.addEventListener(resizeEvt, recalc, false);//window窗口大小改变时候执行resizeEvt
    //DOMContentLoaded:文档加载完毕时触发（不包含图片资源）
    doc.addEventListener('DOMContentLoaded', recalc, false);//window添加dom结构加载完毕就执行recalc
})(document, window);

/*
    前端在线工具站：https://www.css-js.com/
    创造师（一站式服务导航）：https://www.chuangzaoshi.com/

    字体图标地址
        阿里巴巴矢量图库：https://www.iconfont.cn/
        Font Awesome中文网：https://fontawesome.com
        icomoon图标库：https://icomoon.io/
    原型设计工具
        墨刀：https://modao.cc/
        摹客（mockplus）：https://www.mockplus.cn
        axure：https://www.axure.com/download
*/

