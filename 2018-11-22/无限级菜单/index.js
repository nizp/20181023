//渲染数据,递归

function render(data){
    let temp = '';
    //循环数组数据，每循环一次就添加一个li
    data.forEach(d => {
        temp += '<li>';   //'<li>'
        

        /*
            <li> += <span>
                        <h5>一级菜单</h5>
                    </span>

            <li>
                <span>
                    <h5>一级菜单</h5>
                </span>
            
        */
        temp += `
            <span class="${d.child?'add':''}">
                ${d.title}
            </span>`;
        
        if(d.child){
            temp += '<ul>';
                temp += render(d.child);
            temp += '</ul>';
        }  

        /*
            假设条件成立
                <li>
                    <span>
                        <h5>一级菜单</h5>
                    </span>
                    <ul>
                        li
                    </ul>
                
        */

        /*
            假设上面的条件不成立
        temp =  <li>
                    <span>
                        <h5>一级菜单</h5>
                    </span>
                </li>
        */
        temp += '</li>';
    });
    return temp;
}
oUl.innerHTML = render(data);

let lis = document.getElementsByTagName('li');

for(let i=0;i<lis.length;i++){
    lis[i].onclick = function(){
        if(this.children[1]){
            this.children[1].style.display = 'block';
        }
    }
}



console.log(data);
