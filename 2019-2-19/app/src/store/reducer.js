const initial = {
    onoff:false,  //控制播放器的开关
    hash:'',
    onesong:{}, //一首歌
    data:{} //列表歌曲
}
function reducer (state=initial,action){
    switch (action.type) {
        case "CHANGEON":
            let {data:onesong} = action;
            console.log(onesong);
            return {...state,onoff:true,onesong};
        case "CHANGEOFF":
            return {...state,off:false};
        case "ADD_DATA":
            let {data} = action;
            console.log(data);
            return {...state,data}; 
        default:
            return state;
    }
}
export default reducer;