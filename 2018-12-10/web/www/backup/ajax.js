function ajax(json){
    let opt = {
        url:'',
        data:{},
        success:function(){},
        error:function(){},
        timeout:function(){},
        settime:8000,
        method:'get',
        type:'json'
    }
    Object.assign(opt,json);
    let xhr = new XMLHttpRequest;
    if(opt.method === 'get'){
        //url + '?' + data
        xhr.open('get',opt.url+'?'+queryString(opt.data,true));
        xhr.onreadystatechange = ready;
        xhr.send();
    }else{
        xhr.open('post',opt.url);
        xhr.onreadystatechange =  ready;
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(queryString(opt.data));
    }

    function ready(){
        if(xhr.readyState === 4){
            if(xhr.status >=200 && xhr.status <= 307){
                //成功
                switch(opt.type){
                    case 'json':
                        opt.success(eval('('+ xhr.responseText +')'));
                    break;
                    case 'xml':
                        opt.success(xhr.responseXML);
                    break;
                    default:
                        opt.success( xhr.responseText);
                    break;  
                }
                
            }else{
                //失败
                opt.error({code:xhr.status});
            }
        }
    }

    //超时就执行timeout
    xhr.timeout = opt.settime;
    xhr.ontimeout = function(){
        opt.timeout();
    }
}

function queryString(data,onOff){
    /*
        {bbs:123,xx:321,cache:321321321}
    */
    let arr = [];
    if(onOff)data.cache = +new Date;
    for(let attr in data){
        arr.push(attr +'='+ (onOff?encodeURI(data[attr]):data[attr]));
    }
    console.log(arr);
    return arr.join('&');
}