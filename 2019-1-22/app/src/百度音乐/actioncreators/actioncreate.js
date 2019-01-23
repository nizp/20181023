const CHECKED = 'CHECKED';
const CHANGEALL = 'CHANGEALL';
const CCOLLECT = 'CCOLLECT';
const DELE = 'DELE';
export function checked(id,aryn){
    return {
        type:CHECKED,
        id,
        aryn
    }
}

export function checkedAll(onoff,ary){
    return {
        type:CHANGEALL,
        onoff,
        ary
    }
}

export function changeCollect(id){
    return {
        type:CCOLLECT,
        id
    }
}
export function dele(ary){
    return {
        type:DELE,
        ary
    }
}
