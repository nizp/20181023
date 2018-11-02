let tools = (function(){
    function $(name){
        return document.querySelectorAll(name);
    }

    function isObjct(type){
        return Object.prototype.toString.call(type) === '[object Object]';
    }

    function add(ele,...cName){ //c b baicai
        cName.forEach(e=>{
            let arr = ele.className.split(' ');
            if(!arr.includes(e)){
                ele.className += ' '+ e;
            }
        });
        // console.log(cName);
        // if(arr.includes(cName))return;
        // ele.className += ' '+ cName;
    }


    return {
        $,
        isObjct,
        add
    }
})();

