import * as types from './actiontype';
export function checked(id,aryn){
    return {
        type:types.CHECKED,
        id,
        aryn
    }
}

export function checkedAll(onoff,route){
    return {
        type:types.CHANGEALL,
        onoff,
        route
    }
}

export function changeCollect(id){
    return {
        type:types.CCOLLECT,
        id
    }
}
export function dele(){
    return {
        type:types.DELE
    }
}
export function dele2(){
    return {
        type:types.DELE2
    }
}

export function addcart(data){
    return {
        type:types.ADDCART,
        data
    }
}
export function increment(id){
    return {
        type:types.INCREMENT,
        id
    }
}

//thunk能够在发起action之前做一次拦截，可以人为判断是否能够发起本次action
export function decrement(id){
    return (dispatch, getState)=>{
        let o = getState().gocart.arr.find(e=>e.id === id);
        // console.log(o)
        if(o.num <= 1){
            return false;
        }
        dispatch({
            type:types.DECREMENT,
            id
        });
    }
}


