console.log('进入move');
const remove = document.getElementById('remove');//获取移动按钮的标签
let modaltree = document.getElementsByClassName('modal-tree')[0];//
console.log(modaltree);
let content = modaltree.getElementsByClassName('content')[0];
// console.log(content);
let footer = modaltree.getElementsByClassName('footer')[0];
let iconclose = modaltree.getElementsByClassName('icon_close')[0];//这个是 X 按钮

console.log(iconclose);
let no1 = footer.children[0];//取消按钮
let yes1= footer.children[1];//确定按钮
console.log(yes1);
remove.onclick = function(){
    if(seleEleArr.length == 0){
        alert('请选择文件夹')
    }else{//选中文件夹之后
        modaltree.style.display = 'block';//显示菜单
        // //每次点击，1弹框先清除原来的内容，2将新渲染的dom加载
        content.innerHTML = '';
        content.appendChild(renderTree2(-1, 0));
        console.log(seleEleArr);
        //确定按钮点击
        yes1.onclick = function(){
            let arr = getChild(sid);//获取  li 子元素 title
            // console.log(sid);
            let num = 1;//设置一个num用来判断他最后是0还是1
        
            //如果arr为null，就让它变成[];
            if(arr == null){
                arr = [];
            }
            console.log(arr);
            
            //选中的每一项和 口袋的子集进行比较
            for(let i=0;i<seleEleArr.length;i++){
                // seleEleArr[i].id//移动元素的id
                // getChild(seleEleArr[i].id);
                // data[sid];//口袋
                let arr1 = getChild(seleEleArr[i].id);
                if(arr1 == null){
                    arr1 = [];
                }
                // console.log(getChild(seleEleArr[i].id));
                // console.log(data[sid]);
                let judge = seleEleArr[i].id !== sid && !arr1.includes(data[sid])//没有移动到他自身，或者他的子集上，则为true，否则为false
                num = num*judge;
            }
           

            //循环结束后num有一个值，符合条件为1，不符合为0；
            if(num ==1){//符合条件，每一项的pid 都应该等于 被选择性的id(sid)
                for(let i=0;i<seleEleArr.length;i++){
                    seleEleArr[i].pid = sid;
                    seleEleArr[i].checked = false;//每一项的checked归会为默认的false；

                    /* 这行是刚写的 */
                    let v = seleEleArr[i].title.trim();
                    // console.log(v);// 123
                    // let arr = getChild(sid);//获取 子元素 title
                    // console.log(arr);//现在已经进去了
                    let result = arr.every(e=>e.title != v);//如果子元素中有重复的名字则为false，没有重复项则为true。
                    if(result){//如果没有重复项
                        seleEleArr[i].title = v;
                    }else{//如果有重复项
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
                        seleEleArr[i].title = panduan();//将返回值给
                    }
                    
                    
                }

                

                //重新渲染
                renderMenu(sid);//渲染面包屑
                // console.log(sid)
                render(sid);//渲染主要页面
                tree.appendChild(renderTree(-1, 0));//渲染tree
                //渲染弹框的tree，暂时不用渲染，因为再次弹出的收会渲染，不渲染可节省性能；
                // content.innerHTML = '';
                // content.appendChild(renderTree2(-1, 0));
                seleEleArr.length = 0; //用来框选的数组清零
                arr.length = 0;//li子元素的数组清0；
                modaltree.style.display = 'none';
                // console.log(data);
            }else{//不符合条件
                alert('不能移动到他本身，或他的子集');
            }
          
        }
        //关闭和取消按钮点击，弹框消失
        iconclose.onclick = no1.onclick = function(){
            modaltree.style.display = 'none';
            //重新渲染：1树 2面包屑
            tree.appendChild(renderTree(-1, 0));
            renderMenu(0);
        }
        
    }

}


let sid = null;//用来接收选中的id；
//移动菜单的渲染
function renderTree2(pid, num){
    let arr = getChild(pid);
    num +=5;
    let ul =document.createElement('ul');
    ul.style.paddingLeft =  num + 'px';
    arr && arr.forEach(e => {
        let ary = getChild(e.id);
        let li = document.createElement('li');

        li.onclick = function (ev) {
            let div = this.firstChild;//每个li标签下边的第一个div
            //获取content中的所有div标签，利用for循环清空他们背景色
            let divs =content.getElementsByTagName('div')
            for(let i=0;i<divs.length;i++){
                divs[i].style.background ='';
            }
            //让选中的div 变色
            div.style.background ='skyblue';
            sid = e.id;//每点击一个标签就获取他的id值，并把他给seleEle；
            // console.log(sid);
            // render(e.id);
            // renderMenu(e.id);
            ev.cancelBubble = true;//取消冒泡
        }
        let div = document.createElement('div');
        div.className = `tree-title ${ary?'tree-ico':''}`;

        let span = document.createElement('span');
        span.className = `${ary?'open':''}`;
        span.innerHTML = `<i></i>${e.title}`;
     
        div.appendChild(span);
        li.appendChild(div);
        if (ary) {
            li.appendChild(renderTree2(e.id, num))
        }
        ul.appendChild(li);
    })
    return ul;
    
}