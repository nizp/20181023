const obj = {
    arr:[
            {
                id:0,
                name:'泡沫',
                singer:'邓紫棋',
                checked:false,
                like:false
            },
            {
                id:1,
                name:'说爱你',
                singer:'蔡依林',
                checked:false,
                like:false
            },
            {
                id:2,
                name:'小燕子喳喳叫',
                singer:'霍营扛把子',
                checked:false,
                like:false
            },
            {
                id:3,
                name:'我不做大哥好多年',
                singer:'回龙观观主',
                checked:false,
                like:false
            },
            {
                id:4,
                name:'福禄娃',
                singer:'压寨小胖',
                checked:false,
                like:false
            },
            {
                id:5,
                name:'我最优秀',
                singer:'立水桥桥长',
                checked:false,
                like:false
            }
    
        ]    
    ,arr2:[]
}

const CHECKED = 'CHECKED';
const CHANGEALL = 'CHANGEALL';
const CCOLLECT = 'CCOLLECT';
const DELE = 'DELE';
function reducer(state=obj,action){
    switch (action.type) {
        case CHECKED:
            let {id,aryn} = action;
            let newState = JSON.parse(JSON.stringify(state));
            newState[aryn].forEach(d => {
                if(d.id === id){
                    d.checked = !d.checked;
                }
            });
            // console.log(newState)
           return newState;
        case CHANGEALL:
            let {onoff,ary} = action;
            let data = JSON.parse(JSON.stringify(state));
            data[ary].forEach(e=>e.checked=onoff);
            return data;
        case CCOLLECT:
            let {id:num} = action;
            let newState2 = JSON.parse(JSON.stringify(state));
            let arr2 = [];
            newState2.arr.forEach(d => {
                if(d.id === num){
                    d.like = !d.like;
                }
                if(d.like){
                    arr2.push(d);
                }
            });
            newState2.arr2 = arr2;
            return newState2;
        case DELE:
            let {ary:ar} = action;
            let arr3 = [];
            let obj3 = JSON.parse(JSON.stringify(state));
            /*
                先得到收藏里面要删除的数据

                然后循环整个arr，去找到删除的id，把相同的数据变为false

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
        default:
            return state;
    }
}
export default reducer;