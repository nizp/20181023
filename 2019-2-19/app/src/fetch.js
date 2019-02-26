function jsonp(obj){
    return new Promise((resolve,reject)=>{
        let opt = {
            url:'',
            data:{},
            callback:'callback',
            fnName:('jQuery'+Date.now()+'_'+Math.random()).replace('.','')
        }
       
        
        Object.assign(opt,obj);

        let fnName = opt.fnName;
        
        //随机一个不重名的函数名
        if(window.onOff === undefined) window.onOff = false;
        if(window.onOff === false){
            window.onOff = true;
            opt[fnName] = setTimeout(function(){
                // console.log(1)
                reject('请求超时');
            },10000);
        }
        
        window[fnName] = function (data){ //全局函数
            // opt.success(data);
            clearTimeout(opt[fnName]);
            delete window[fnName];
            window.onOff = false;
            resolve(data);
            console.dir(window);
        }
        

        //把对象转成字符串
        let arr = [];
        opt.data[opt.callback] = fnName;
        for(let attr of Object.keys(opt.data)){
            arr.push( attr + '=' + opt.data[attr]);
        }
        opt.data = arr.join('&'); 
        
        let oS = document.createElement('script');
        oS.src = opt.url + '?'+ opt.data; //+ '&' + opt.callback +'=' + fnName;
        document.getElementsByTagName('head')[0].appendChild(oS);
        oS.remove();
    });
}
export default jsonp;
