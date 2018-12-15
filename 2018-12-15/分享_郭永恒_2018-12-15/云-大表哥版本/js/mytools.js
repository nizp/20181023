// console.log('tool')
let myTools = (function(){
    /*
        通过父级的id获取子级
    */
    function getChild(pid){//传入父元素的元素来找子元素的pid
        // if(!data[id])return null;
        let arr = [];
        let onOff = false;
        for(let attr in data){
            if (data[attr].pid ===pid) {
                arr.push(data[attr]);
                onOff = true;
            }
        }
        if(onOff){
            return arr;
        }else{
            return null;//这个地方暂时改一下[]
        }
    }

    /*
        通过子 找父    
    */
    // function getParent(pid){
    //     let arr = [];
    //     for(let attr in data){
    //         if(data[attr].id === pid){
    //             arr.push(data[attr]);
    //         }else{
    //             return null;
    //         }
    //     }
    //     if(arr.length === 0){
    //         return null;
    //     }else{
    //         return arr[0];
    //     }
    // }//这个是自己写的，不知道对错

    function getParent(id){
        if(!data[id] || data[id].pid == -1)return null;
        return data[data[id].pid]

    }
 
    function getParents(id){//找父级的父级
        let parentArr = [];
        let now = data[id];
        while(now){
            parentArr.unshift(now);
            now = getParent(now.id);
        }
        return parentArr;
    }

    function targetP(ele,cName){
        if(ele.classList.contains(cName)){
            return true;
        }
        return ele.parentNode.classList.contains(cName);
    }

    function duang(obj1,obj2){//1框，2物体
        let l1 = obj1.offsetLeft;
        let t1 = obj1.offsetTop;
        let b1 = t1 + obj1.offsetHeight;
        let r1 = l1 + obj1.offsetWidth;

        let l2 = obj2.offsetLeft;
        let t2 = obj2.offsetTop-folders.scrollTop;
        let b2 = t2 + obj2.offsetHeight;
        let r2 = l2 + obj2.offsetWidth;
        
        if(r1<l2 || b1 < t2 || l1 > r2 || t1 > b2){
            return false;
        }else{
            return true;
        }
    }


    
    return {
        getChild,
        getParent,
        getParents,
        targetP,
        duang,
    }
})();