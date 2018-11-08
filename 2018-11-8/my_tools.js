let obj = (function(){

    function offset(ele){
        //先获取元素
        if(ele.nodeType === 1){
            ele = ele;
        }else if(typeof ele === 'string'){
            ele = document.querySelector(ele)
        }else{
            return null; 
        }

        //存目标元素的边框
        let bl = ele.clientLeft;
        let bt = ele.clientTop;
        let obj = {
            l:0,
            t:0
        }
        while(ele){
            obj.l += ele.offsetLeft + ele.clientLeft;
            obj.t += ele.offsetTop + ele.clientTop;
            ele = ele.offsetParent;
        }
        obj.l -= bl;
        obj.t -= bt;
        return obj;
    }

    function dou(ele,attr,n,callback){
        let arr = [];
        let timer = null;
        let num = 0;
        for(let i=n;i>0;i-=2){
            arr.push(-i,i);
        }
        arr.push(0);

        // let begin = parseFloat(getComputedStyle(ele).left);//px
        let begin = parseFloat(getComputedStyle(ele)[attr]);
        // console.log(attr);
        timer = setInterval(()=>{
            // ele.style.left = begin + arr[num] + 'px';
            ele.style[attr] = begin + arr[num] + 'px';
            num++;
            if(num > arr.length){
                clearInterval(timer);
                num = 0; //以便下次使用
                /*
                    当某个条件（事件）成立的时候，触发的函数就叫钩子函数（回调函数）
                */
                callback && callback();
                // if(callback)callback();
                // ele.style.background = 'skyblue';
            }
        },16.7);
    }

    function toDou(n){
        return n<10?'0'+n*1:''+n;
    }

    return {
        offset,
        dou,
        toDou
    }
})();