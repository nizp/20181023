import * as types from '../actioncreators/actiontype';
const obj = {
    arr:[
            {
                id:0,
                name:'泡沫',
                singer:'邓紫棋',
                checked:false,
                like:false,
                price:1.1,
                num:0
            },
            {
                id:1,
                name:'说爱你',
                singer:'蔡依林',
                checked:false,
                like:false,
                price:8.8,
                num:0
            },
            {
                id:2,
                name:'小燕子喳喳叫',
                singer:'霍营扛把子',
                checked:false,
                like:false,
                price:100,
                num:0
            },
            {
                id:3,
                name:'我不做大哥好多年',
                singer:'回龙观观主',
                checked:false,
                like:false,
                price:10,
                num:0
            },
            {
                id:4,
                name:'福禄娃',
                singer:'压寨小胖',
                checked:false,
                like:false,
                price:99,
                num:0
            },
            {
                id:5,
                name:'我最优秀',
                singer:'立水桥桥长',
                checked:false,
                like:false,
                price:3,
                num:0
            }
    
        ]    
    ,arr2:[]
}

function reducer(state=obj,action){
    switch (action.type) {
        case types.CHECKED:
            let {id,aryn} = action; //id点击的是谁，aryn路由pathname信息
            if(aryn === '/'){
                aryn = 'arr';
            }else if(aryn === '/collection'){
                aryn = 'arr2';
            }
        
            let newState = JSON.parse(JSON.stringify(state));
            newState[aryn].forEach(d => {
                if(d.id === id){
                    d.checked = !d.checked;
                }
            });
            // console.log(newState)
           return newState;
        case types.CHANGEALL:
            let {onoff,route} = action;
            let data = JSON.parse(JSON.stringify(state));
            if(route === '/'){
                route = 'arr';
            }else if(route === '/collection'){
                route = 'arr2';
            }
            data[route].forEach(e=>e.checked=onoff);
            return data;
        case types.CCOLLECT:
            let {id:num} = action;//解构需要收藏的ID
            //深克隆源数据，拿到arr
            let newState2 = JSON.parse(JSON.stringify(state));
            let {arr:ns2Arr,arr2:ns2Arr2} = newState2
            //循环所有的克隆数据，把带与传进来的id对应的数据取反like
            ns2Arr.forEach((d) => {
                if(d.id === num){
                    d.like = !d.like; //设置为收藏或者非收藏
                    //如果like为true，再去看看arr2中里面有没有，如果没有就push
                    if(d.like){ 
                        let dd = {...d};
                        dd.checked = false; //如果在首页先选中，再收藏，不设为false，会导致收藏的数据被选中
                        
                        if(!ns2Arr2.find(e=>e.id === d.id))ns2Arr2.push(dd);
                    }else{
                        //如果like为false。就从arr2中删除
                        ns2Arr2.splice(ns2Arr2.findIndex(e=>e.id===num),1);
                    }
                }
            });
            return newState2;
        case types.DELE:
            let arr3 = [];
            let obj3 = JSON.parse(JSON.stringify(state));
            /*
                先得到收藏里面要删除的数据

                然后循环整个arr，去找到删除的id，把相同的数据的like变为false

                再过滤arr2，把不删除的留下

            */
           //被选中要删除的
           arr3 = obj3.arr2.filter(e=>e.checked);
           
           //把arr中与arr3 一样id的数据给设置为false
           for(let i=0;i<arr3.length;i++){
                obj3.arr.forEach((item) => {
                    if(arr3[i].id === item.id) {
                        item.like = false;
                    }
                });
            }

            //arr4为收藏的
            let arr4 = obj3.arr2.filter(e=>!e.checked);
            obj3.arr2 = arr4;
            return obj3;
        case types.DELE2:
            let darr = JSON.parse(JSON.stringify(state));
            darr.arr = darr.arr.filter(e=>!e.checked);
            return darr;
        default:
            return state;
    }
}
export default reducer;