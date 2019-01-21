function reducer2 (state={num:10},action){
    switch (action.type) {
        case "INCREMENT_T":
            let n = Object.assign({},state);
            n.num += action.payload;
            return n;
        default:
            return state;
    }
}
export default reducer2;