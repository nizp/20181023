Vue.component('list',{
    template:`
        <ul class="todo-list">
            <li 
                v-for="(val,key) in ary"
                :class="{completed:val.checked}" 
                
            >
                <div class="view">
                    <input 
                        class="toggle" 
                        type="checkbox" 
                        v-model="val.checked"
                    >
                    <label>{{val.txt}}</label>
                    <button 
                        class="destroy"
                        @click="rm(val.id)"
                    ></button>
                </div>
                <input class="edit" :value="val.txt">
            </li>
        </ul>
    `,
    props:['ary'],
    methods:{
        rm(id){
            this.$emit('rmdata',id);
        }
    }
});