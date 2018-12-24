/*
    localhost/sort?select=age&ab=1

    select   age || id
    ab       1  从低到高
             2  从高到低   
    {code:0,data:[]}  把排序完的数据传给前端
*/
const ex = require('express');
const route = ex.Router();
let obj = {
    code:0,
    msg:'成功'
}
route.get('/',(req,res)=>{
    let data = [...req.sql]; //不能操作原始数据
    let {select,ab} = req.query;

    /*
        1.下面的代码可以简写
        2.总数据改了，因为操作的是原始数据（操作的数据和源数据一样）
    */

   if(ab === '1'){
        data.sort((a,b)=>{ 
            return a[select] - b[select]
        });
    }else if(ab === '2'){
        data.sort((a,b)=>{ 
            return b[select] - a[select]; 
        });
    }else{
        obj.code = 3;
        obj.msg = '参数错误';
        res.status(400);
        res.send(obj);
    }
    obj.data = data;
    console.log(data,req.sql);
    res.send(obj);

    //说明按照编号来排序 
    // if(select === 'id'){
    //     if(ab === '1'){
    //         data.sort((a,b)=>{ //坑？
    //             return a.id - b.id
    //         });
    //     }else if(ab === '2'){
    //         data.sort((a,b)=>{ //坑？
    //             return b.id - a.id; 
    //         });
    //     }else{
    //         obj.code = 3;
    //         obj.msg = '参数错误';
    //         res.send(400,obj);
    //     }
    // }else if(select === 'age'){
    //     if(ab === '1'){
    //         data.sort((a,b)=>{ //坑？
    //             return a.age - b.age
    //         });
    //     }else if(ab === '2'){
    //         data.sort((a,b)=>{ //坑？
    //             return b.age - a.age; 
    //         });
    //     }else{
    //         obj.code = 3;
    //         obj.msg = '参数错误';
    //         res.send(400,obj);
    //     }
    // }
    // obj.data = data;
    // console.log(obj);
    // res.send(obj);

});

module.exports = route;

