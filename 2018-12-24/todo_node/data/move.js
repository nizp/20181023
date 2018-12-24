const ex = require('express');
const route = ex.Router();
/* 
    localhost/move?type=down|up&id=9
*/

route.get('/',(req,res)=>{
    let obj = {
        code:0,
        msg:'移动成功'
    }
    let {type,id} = req.query;
    let data = req.sql;
    let index = data.findIndex(e=>e.id == id);
    switch(type){
        //向下
        case 'down':
            //下一个
            let index2 = index + 1;
            //看看数组中到底有没有下一个，没有下一个，就不用换位置
            if(data[index2]){
                let d = data[index];
                // data.splice(index,1,data[index2]);//[2,1]
                // data.splice(index2,1,d);
                data[index] = data[index2];
                data[index2] = d;
                obj.data = data;
            }else{
                obj.code = 5;
                obj.msg = '我还是有底线的';
            }
        break;
        case 'up':
            let index3 = index - 1;
            //有上一个
            if(data[index3]){
                let d = data[index];
                data[index] = data[index3];
                data[index3] = d;
                obj.data = data;
            }else{
                obj.code = 5;
                obj.msg = '你是大王!';
                console.log('大王');
            }
        break;
    }
    res.send(obj);
});


module.exports = route;