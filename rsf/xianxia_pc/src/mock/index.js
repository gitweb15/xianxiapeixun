const Mock = require("mockjs"); //引入
const url = require("url") 

/*

mock.mock()
参数1：请求地址 选填  url
参数2: 请求类型 选填  type
参数3：数据模板 | 函数    
*/

var data = Mock.mock({
    "data|100":[   //意思是data数组中有100条数据
        {  //这个对象是用来写数据模板的
          "id|+1":0,   //初始值是0每次id都+1
          "goodsName":"@ctitle(3, 5)",   //看官网，这个名字是3-5之间的
          "goodsPrice|+1":100,   //这个类似上面的id一个，只是初始值是从100开始的
          "address":"@county(true)",   //这个是地址，@county(true)  对象的属性值都是mock.mock()提供的方法，直接拿过来用就可以了
          "tel":/^1(3|5|7|8|9)\d{9}$/,   //正则写的电话后面1开头，正则不懂自己去学！！！！！！！！！！！很重要
          "goodsImg":"@image('200x100', '#894FC4', '#FFF', '我爱你...')", // 图片
          "date":'@date("yyyy-MM-dd M:dd:d")',  //时间
          "email":"@email()"  //邮箱
        }
    ]
})


// console.log(data);//打印这Mock.mock() 赋值的内容，直接在终端运行就 可以了
//上面就实现了数据的生成了

//去拦截AJAX
// Mock.mock(/\goods\/goodsList/,"get",function(options){
//   console.log(options);  //
//   console.log(url.parse(options.url,true));
//   console.log(url.parse(options.url,true).query)  //下面会用到
// })

Mock.mock(/\goods\/goodsList/,"get",function(options){
    let {limit,page} = url.parse(options.url,true).query;// 解构赋值，结合上面看就懂了
    // return data.data.slice(0,4);//获取0-4条的数据，在app.vue 中可以打印查看
    return data.data.slice((page-1)*limit,(limit*page)-1)  //data.data是上面的数据，这里获取的是
})

//参数1：是一个rul ，是正则来写的，意思是：/goods/goodsList
// Mock.mock(/\goods\/goodsList/,"post",function(options){
//     console.log(options);
//     let {limit,page} = JSON.parse(options.body);
 
//     // let {limit,page} = url.parse(options.url,true).query;
//     return data.data.slice((page-1)*limit,(limit*page)-1)
// }).