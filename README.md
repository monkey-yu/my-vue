该项目是本地项目。项目学习来源于慕课网的课程。

知识点罗列：

1.v-bind:class="{'check':item.ischecked}"

2.click两种写法： @click   v-on:click 

3.过滤器的使用 {{item.productPrice | formatMoney}}

4.  局部过滤器
    filters:{
        formatMoney:function(value){
            return '¥ ' + value.toFixed(2)
        }
    },
    
5. 生命周期钩子 mounted:function(){
        this.$nextTick(function(){
           // some code here
        })      
    }
    mounted在整个实例中只执行一次。
    
6.判断一个变量是否在数据中， typeof item.ischecked == 'undefined' 表示item中不存在ischecked变量。

7.数组中删除一项，可以用splice.   
    this.productList.splice(index,1);
    
8.全局过滤器 Vue.filter("filterFuncName",function(){})

完成后可以算是Vue学习的初级水平

已练习完成。zhaoyu 