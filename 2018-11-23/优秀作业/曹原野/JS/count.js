class Top {
    constructor(ele){
        this.box = document.getElementsByClassName(ele)[0];
        this.ul = this.box.getElementsByClassName('list')[0];
        this.li = this.ul.getElementsByTagName('li');
    }
    render(){
        let temp = ``;
        shopArr.forEach((e)=>{
            temp += `<li data-price = ${e.price}>
            <i data-press = -1></i>
            <em>0</em>
            <i data-press = 1></i>
            <span>
                单价：<strong>${e.price}元</strong> 小计：<strong>0元</strong>
            </span>
        </li>`
        })
        this.ul.innerHTML = temp;
    }
    count(event){
        this.ul.lis = Array.from(this.li);
        this.ul.lis.forEach((e)=>{
            e.num = 0;
            e.em = e.getElementsByTagName('em')[0];
            e.strong = e.getElementsByTagName('strong')[1];
            e[event] = (ev)=> {
                if(ev.target.nodeName === 'I'){
                    e.num += ev.target.dataset.press*1;
                    if(e.num<0)e.num = 0;
                }
                e.em.innerText = e.num;
                e.strong.innerText = `${e.dataset.price*e.num}元`
            }
        })
    }
}
let a = new Top('box');
a.render();
a.count('onclick');
class Bottom extends Top {
    constructor(ele){
        super(ele);
        this.info = this.box.getElementsByClassName('info')[0];
        this.numEm = this.info.getElementsByTagName('em')[0];
        this.priceEm = this.info.getElementsByTagName('em')[1];
        this.maxEm = this.info.getElementsByTagName('em')[2];
    }
    count(){
        this.ul.onclick = (ev) => {
            this.numEm.num = 0;
            this.priceEm.price = 0;
            if(ev.target.nodeName === 'I'){
                this.ul.lis.forEach((e)=>{
                    this.numEm.num += e.num;
                    this.priceEm.price += parseFloat(e.strong.innerText);
                })
                this.numEm.innerText = this.numEm.num;
                this.priceEm.innerText = this.priceEm.price;
            }
        }
    }
    max(){
        let that = this;
        this.ul.addEventListener('click',function(){
            let arr = [];
            this.lis.forEach((e)=>{
                if(e.num>0&&(!arr.includes(e.dataset.price))){
                    arr.push(e.dataset.price);
                }
            })
            arr.sort((a,b)=>{
                return b-a;
            })
            that.maxEm.innerText = arr[0] ?  arr[0] : 0;
        },false)
    }
}
let b = new Bottom('box');
b.count();
b.max();

//某些方法里的回调函数里的this指向什么，写成箭头函数后指向什么。



