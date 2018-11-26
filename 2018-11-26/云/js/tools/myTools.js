let myTools = (function(){
    /*
        通过父级的id获取子级
    */
    function getChild(pid){
        if(!data[pid])return null;  //先看当前这个数据有没有，没有直接返回一个null
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

    //通过id找pid
    function getParent(id){
        if(!data[id] || data[id].pid ==-1)return null;
        return data[data[id].pid];
    }

    function getParents(id){ //找父级的父级
        let parentArr = [];
        let now = data[id]; //当前的id  [3]
        while(now){
            parentArr.unshift(now);
            now = getParent(now.id);
        }
        return parentArr;
    }


    function addAttr(attr,value){
        for(let k in data){
            data[k][attr] = value;
        }
    }

    return {
        getChild,
        addAttr,
        getParent,
        getParents
    }
})();