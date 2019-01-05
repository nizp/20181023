Vue.component('myfooter',{
    template:`
        <footer class="footer">
            <span class="todo-count">
                <strong>{{n}}</strong>
                <span>条未选中</span>
            </span>
            
           
            <ul class="filters">
                <li v-for="(val,key) in btns">
                    <a 
                        :href="val.hash" 
                        :class="{selected:val.hash.substring(1) == cn}"
                        
                    >{{val.name}}</a>
                </li>
            </ul>
        </footer>
    `,
    props:['n','cn'],
    data(){
        return {
            num:'#/all',
            btns:[
                {
                    hash:'#/all',
                    name:'全部'
                },
                {
                    hash:'#/unchecked',
                    name:'未选中'
                },
                {
                    hash:'#/checked',
                    name:'已选中'
                }
            ]
        }
    }
});