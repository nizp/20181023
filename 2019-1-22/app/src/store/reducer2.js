// const state = {
//     num:0
// }
const INCREMENT = "REDUCER2/INCREMENT";  //action的名字是唯一

function reducer2(state={
    num:0
},action){
    switch (action.type) {
        case INCREMENT:
           return {...state,num:++state.num};
        default:
            return state;
    }
}
export default reducer2;