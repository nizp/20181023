const treeMenu = document.getElementsByClassName('tree-menu')[0];

let { getChildren,children} = myTools;

// let num = 10;
// function fn(n){
//     n++;
//     console.log(n);
// }
// fn(num);
// console.log(num);


// function renderTree(pid,num){
//     console.log(data);
//     let arr = getChild(pid);
//     let temp = '';
//     num++;
//     arr && arr.forEach(e=>{
//         let ary = getChild(e.id);
//         temp += `
//             <ul style="padding-left:${num*10}px">
//                 <li>
//                     <div class="tree-title ${ary?'tree-ico':''} close">
//                         <span class="${ary?'open':''}"><i></i>${e.title}</span>
//                     </div>
//                     ${renderTree(e.id,num)}
//                 </li>
//             </ul>
//         `;
//     });
//     return temp;
// }

function renderTree(pid,num){
    treeMenu.innerHTML = '';
    let arr = getChild(pid);
    let ul = document.createElement('ul');;
    num++;
    ul.style.paddingLeft = num*5 + "px";
    arr && arr.forEach(e=>{
        let ary = getChild(e.id);
        let li = document.createElement('li');
        li.onclick = function(ev){
            console.log(e.id);
            render(e.id);
            renderMenu(e.id);
            ev.cancelBubble = true;
        }
        let div = document.createElement('div');
        div.className = `tree-title ${ary?'tree-ico':''} close`;
        let span = document.createElement('span');
        span.className = `${ary?'open':''}`;
        span.innerHTML = '<i></i>'+ e.title;
        span.onclick = function(){
            let ul = this.parentNode.nextElementSibling;
            if(ary && !span.classList.toggle('open')){
                if(ul){
                    ul.style.display = 'none';
                }
            }else{
                if(ul){
                    ul.style.display = 'block';
                }
            }
        }
        div.appendChild(span);
        li.appendChild(div);
        if(ary){
            li.appendChild(renderTree(e.id,num));
        }
        ul.appendChild(li);
    });
    return ul;
}

treeMenu.appendChild(renderTree(-1,-1));


/* 
    <li>
        <div class="tree-title tree-ico close">
            <span><i></i>微云</span>
        </div>
        <ul>
            <li>
                <div class="tree-title tree-ico close">
                    <span><i></i>我的音乐</span>
                </div>
            </li>
        </ul>
    </li>
*/


