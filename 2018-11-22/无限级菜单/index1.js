//渲染数据,递归

let temp = '';
data.forEach(d => {
    temp += '<li>';
        
    temp += `
        <span class="${d.child?'add':''}">
            <h5>${d.title}</h5>
        </span>`;
    
    if(d.child){
        temp += '<ul>';
            d.child.forEach(e=>{
                temp += `<li>
                    <span class="${e.child?'add':''}">
                        <h5>${e.title}</h5>
                    </span></li>`

            })
        temp += '</ul>';
    }
            
    temp += '</li>';
});
oUl.innerHTML = temp;


console.log(data);
