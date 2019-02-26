import axios from 'axios';
export function changeon(data){
    return {
        type:"CHANGEON",
        data
    }
}

export function getplay(hash){
    return async function(dispatch){
        let data = await axios.get('/getsing?cmd=playInfo&hash='+hash);
       
        if(data.data){
            dispatch(changeon(data.data))
        }
    }
}


export function addData(url="/api"){
    return async function(dispatch){
        let data = await axios.get(url);
        if(data.data){
            console.log(data.data,111)
            let d = data.data;
            if(url.includes('/rankinfo')){
                d = {
                    rankdata:data.data.songs.list,
                    rankbanner:data.data.info
                }
            }
            console.log(d);
            dispatch({
                type:'ADD_DATA',
                data:d
            })
        }
    }
}


export function changeoff(){
    return {
        type:"CHANGEOFF"
    }
}

