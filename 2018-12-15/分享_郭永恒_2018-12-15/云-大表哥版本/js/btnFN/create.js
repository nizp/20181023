console.log('进入creat');
const create = document.getElementById('create');
let num1 = 0;//用于新建文件夹的重名
create.onclick = function(ev){
    // console.log('1111')
    ev.cancelBubble = true;
    // cancelBubble
    judgeRename = false;//写上这个开关，从而可以让input框可以失焦，不然不会失焦。
    //页面渲染：
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1//获取父 id（用来找子）；
    let div = document.createElement('div');
    div.className = 'file-item';
    let img = document.createElement('img');
    img.src = 'img/folder-b.png';
    let span = document.createElement('span');
    span.className="folder-name";
    span.style.display = 'none';

    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'editor';
    input.style.display = 'block';

    let i = document.createElement('i');
    i.className = '';
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(i);
    // console.log(div);

    folders.appendChild(div);
    input.value = '新建文件夹';
    let v1 = input.value;
    input.select();
   
    input.focus = function(){//聚焦事件：聚焦时候，输入框的内容为空
        console.log('聚焦');
        input.value = '新建文件夹';
        
       
    };
    let v = '新建文件夹';

    input.oninput = function(){//输入的时候
        console.log('输入');
        v = this.value.trim();
    }
    // console.log(v);

    input.onclick = function(){//点击的时候聚焦
        input.focus();
    }


    //失去焦点事件
    input.onblur = function(){
        let arr = getChild(id);//获取 子元素 title
        let result = arr.every(e=>e.title != v);//如果子元素中有重复的名字则为false，没有重复项则为true。
        console.log(result);
        if(result){//输入的文件夹名字不是空字符串的 && 名字不和其他名字相重复的时候，input框隐藏，span显示
            input.value = v; 
            display();//显示页面,添加数据
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
            display();//显示页面,添加数据
        }

        judgeRename = true;
        // console.log(data);


        
    }
  
    
    //将页面展示，并创建数据
    function display(){
        span.style.display = 'block';
        span.innerHTML = v;
        input.style.display = 'none';
        
        // 数据的更改：
        let idnew = +new Date;
        data[idnew] = {
            "id": idnew,
            "pid": id,
            "title": input.value,
            "type": "file",
            "checked":false
        }
        console.log(data);
        render(id);//将更新的数据重新渲染到页面上
        tree.appendChild(renderTree(-1, 0));//tree也发变化，需要重新渲染。
    }

   


}
