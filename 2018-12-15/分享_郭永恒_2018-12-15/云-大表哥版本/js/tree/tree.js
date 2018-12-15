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
let tree = document.getElementsByClassName('tree-menu')[0];
// let {getChild} = myTools;

// let num = 0;
// function renderTree(pid,num){
//    let arr = getChild(pid);
//    let temp = '';
//    num +=5;
//    arr && arr.forEach(e=>{
//         let ary = getChild(e.id);
//         temp +=`

//             <ul style="padding-left:${num}px">
//                 <li>
//                     <div class="tree-title ${ary?'tree-ico':''} close">
//                         <span><i></i>${e.title}</span>
//                     </div>
//                     ${renderTree(e.id,num)}
//                 </li>
//             </ul>
//         `;
//    })
//    return temp;
// }
// tree.innerHTML = renderTree(-1,num);//这个是用函数写的


let num = 0;

function renderTree(pid, num) {
    // console.log(1)
    // if(!romoveJudge){
        tree.innerHTML = "";
    // }
    
    let arr = getChild(pid);
    // let temp = '';
    num += 5;
    let ul = document.createElement('ul');
    ul.style.paddingLeft = num + 'px';
    arr && arr.forEach(e => {
        let ary = getChild(e.id);
        let li = document.createElement('li');
        li.onclick = function (ev) {
            // console.log(e.id)
            render(e.id);
            renderMenu(e.id);
            console.log(data);
            ev.cancelBubble = true;
        }
        let div = document.createElement('div');
        div.className = `tree-title ${ary?'tree-ico':''}`;

        let span = document.createElement('span');
        span.className = `${ary?'open':''}`;
        span.innerHTML = `<i></i>${e.title}`;
        span.onclick = function () {
            let ul = this.parentNode.nextElementSibling;
            if (ary && !span.classList.toggle('open')) { //移除open 返回false，再true。添加open，返回true，再成为false
                if (ul) {
                    ul.style.display = 'none';
                }
            } else {
                // console.log('124')
                if (ul) {
                    ul.style.display = 'block';
                }
            }
        }
        div.appendChild(span);
        li.appendChild(div);
        if (ary) {
            li.appendChild(renderTree(e.id, num))
        }
        ul.appendChild(li);
    })
    return ul;
}

tree.appendChild(renderTree(-1, num));
// tree.innerHTML = '1';
// console.log(tree.innerHTML);