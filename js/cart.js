var res = {
    "status":1,
    "result":{
      "totalMoney":109,
      "list":[
        {
          "productId":"600100002115",
          "productName":"黄鹤楼香烟",
          "productPrice":19,
          "productQuantity":1,
          "productImage":"img/goods-1.jpg",
          "parts":[
            {
              "partsId":"10001",
              "partsName":"打火机",
              "imgSrc":"img/part-1.jpg"
            }
          ]
        },
        {
          "productId":"600100002120",
          "productName":"加多宝",
          "productPrice":8,
          "productQuantity":5,
          "productImage":"img/goods-2.jpg",
          "parts":[
            {
              "partsId":"20001",
              "partsName":"吸管",
              "imgSrc":"img/part-2.jpg"
            }
          ]
        },
        {
          "productId":"600100002117",
          "productName":"金装黄鹤楼",
          "productPrice":25,
          "productQuantity":2,
          "productImage":"img/goods-1.jpg",
          "parts":[
            {
              "partsId":"10001",
              "partsName":"打火机-1",
              "imgSrc":"img/part-1.jpg"
            },
            {
              "partsId":"10002",
              "partsName":"打火机-2",
              "imgSrc":"img/part-1.jpg"
            }
          ]
        }
      ]
    },
    "message":""
  }
  
var vm = new Vue({
    el:'#app',
    data:{
        productList:[],
        totalMoney:0,
        checkedAllFlag:false,
        totalPrice:0,
        delFlag:false,
        curProduct:{}
    },
    // 局部过滤器
    filters:{
        formatMoney:function(value){
            return '¥ ' + value.toFixed(2)
        }
    },
    mounted:function(){
        this.$nextTick(function(){
            vm.cartView()
        })      
    },
    methods:{
      // 获取数据
        cartView:function(){
            var _this = this;
            _this.productList = res.result.list;
            _this.totalMoney = res.result.totalMoney;
        },
        // + — 时候改变价格
        changeMoney:function(product,way){
          if(way>0){
            product.productQuantity ++;
          }else{
            product.productQuantity --;
            if(product.productQuantity<1){
              product.productQuantity =1;
            }
          }
          this.calcTotalPrice();
        },
        // 单选 选中一条产品
        selectedProduct:function(item){
          //判断 item 里是否有ischecked这个变量
          if(typeof item.ischecked == 'undefined'){
            // vue全局设置变量
            // Vue.set(item,'ischecked',true);
            // 局部设置变量
            this.$set(item,'ischecked',true)
          }else{
            item.ischecked = !item.ischecked;
          }
          this.calcTotalPrice();
        },
        // 全选和取消全选
        checkedAll(flag){    
          this.checkedAllFlag = flag;
          var _this = this;
          this.productList.forEach(function(item,index){
            if(typeof item.ischecked == 'undefined'){
              _this.$set(item,'ischecked',_this.checkedAllFlag);
            }else{
              item.ischecked = _this.checkedAllFlag;
            }
          })
          this.calcTotalPrice();
        },
        // 计算总价 
        calcTotalPrice:function(){
          var _this = this;
          _this.totalPrice =0;
          this.productList.forEach(function(item,index){
            if(item.ischecked){
              _this.totalPrice += item.productQuantity * item.productPrice;
            }
       
          })
        },
        //删除这条产品
        delProduct:function(){
          var index = this.productList.indexOf(this.curProduct);
          this.productList.splice(index,1);
          this.delFlag =false;
          this.calcTotalPrice();
        },
        // 打开删除确认框
        delConfirm:function(item){
          this.delFlag = true;
          this.curProduct =item;
        }
    }
});
// 全局过滤器 
Vue.filter("money",function(value,type){
    return '¥ '+ value.toFixed(2) + type
})