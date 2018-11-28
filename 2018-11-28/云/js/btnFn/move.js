const remove = document.getElementById('remove');
const ok = modelTree.getElementsByClassName('ok')[0];
let kid = 0;
remove.onclick = function(){
    if(!seleEleArr.length){
        console.log('请选择想移动的文件');
    }else{
        modelTree.style.display = 'block';
        content.appendChild(renderTree2(-1,-1));
    }
}

ok.onclick = function(){
    log(kid,seleEleArr)

    /* 
        [{id:321321,pid:0}]

        {id:321321,pid:321321}

    */
    if(seleEleArr.length){
        
        /* 
            把选中的文件夹和他们下面的子级或孙子级都提取出来
            放到一个数组(children)中
        */
        seleEleArr.forEach(e=>{
            children.push(e);
            getChildren(e.id);
        });
        // console.log(children);
        
        /* 
            如果提取出来的数组中的某个数据，包含kid，说明用户把
            选中的文件夹放到了自己或者自己的肚子里去了

            如果没有包含kid说明操作符合逻辑，就应该移动文件夹
        */
        if(!children.some(e=>e.id == kid)){
            seleEleArr.forEach(e=>{
                let arr = getChild(kid);
                if(arr.some(el=>el.title === e.title)){
                    e.title = e.title + '-副本';
                }
                e.pid = kid;
                e.checked = false;
            });



            render(breadNav.getElementsByTagName('span')[0].dataset.id*1);
            treeMenu.appendChild(renderTree(-1,-1));
        }else{
            console.log('凯文,别瞎搞!');
        }
        children.length = 0;
        modelTree.style.display = 'none';
    }
}
function renderTree2(pid,num){
    content.innerHTML = '';
    let arr = getChild(pid);
    let ul = document.createElement('ul');;
    num++;
    ul.style.paddingLeft = num*5 + "px";
    arr && arr.forEach(e=>{
        let ary = getChild(e.id);
        let li = document.createElement('li');
        li.onclick = function(ev){
            let lis = content.getElementsByTagName('li');
            for(let i=0;i<lis.length;i++){
                lis[i].children[0].style.background = '';
            }
            li.children[0].style.background = '#999';
            kid = e.id;
            ev.cancelBubble = true;
        }
        let div = document.createElement('div');
        div.className = `tree-title ${ary?'tree-ico':''} close`;
        let span = document.createElement('span');
        span.className = `${ary?'open':''}`;
        span.innerHTML = '<i></i>'+ e.title;
        div.appendChild(span);
        li.appendChild(div);
        if(ary){
            li.appendChild(renderTree2(e.id,num));
        }
        ul.appendChild(li);
    });
    return ul;
}


