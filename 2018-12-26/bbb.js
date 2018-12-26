/*
    ES6导出的方式3种:
        0. export let a = 20;

        1. export {}

        0和1，他们引入的时候都要加{}并且名字必须要和导出的一致，它们可以有多个


        2. export default
        一个文件中只能有一个，并且引入的时候不用加{}，名字还可以随便起。

        


        
*/

let a = 20;
// export default a; //加了default之后，引入的时候名字可以随便起。

export default {
    a,
    fn(){
        alert(1);
    },
    fn2(){
        alert(2);
    }
}

// function fn1(){

// }

let b = 30;
export {b};

