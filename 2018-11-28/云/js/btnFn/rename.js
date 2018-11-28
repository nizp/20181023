const rename = document.getElementById('rename');
rename.onclick = function(){   
    if(!seleEleArr.length){
        alert('没有选');
    }else if(seleEleArr.length > 1){
        alert('只能选一个');
    }else{
        let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
        let arr = getChild(id);
        rv = true;
        //把选中的项过滤掉。
        arr = arr.filter(e=>e.title!=seleEleArr[0].title);
        let ele = folders.getElementsByClassName('file-item');
        for(let i=0;i<ele.length;i++){
            // console.log(ele[i].dataset.id)
            if(ele[i].dataset.id == seleEleArr[0].id){
                ele[i].children[1].style.display = 'none';
                let txt = ele[i].children[2]
                txt.style.display = 'block';
                txt.select();
                let v = txt.value;
                txt.onblur = function(){
                    if(!this.value.trim()){
                        log('不能为空');
                        this.value = v;
                        txt.select();
                        return;
                    }
                    let o = arr.some(e=>e.title == this.value);
                    if(o){
                        log('重复');
                    }else{
                        data[ele[i].dataset.id].title = this.value;
                        render(id);
                    }
                }
            }
        }

    }
}