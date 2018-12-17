let fs = require('fs');

// fs.writeFile('./www/2.txt','dsnadkjsjdksa',(error)=>{
//     if(error){
//         console.log('失败');
//     }else{
//         console.log('成功');
//     }
// })

fs.unlinkSync('./www/2.txt'); //删除指定的文件