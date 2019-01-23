import * as types from '../actioncreators/actiontype';
const obj = {
    arr:[],
    sum:0,//总数
    total:0//总价格
}
function gocart(state=obj,action){
    let {type,data,id} = action;
    let arr = null;
    let a = {};
    let o = {};
    switch (type) {
        case types.ADDCART:
            arr = [...state.arr];
            if(!arr.find(e=>e.id===data.id)){
                arr.push(data);
            }
            // console.log(arr);
            return {...state,arr};
        case types.INCREMENT :
                arr = [...state.arr];
                o = arr.find(e=>e.id===id);
                o.num ++;
                a = arr.reduce((prev,next)=>{
                    return {
                        sum:prev.sum + next.num,
                        total:prev.total + next.price * next.num,
                    }
                },{sum:0,total:0});
                console.log(a);

            return {...state,arr,...a};
        case types.DECREMENT : //???
            arr = [...state.arr];
            o = arr.find(e=>e.id===id);
            if(o.num > 1){
                o.num --;
            }
            a = arr.reduce((prev,next)=>{
                return {
                    sum:prev.sum + next.num,
                    total:prev.total + next.price * next.num
                }
            },{sum:0,total:0});
            console.log('发起了');
            return {...state,arr,...a};
        default:
            return state;
    }
}
export default gocart;