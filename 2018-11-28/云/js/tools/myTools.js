let myTools = (function(){

    let children = [];
    /*
        通过父级的id获取子级
    */
    function getChild(pid){
        // if(!data[pid])return null;  //先看当前这个数据有没有，没有直接返回一个null
        let arr = [];
        let onOff = false;
        for(let attr in data){
            if(data[attr].pid === pid){
                arr.push(data[attr]);
                onOff = true;
            }
        }
        if(onOff){
            return arr;
        }else{
            return null;
        }
    }

    function getChildren(pid){
        let arr = getChild(pid);  //有子级
        arr && arr.forEach(e=>{
            children.push(e);
            getChildren(e.id);
        });
    }

    //通过id找pid
    function getParent(id){
        /*
            如果没有id对应的这个数据 或者 当前id数据的pid为-1，说明当前是微云，微云上面没有数据了
        */
        if(!data[id] || data[id].pid ==-1)return null;
        return data[data[id].pid];
    }

    function getParents(id){ //找父级的父级
        let parentArr = [];
        let now = data[id]; //当前的id  [3]
        while(now){//0
            parentArr.unshift(now);// [0,2,3]
            now = getParent(now.id);//null
        }
        return parentArr;
    }


    function addAttr(attr,value){
        for(let k in data){
            if(Array.isArray(value)){
                data[k][attr] = [];
            }else{
                data[k][attr] = value;
            }
           
        }
    }

    function targetP(ele,cName){
        if(ele.classList.contains(cName)){
            return true;
        }
        return ele.parentNode.classList.contains(cName);
    }

    function duang(obj1,obj2){
        let l1 = obj1.offsetLeft;
        let t1 = obj1.offsetTop;
        let b1 = t1 + obj1.offsetHeight;
        let r1 = l1 + obj1.offsetWidth;

        let l2 = obj2.offsetLeft;
        let t2 = obj2.offsetTop - folders.scrollTop;
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
        addAttr,
        getParent,
        getParents,
        targetP,
        duang,
        getChildren,
        children
    }
})();