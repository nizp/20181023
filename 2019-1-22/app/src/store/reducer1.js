function reducer1(state=0,action){
    switch (action.type) {
        case "ADD":
            console.log('出发了');
            state ++;
           return state;
        default:
            return state;
    }
}
export default reducer1;