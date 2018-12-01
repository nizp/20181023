const rename = document.getElementById('rename');
rename.onclick = function(){   
    if(!seleEleArr.length){
        alert('没有选');
    }else if(seleEleArr.length > 1){
        alert('只能选一个');
    }else{
        //
        let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
        let arr = getChild(id);
        rv = true;
        //把选中的数据过滤掉，为了重命名的时候，不要重复命名。
        arr = arr.filter(e=>e.title!=seleEleArr[0].title);
        let ele = folders.getElementsByClassName('file-item');
        for(let i=0;i<ele.length;i++){
            // console.log(ele[i].dataset.id)
            /* 
                如果说div的dataset.id 等于 我选中的id
                就获取到了选中对应的元素。
            */
            // if(ele[i].dataset.id == seleEleArr[0].id){
            if(ele[i].classList.contains('active')){
                //span隐藏
                ele[i].children[1].style.display = 'none';
                let txt = ele[i].children[2];
                //input打开
                txt.style.display = 'block';
                //input聚焦
                txt.select();
                let v = txt.value;//改之前的value
                txt.onmousedown = function(ev){
                    ev.cancelBubble = true;
                }
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
                        seleEleArr[0].title = this.value;
                        // data[ele[i].dataset.id].title = this.value;
                        render(id);
                    }
                }
            }
        }

    }
}