var res = {
    "status":0,
    "message":"",
    "result":[
      {
        "addressId":"100001",
        "userName":"JackBean",
        "streetName":"北京市朝阳区朝阳公园1",
        "postCode":"100001",
        "tel":"12345678901",
        "isDefault":true
      },
      {
        "addressId":"100002",
        "userName":"JackBean",
        "streetName":"北京市朝阳区朝阳公园2",
        "postCode":"100001",
        "tel":"12345678901",
        "isDefault":false
      },
      {
        "addressId":"100003",
        "userName":"JackBean",
        "streetName":"北京市朝阳区朝阳公园3",
        "postCode":"100001",
        "tel":"12345678901",
        "isDefault":false
      },
      {
        "addressId":"100004",
        "userName":"JackBean",
        "streetName":"北京市朝阳区朝阳公园4",
        "postCode":"100001",
        "tel":"12345678901",
        "isDefault":false
      },
      {
        "addressId":"100005",
        "userName":"JackBean",
        "streetName":"北京市朝阳区朝阳公园5",
        "postCode":"100001",
        "tel":"12345678901",
        "isDefault":false
      }
    ]
  }
var vm =new Vue({
    el:'.container',
    data:{
        addressList:[],
        limitNum:3,
        currentIndex:0,
        shippingMethod:1
    },
    mounted() {
        this.$nextTick(function(){
            this.getAddressList();
        })
    },
    computed:{
        filterAddressList:function(){
            return this.addressList.slice(0,this.limitNum)
        }
    },
    methods:{
        getAddressList:function(){
            this.addressList = res.result;
        },
        setDefault:function(addressId){
            this.addressList.forEach(function(item,index){
                if(item.addressId == addressId){
                    item.isDefault = true;
                }else{
                    item.isDefault = false;
                }
            })
        },
        loadMore:function(){
            if(this.limitNum == 3){
                this.limitNum = this.addressList.length;
            }else{
                this.limitNum =3;
            }
        }
    }
})