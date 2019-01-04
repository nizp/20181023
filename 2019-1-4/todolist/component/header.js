Vue.component('myhead',{
    template:`
    <header class="header" >
        <h1>todos</h1>
        <input 
            class="new-todo" 
            placeholder="请输入内容" 
            @keyup.13="add"
            v-model="val"
        >
    </header>    
    `,
    data(){
        return {
            val:''
        }
    },
    methods:{
        add(){
            if(this.val){
                this.$emit('adddata',{
                    id:+new Date,
                    txt:this.val,
                    checked:false
                });
                this.val = '';
            }
        }
    }
})