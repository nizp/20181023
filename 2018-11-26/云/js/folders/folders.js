/*
    可以获取一些公用的元素
*/
const folderBox = document.getElementsByClassName('folder-content')[0];
const folders = folderBox.getElementsByClassName('folders')[0];
const breadmenu = folderBox.getElementsByClassName('breadmenu')[0];
const checkall = folderBox.getElementsByClassName('checkall')[0];
const breadNav = folderBox.getElementsByClassName('bread-nav')[0];
const fEmpty = folderBox.getElementsByClassName('f-empty')[0];  
const {getChild,addAttr,getParent,getParents,parentArr} = myTools;
const {log,dir} = console;
// addAttr('num',0); //给数据添加属性num，默认为0


function render(id){
    folders.innerHTML = '';
    //有没有子级，没有子级就把暂无文件元素打开
    let arr = getChild(id);
    if(!arr){
        fEmpty.style.display = 'block';
    }else{
        fEmpty.style.display = 'none';
        arr.forEach((e,k) => {
            //文件夹的盒子
            let div = document.createElement('div');
            div.className = e.checked?'file-item active':'file-item';
            // let timer = null;
            // let old = null;
            // div.addEventListener('click',function(ev){
            //     if(!old)old=new Date;
            //     clearTimeout(timer);
            //     timer = setTimeout(()=>{
            //         let now = new Date;
            //         // log((now - old));
            //         //模拟双击，如果点击的结果是下面的范围就为双击
            //         if((now - old) >= 210 && (now - old) <= 450){
            //            render(e.id);
            //            renderMenu(e.id);

            //             //还需要清除这些元素选中的样式
            //            arr.forEach(e=>e.checked=false);
            //         }else{
            //             //单击
            //             data[e.id].checked = !data[e.id].checked;
            //             // log(data);
            //             render(id);
            //         }
            //         old = null;
            //     },200);
            // });


            let img = new Image();
            img.src = 'img/folder-b.png';
            img.ondblclick = function(){
                render(e.id);
                renderMenu(e.id);
                //还需要清除这些元素选中的样式
                arr.forEach(e=>e.checked=false);
            }
    
            //文件的名字
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = e.title;
    
            //重命名要用的
            let input = document.createElement('input');
            input.type = 'text';
            input.className = 'editor';
    
            //是否选中
            let i = document.createElement('i');
            i.className = e.checked?'checked':'';
            i.onclick = function(){
                data[e.id].checked = !data[e.id].checked;
                // log(data);
                render(id);
            }
    
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
        
            folders.appendChild(div);
        });
    }
}

render(0);

console.log(data);

// console.log(getChild(3));