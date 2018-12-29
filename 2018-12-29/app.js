import './css/1.css';
import './css/2.css'; //import + css路径引入css

const a = 20;
console.log(a);

// if(module.hot){
//     module.hot.accept();
// }

//     let $ = obj; 
//     class Nice {
//         constructor(li,obj){
//             this.li = li;
//             this.obj = obj;
//             this.bg = li.querySelector('.bg');
//             this.txt = li.querySelector('.inputdate');
//             this.btn = li.querySelector('.start');
//             this.spans = li.querySelectorAll('.times span');
//             this.img = li.querySelector('img');
//             this.h5 = li.querySelector('h5');
//             this.price = li.querySelector('.price');
//             this.bigC = li.querySelector('.big-c');
//             this.timer = null;
//         }
//         init(arr,footer,zong){
//             this.img.src = this.obj.img;
//             this.h5.innerHTML = this.obj.txt;
//             this.price.innerHTML = '￥'+ this.obj.price;
//             this.events('onclick');
//             this.sum = arr;
//             this.footer = footer;
//             this.zong = zong;
//         }
//         events(evName){
//             this.btn[evName] = () => {
//                 let date = new Date(this.txt.value);
//                 this.timer = setInterval(()=>{
//                     this.time(date);
//                 },1000);
//             }
//         }
//         time(date){ //未来的时间
//             let s = Math.floor((date - new Date)/1000);
//             if(s < 0){
//                 clearInterval(this.timer);
//                 $.dou(this.li,'left',10,()=>{
//                     this.gaizhang();
//                     setTimeout(()=>{
//                         this.soldOut(this.sum,this.footer);
//                     },35);
//                 });
//             }else{
//                 let h = Math.floor(s/3600);
//                 s%=3600;
//                 let m = Math.floor(s/60);
//                 s%=60;
//                 let str = $.toDou(h) + $.toDou(m) + $.toDou(s);
//                 for(let i=0;i<str.length;i++){
//                     this.spans[i].innerHTML = str[i];
//                 }
//             }
//         }
//         gaizhang(){
//            this.bigC.style.visibility = 'visible';
//            this.bg.style.display = 'block';
//            this.bigC.style.transform = 'scale(1)';
//         }
//     }
    
//     let arr = [
//         {
//             img:'img/1.jpg',
//             txt:'iphone7s plus 炫酷手机',
//             price:8888
//         },
//         {
//             img:'img/2.jpg',
//             txt:'27 英寸配置 Retina 5K显示屏',
//             price:15999
//         },
//         {
//             img:'img/3.jpg',
//             txt:'魅族、锥子、小米 “集”群',
//             price:20000
//         },
//         {
//             img:'img/4.jpg',
//             txt:'iWatch 智能手表不智能',
//             price:5000
//         }

//     ]

//     class SoldOut {
//         constructor(arr){
//             this.list = document.querySelectorAll('#main li');
//             this.footer1 = document.querySelector('#footer1');
//             this.zong = document.querySelector('#zong');
//             this.arr = arr;
//             this.sum = []; //总计
//             this.temp = [];//结构
//         }
//         each(){
//             this.arr.forEach((e,i)=>{
//                 // new Nice(this.list[i],e).init(this.sum,this.footer1,this.zong);
//             });
//         }   
//         soldOut(){
//             this.footer1.innerHTML += `
//                 <ul class="list">
//                     <li class="li1">${this.obj.txt}</li>
//                     <li class="li2">${this.obj.price}</li>
//                     <li class="li3">
//                         <img src="${this.obj.img}">    
//                     </li>
//                 </ul>
//             `;
//             sum.push(this.obj.price);
//             this.zong.innerHTML =  + '大洋';
//         }
//         addSum(){
//             return this.sum.reduce((totol,num)=>totol+=num);
//         }
//         addDom(){
            
//         }

//     }
    
    
