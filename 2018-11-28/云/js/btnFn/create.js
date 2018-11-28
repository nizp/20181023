const create = document.getElementById('create');
create.onclick = function(){
    console.log(fBox.getBoundingClientRect().top);
    rv = true;
    fEmpty.style.display = 'none';
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
    // console.log(id);
    let div = document.createElement('div');
    let v = ''; //默认的新建文件夹编号
    div.className = 'file-item';

    let img = new Image();
    img.src = 'img/folder-b.png';

    //重命名要用的
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'editor';
    // log(data[id]);
    if(!data[id].num.length){
        data[id].num.push(0);
    }else{
        /*
            [0,1,3]
        */
        // console.log(data[id].num);
        for(let i=0;i<data[id].num.length+1;i++){
            // if(num + 1 != data[id].num[i+1]){}
            if(data[id].num[i] === undefined){
                data[id].num[i] = i;
                v = i;
                break;
            }
        }
    }
    // log(data[id].num);   //[0,1,2,3]
    if(v === 0)v = '';
    input.value = '新建文件夹' + v;

    input.style.display = 'block';

    input.onfocus = function(){
        rv = true;
    }
    //使用取消冒泡，可以继续使用焦点元素
    input.onmousedown = function(ev){
        ev.stopPropagation();
    }
    input.onblur = function(){
        // console.log('失焦')
        let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
        let arr = getChild(id);
        let o = arr && arr.some(e=>e.title == this.value);
        if(o){
            console.log('又重了');
            this.value = '新建文件夹' + v;
            input.select();
            return;
        }

        /*
            如果输入框的内容，不是新建文件夹几，就说明改名字了
            就要把父级数组num中对应的值删除，以便下次创建的时候
            埋坑

            [0,1,2]

        */
        if(this.value != '新建文件夹'+v){   
            delete data[id].num[v];
            v = 'no';
            /* 
                如果修改的名字是新建文件夹 + 数字的，那么
                找到这个数字并且把数字对应数组中的值给填上
                新建文件夹5
                [0,1,2,,,5]
            */
            if(/^新建文件夹\d+$/.test(this.value)){
                let n = this.value.match(/^新建文件夹(\d+)$/)[1]*1;
                data[id].num[n] = n;
                v = n;
            }
        }

        let idn = +new Date;
        if(v==='')v = 0;
        data[idn] = {
            "id": idn,
            "pid": id,
            "title": input.value,
            "type": "file",
            "checked":false,
            "num":[]
        }
        //v只要不是no，就说明没有修改过名字，就应该创建一个create的属性
        if(v !== 'no'){
            data[idn].create = v;
        }
        render(id);
        // console.log('rendert')
        // treeMenu.innerHTML = renderTree(-1,-1);
        treeMenu.appendChild(renderTree(-1,-1));
    }
    let span = document.createElement('span');
    //是否选中
    let i = document.createElement('i');
    i.className = '';
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(i);
    
    folders.appendChild(div);
    input.select();
}
