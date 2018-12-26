import objxyz,{b} from './bbb'; 
import './1.css';   //css报错
console.log('我是aaa');
let {fn2,fn} = objxyz;
console.log(objxyz,b);
console.log('小燕子11111')
// fn();
if(module.hot){
    module.hot.accept(); //都更新  2
}
