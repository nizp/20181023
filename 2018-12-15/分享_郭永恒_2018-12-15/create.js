/* 
    新建文件夹
    新建文件夹1
    新建文件夹2
    新建文件夹3
    新建文件夹4
    ...


    xxx
    xxx1
    xxx2
    xxx3
    xxx4
    ...




let v = '新建文件夹';
let result = arr.every(e=>e.title != v);
let numX = 0;
let v1 = v ;
while(result){
    numX++;
    v = v1 + `(${numX})`;
    let resultX = arr.every(e=>e.title != v);
    result = resultX;
}


  v




//为什么要封装，reName会用到，move也会用到
function fn1(){
    while(){

    }

    return v//把循环结果给函数返回值
}
fn1()；

*/

let v ='新建文件夹';
let arr = getChild(id);//获取 子元素 title
let result = arr.every(e=>e.title != v);//如果子元素中有重复的名字则为false，没有重复项则为true。
console.log(result);
if(result){//输入的文件夹名字不是空字符串的 && 名字不和其他名字相重复的时候，input框隐藏，span显示
    input.value = v; 
    // display();//显示页面,添加数据
    console.log(data);
}else{
    function panduan(){//申明一个判断函数
        //用一个while循环来判断
        let numX = 0;
        let v1 = v ;//将这个值存起来，为结果做准备（结果只要加上 数字就可以了）
        while(!result){//如果没有重复性则进入循环
            numX++;
            v = v1 + `(${numX})`;
            let resultX = arr.every(e=>e.title != v);//如果子元素中有重复的名字则为false，没有重复项则为true。
            result = resultX;
        }
        return v
    }
    // panduan();//进去判断函数，并返回一个不重复的名字
    input.value = panduan();//将返回值给
    // display();//显示页面,添加数据;
}
