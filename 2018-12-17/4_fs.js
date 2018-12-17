/* 
    fs.readFile(path,callback);

        callback(error,data)

        当有数据返回data就是读出来的文件。
*/

const fs = require('fs');

// fs.readFile('./www/1.txt',(error,data)=>{
//     if(error){
//         console.log('404');
//     }else{
//         console.log(data.toString());
//     }
// });
try {
    let data = fs.readFileSync('./www/1.txt');
    console.log(data.toString());
} catch (error) {
    
}
console.log(11111);




