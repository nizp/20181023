// console.log('进入folder')
//获取元素
const folderBox = document.getElementsByClassName('folder-content')[0];
const folders = folderBox.getElementsByClassName('folders')[0];
const breadmenu = folderBox.getElementsByClassName('breadmenu')[0];
const checkall = folderBox.getElementsByClassName('checkall')[0].children[0];//i标签 
const breadNav = folderBox.getElementsByClassName('bread-nav')[0];
const fEmpty = folderBox.getElementsByClassName('f-empty')[0]; 

let seleEleArr = [];
const {getChild,getParent,getParents} = myTools;
function render(id){
    folders.innerHTML = '';
    let arr = getChild(id);

    // console.log(arr);
    if(!arr){
        // console.log(111);
        fEmpty.style.display = 'block'; 
    }else{//拿到了对象
        // console.log(333);
        fEmpty.style.display = 'none'; 
        

        arr.forEach((e)=>{
            // console.log(333);
            let div = document.createElement('div');
            div.className = e.checked?'file-item active':'file-item';
            div.dataset.id = e.id;

            let img = new Image;
            img.src ='img/folder-b.png';
            img.alt = '';
            //双击进入子元素，重新渲染
            img.ondblclick = function(){
                // getChild(e.id);
                // data[e.id].checked = false;//双击进去其他层级，当前这层数据的checked的值变为false。

                arr.forEach(e =>{
                    data[e.id].checked = false;//双击进去其他层级，当前这层数据的checked的值变为false。(改变原来的数据)

                })
                checkall.className=''; //每次双击完，清空全选
                
                render(e.id);
                renderMenu(e.id);
            }

            
            // 文件的名字
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = e.title;
            
            //重命名要用的
            let input = document.createElement('input');
            input.type = 'text';
            input.className = 'editor';
           
            //是否选中
            let i = document.createElement('i');
            i.className = e.checked?'checked':'';//none
            i.onclick =function(){
                //显示√，并且元数据发生改变,需要页面渲染一下
                data[e.id].checked = !data[e.id].checked;//
                render(id);

                //每次点击，是否全选进行判断，为了节省性能，在用for循环之前判断当前是否checked，
                if(data[e.id].checked == true){
                    judge(id);//进行全选判断
                    seleEleArr.push(data[e.id]);//每选择上一个，往数组里添加一个
                    console.log(seleEleArr);
               
                }else{
                    checkall.className='';//如果当前不选，全选肯定没有
                    let i = seleEleArr.indexOf(data[e.id])
                    console.log(i);
                    console.log(seleEleArr);
                    seleEleArr.splice(i,1);
                }
                
            }
            //添加元素
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
            //将数据放到folders里边
            folders.appendChild(div);
        })
       
    }
}
render(0);

// 以下函数是对于，全选的判断:如果子元素都选上，则全选，否则无全选
function judge(id){
    console.log('进去i判断')
    let arr = getChild(id);
    let result = arr.every(e=>e.checked == true);
    console.log(result);
    if(result){
        checkall.className='checked';
    }else{
        checkall.className='';        
    }
}



