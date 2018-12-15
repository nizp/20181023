/*
    面包屑
*/

function renderMenu(id){//面包屑的渲染
    breadNav.innerHTML = '';//每次渲染，面包屑清空
   
    let arr = getParents(id);
    let arr2 = getChild(id);
    if(arr){
        arr.forEach((e,i,all)=>{
            if(i != all.length -1){
                let a = document.createElement('a');
                a.href = 'javascript:;';
                a.innerHTML = e.title;
                a.onclick = function(){
                    arr2 && arr2.forEach(e=>e.checked = false); 
                    checkall.className = '';
                    render(e.id);
                    renderMenu(e.id);
                }
                breadNav.appendChild(a);
            }else{
                let span = document.createElement('span');
                span.innerHTML = e.title;
                span.dataset.id = e.id;//这个容易绕晕，看清是id还是
                // console.log(span.dataset.id);
                breadNav.appendChild(span);

            }
        })
    }
}

renderMenu(0);

// 点击全选按钮，点上，全选，子元素也被选上；否则，反之；
checkall.onclick = function(){
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1//获取id，这个忘了×1
    // console.log(id);
    let arr = getChild(id);
    if(checkall.className == 'checked'){//点击之后，取消全选，数据也随之变化
        checkall.className = '';
        arr.forEach(e=>e.checked = false)
        console.log(arr);
        render(id);//改变完数据之后，进行渲染
    }else{//点击之后，变为选上，数据也随之变化
        checkall.className = 'checked';
        arr.forEach(e=>e.checked = true)
        // console.log(arr);
        render(id);//改变完数据之后，进行渲染，表现到页面上
    }
}




