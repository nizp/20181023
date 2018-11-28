const kuang = folderBox.getElementsByClassName('kuang')[0];
let {duang} = myTools;
let rv = false;
folders.addEventListener('mousedown',function(ev){
    //应该在点到重命名的时候让它有默认行为，点到别的地方就让它没有默认行为。
    ev.returnValue = rv;  //false阻止了，true就是没有阻止
    // console.log(rv)
    rv = false;
    
    
    //如果down的时候点中了文件夹，就不能让选框出来。
    if(targetP(ev.target,'file-item'))return;
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
    let {left,top} = fBox.getBoundingClientRect();
    let fileItem = folders.getElementsByClassName('file-item');
    let arr = getChild(id);
   
    //点空白处，清除所有的选中
    for(let i=0;i<fileItem.length;i++){
        fileItem[i].classList.remove('active');
        if(fileItem[i].children[3] ){
            fileItem[i].children[3].className = '';
        }
        checkall.className = '';
      
        if(arr && arr[i]){
            console.log(arr);
            arr[i].checked = false; //在down的时候把所有的数据checked设置为false
        }
    }
    seleEleArr.length = 0; 

    let disX = ev.pageX - left;
    let disY = ev.pageY - top;
    kuang.style.display = 'block';
    kuang.style.left = disX + 'px';
    kuang.style.top = disY + 'px';

    let move = function(ev){
        // ev.preventDefault();
        //在拖拽的时候，按下的点和移动的点比，哪边小left和top值就走哪边
        let l = ev.pageX - disX;
        let t = ev.pageY - disY;
        //每次move的时候都把数组清空，为了重新收集被碰撞的元素。
        seleEleArr.length = 0; 

        kuang.style.width = Math.abs(l - left) + 'px';
        kuang.style.height = Math.abs(t - top) + 'px';

        /*
            在拖拽的时候，循环所有的文件夹，进行碰撞
            如果被碰撞到
                1、改变文件夹的class为active
                2、打钩
                3、把碰撞到的元素对应的数据id存起来
                4、把碰撞到的元素对应的数据中的checked设置为true

            如果被碰到
                1、删除文件夹的active
                2、取消打钩
                3、把没碰撞到的元素对应的数据中的checked设置为false
                

        */
        for(let i=0,len = fileItem.length;i<len;i++){
            if(duang(kuang,fileItem[i])){

                fileItem[i].classList.add('active');
                fileItem[i].children[3].className = 'checked';
                seleEleArr.push(data[fileItem[i].dataset.id*1]);

                console.log(seleEleArr)

                data[fileItem[i].dataset.id*1].checked = true;
            }else{
                fileItem[i].classList.remove('active');
                fileItem[i].children[3].className = '';
                if(data[fileItem[i].dataset.id*1]){
                    data[fileItem[i].dataset.id*1].checked = false;
                }
                
            }
        }
       // 如果碰撞元素的个数和页面中的文件夹个数相等，说明全选
        checkall.className = (seleEleArr.length == fileItem.length)?'checked':'';

        kuang.style.left = Math.min(disX,ev.pageX - left) + 'px';
        kuang.style.top = Math.min(disY,ev.pageY - top) + 'px';
    }   

    let up = function(){
        kuang.style.width = kuang.style.height = 0;
        kuang.style.display = 'none';
       
        document.removeEventListener('mousemove',move);
        document.removeEventListener('mouseup',up);
    }
    document.addEventListener('mousemove',move);
    document.addEventListener('mouseup',up);
    
});

/*
    点击全选的时候:

*/
checkall.onclick = function(){

    // let ele = folders.getElementsByClassName('file-item')
    // this.classList.toggle('checked');
    // for(let i=0;i<ele.length;i++){
    //     ele[i].className = this.classList.contains('checked')?'file-item active':'file-item';
    //     ele[i].children[3].className = this.classList.contains('checked')?'checked':'';
    // }

   
    //获取span的id
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
    //通过获取的id去找这个id下的子级数据
    let arr = getChild(id);
    this.classList.toggle('checked'); //点的时候切换checked

    //循环子级数据，把子级数据的checked变成和checkall的class一致的布尔值
    arr && arr.forEach(e=>{
        e.checked = this.classList.contains('checked');
    });
    //因为上面的代码已经把数据给变了，所以render之后，页面的展示效果跟数据走
    render(id);

}
