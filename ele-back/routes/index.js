var express = require('express');
var router = express.Router();
var https = require('https');
var async = require('async');
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/project';
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//登陆验证
router.post("/user", function (req, res, next) {
  console.log(req.body)
  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      console.log('链接数据库失败');
      res.send({ status: 110, data: '链接数据库失败' })
    } else {
      var conn = db.collection('users');
      async.series([
        function (cb) {
          conn.find(req.body).count(function (err, num) {
            if (err) {
              cb('err', '失败');
            } else {
              if (num > 0) {
                cb('err', { status: 0, data: "允许登陆" });

              } else {
                console.log('1111')
                cb();

              }
            };
          });
        },
        function (cb) {
          conn.save(req.body, function (err, info) {
            if (err) {
              console.log(err);
              cb('err', '添加失败');
              // res.send({status:999,data:'添加失败'})
            } else {
              cb(null, { status: 2, data: '注册成功' });
              // res.send({status:0,data:'添加成功'});
            };
          });
        },
      ], function (err, result) {
        if (err) {
          res.send(result);
        } else {
          result.shift()
          res.send(result);
        }
        db.close();
      })
    }

  })

})

//店铺列表页

router.get('/food', function (req, res, next) {
  var shouArr;
  console.log(req.query.offset)
  https.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude='+ req.query.latitude +'&longitude='+ req.query.longitude +'&keyword=&offset='+ req.query.offset +'&limit=20&extras[]=activities&restaurant_category_ids[]=209&restaurant_category_ids[]=211&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=218&restaurant_category_ids[]=219&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=263&restaurant_category_ids[]=264&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269', function (message) {
    var data = '';
    message.on('data', function (chunk) {
      data += chunk;
    });
    message.on('end', function () {
      // console.log(data);
      shopArr = JSON.parse(data);
      for (var i = 0; i < shopArr.length; i++) {
        if (shopArr[i].image_path.substr(shopArr[i].image_path.length - 3, 3) === 'png') {
          shopArr[i].image_path = shopArr[i].image_path.substr(0, 1) + '/' + shopArr[i].image_path.substr(1, 2) + '/' + shopArr[i].image_path.substr(3) + '.png'
        } else {
          shopArr[i].image_path = shopArr[i].image_path.substr(0, 1) + '/' + shopArr[i].image_path.substr(1, 2) + '/' + shopArr[i].image_path.substr(3) + '.jpeg'
        };
      }
      res.send(shopArr);
    })
  })
})
//店铺分类
router.get('/foodlei', function (req, res, next) {
  var list;
  
  https.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude='+ req.query.latitude +'&longitude='+ req.query.longitude +'&keyword=&offset=' + req.query.offset + '&limit=20&extras[]=activities&restaurant_category_ids[]=' + req.query.id, function (message) {

    var data = ''
    message.on('data', function (chunk) {
      data += chunk;
    });

    message.on('end', function () {
      list = JSON.parse(data)
      for (var i = 0; i < list.length; i++) {
        if (list[i].image_path.substr(list[i].image_path.length - 3, 3) === 'png') {
          list[i].image_path = list[i].image_path.substr(0, 1) + '/' + list[i].image_path.substr(1, 2) + '/' + list[i].image_path.substr(3) + '.png'
        } else {
          list[i].image_path = list[i].image_path.substr(0, 1) + '/' + list[i].image_path.substr(1, 2) + '/' + list[i].image_path.substr(3) + '.jpeg'
        }
      }
      res.send(list);
    })
  })
})
// 店铺筛选
router.get('/foodfilter', function (req, res, next) {
  var list;
  https.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude='+ req.query.latitude +'&longitude='+ req.query.longitude +'&keyword=&offset=' + req.query.offset + '&limit=20&extras[]=activities&order_by=' + req.query.order, function (message) {

    var data = ''
    message.on('data', function (chunk) {
      data += chunk;
    });

    message.on('end', function () {
      list = JSON.parse(data)
      for (var i = 0; i < list.length; i++) {
        if (list[i].image_path.substr(list[i].image_path.length - 3, 3) === 'png') {
          list[i].image_path = list[i].image_path.substr(0, 1) + '/' + list[i].image_path.substr(1, 2) + '/' + list[i].image_path.substr(3) + '.png'
        } else {
          list[i].image_path = list[i].image_path.substr(0, 1) + '/' + list[i].image_path.substr(1, 2) + '/' + list[i].image_path.substr(3) + '.jpeg'
        }
      }
      res.send(list);
    })
  })
})
//店铺列表筛选
router.get('/foodfind', function (req, res, next) {
  var listLei;
  https.get('https://mainsite-restapi.ele.me/shopping/v2/restaurant/category?latitude='+ req.query.latitude +'&longitude='+req.query.longitude, function (message) {

    var data = ''
    message.on('data', function (chunk) {
      data += chunk;
    });

    message.on('end', function () {
      listLei = JSON.parse(data)

      for (var i = 1; i < listLei.length; i++) {
        for (var j = 0; j < listLei[i].sub_categories.length; j++) {
          if (listLei[i].sub_categories[j].image_url.substr(listLei[i].sub_categories[j].image_url.length - 3, 3) === 'png') {
            listLei[i].sub_categories[j].image_url = listLei[i].sub_categories[j].image_url.substr(0, 1) + '/' + listLei[i].sub_categories[j].image_url.substr(1, 2) + '/' + listLei[i].sub_categories[j].image_url.substr(3) + '.png'
          } else {
            listLei[i].sub_categories[j].image_url = listLei[i].sub_categories[j].image_url.substr(0, 1) + '/' + listLei[i].sub_categories[j].image_url.substr(1, 2) + '/' + listLei[i].sub_categories[j].image_url.substr(3) + '.jpeg'
          }
        }
      }
      // console.log(listLei[1]) 
      res.send(listLei);
    })
  })
})
// 店铺列表页筛选信息
router.get('/foodsai', function (req, res, next) {
  var listSai
  https.get('https://mainsite-restapi.ele.me/shopping/v1/restaurants/activity_attributes?latitude='+ req.query.latitude +'&longitude='+ req.query.longitude +'&kw=', function (message) {

    var data = ''
    message.on('data', function (chunk) {
      data += chunk;
    });

    message.on('end', function () {
      listSai = JSON.parse(data)
      res.send(listSai);
    })
  })
})

// 获取店铺商品列表
router.get('/detail',function(req,res){
  var id=req.query.id;
  https.get('https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id='+id,function(response){
    var data='';
    response.on('data',function(chunk){
      data+=chunk;
    })
    response.on('end',function(){
      res.send(data);
    })
  })
})

// 获取店铺信息
router.get('/detail/shop',function(req,res){
  var id=req.query.id;
  var x=req.query.x;
  var y=req.query.y;
  https.get('https://mainsite-restapi.ele.me/shopping/restaurant/'+ id+'?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude='+x+'&longitude='+y,function(response){
    var data='';
    response.on('data',function(chunk){
      data+=chunk;
    })
    response.on('end',function(){
      res.send(data);
    })
  })
})

// 获取店铺评论分类
router.get('/detail/tags',function(req,res){
  var id=req.query.id;
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings/tags',function(response){
    var data='';
    response.on('data',function(chunk){
      data+=chunk;
    })
    response.on('end',function(){
      res.send(data);
    })
  })
})

// 获取店铺评论
router.get('/detail/comment',function(req,res){
  var id=req.query.id;
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings?has_content=true&offset=0&limit=10',function(response){
    var data='';
    response.on('data',function(chunk){
      data+=chunk;
    })
    response.on('end',function(){
      res.send(data);
    })
  })
})

//获取店铺分类评论
router.get('/detail/comments',function(req,res){
  var id=req.query.id;
  var offset=req.query.offset;
  var type=encodeURIComponent(req.query.type);
  console.log(type);
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings?has_content=true&tag_name='+type+'&offset='+offset+'&limit=10',function(response){
    var data='';
    response.on('data',function(chunk){
      data+=chunk;
    })
    response.on('end',function(){
      res.send(data);
    })
  })
})

//获取店铺评分
router.get('/detail/scores',function(req,res){
  var id=req.query.id;
  https.get('https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings/scores',function(response){
    var data='';
    response.on('data',function(chunk){
      data+=chunk;
    })
    response.on('end',function(){
      res.send(data);
    })
  })
})

// 首页获取位置信息
router.get('/position', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=' + latitude +'&longitude=' + longitude, function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
});

// 首页获取天气信息
router.get('/weather', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/bgs/weather/current?latitude=' + latitude +'&longitude=' + longitude, function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 首页获取热搜数据
router.get('/hot', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=' + latitude +'&longitude=' + longitude, function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 首页请求轮播数据
router.get('/entries', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=' + latitude +'&longitude=' + longitude + '&templates[]=main_template', function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 首页获取商家列表
router.get('/restaurants', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  var offset = req.query.offset;
  var limit = req.query.limit;
  https.get('https://mainsite-restapi.ele.me/shopping/restaurants?latitude=' + latitude + '&longitude=' + longitude + '&offset=' + offset + '&limit=' + limit + '&extras[]=activities&terminal=h5', function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 首页选择地址的请求
router.get('/searchPoi', function(req, res) {
  // 需要给输入框输入的文字做转码
  var keyword = encodeURIComponent(req.query.keyword);
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby?keyword=' + keyword + '&offset=0&limit=20&longitude=' + longitude + '&latitude=' + latitude, function (response) {
    console.log(response.statusCode);
    console.log(response.headers);
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
    response.on('error', function (err) {
      console.log(err);
    })
  })
})

// search页获取热搜数据
router.get('/search', function(req, res) {
  var geohash = req.query.geohash
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?geohash=' + geohash + '&latitude=' + latitude +'&longitude=' + longitude, function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 发现页顶部的活动
router.get('/discover', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/member/v1/discover?platform=1&block_index=0&latitude=' + latitude +'&longitude=' + longitude, function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 发现页限时好礼活动数据
router.get('/gifts', function(req, res) {
  https.get('https://mainsite-restapi.ele.me/member/gifts/suggest', function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 获取request_id
router.get('/requestId', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/hotfood/v1/guess/banner?latitude=' + latitude +'&longitude=' + longitude, function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 发现页获取美食热推数据
router.get('/likes', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  var request_id = req.query.request_id;
  https.get('https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude=' + latitude +'&longitude=' + longitude + '&offset=0&limit=3&request_id=' + request_id +'&tag_id=-1&columns=1', function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})

// 发现页获取天天特价数据
router.get('/discount', function(req, res) {
  var latitude = req.query.latitude;
  var longitude = req.query.longitude;
  https.get('https://mainsite-restapi.ele.me/shopping/v1/sale_list_index?type=special_food&latitude=' + latitude + '&longitude=' + longitude + '&params=%7B%22user_id%22%3A256337731%7D', function (response) {
    var data='';
    response.on('data', function (chunk) {
      data += chunk;
    })
    response.on('end', function () {
      res.send(data)
    })
  })
})
// 发现页面专属推荐
router.get('/ulike', function (req, res, next) {
  var list;
  https.get('https://mainsite-restapi.ele.me/hotfood/v1/guess/likes?latitude='+ req.query.latitude +'&longitude='+ req.query.longitude +'&offset='+ req.query.offset +'&limit=10&columns=2&request_id=60164068-be58-4f58-8910-6195500c9f91&tag_id='+ req.query.id +'&extras=%5B%22activities%22%5D', function (message) {
    var data = ''
    message.on('data', function (chunk) {
      data += chunk;
    });

    message.on('end', function () {
      list = JSON.parse(data)
      for (var i = 0; i < list.length; i++) {
        if (list[i].restaurant.image_path.substr(list[i].restaurant.image_path.length - 3, 3) === 'png') {
          list[i].restaurant.image_path = list[i].restaurant.image_path.substr(0, 1) + '/' + list[i].restaurant.image_path.substr(1, 2) + '/' + list[i].restaurant.image_path.substr(3) + '.png'
        } else {
          list[i].restaurant.image_path = list[i].restaurant.image_path.substr(0, 1) + '/' + list[i].restaurant.image_path.substr(1, 2) + '/' + list[i].restaurant.image_path.substr(3) + '.jpeg'
        }
        for (var j = 0; j < list[i].foods.length; j++) {
          if (list[i].foods[j].image_hash.substr(list[i].foods[j].image_hash.length - 3, 3) === 'png') {
            list[i].foods[j].image_hash = list[i].foods[j].image_hash.substr(0, 1) + '/' + list[i].foods[j].image_hash.substr(1, 2) + '/' + list[i].foods[j].image_hash.substr(3) + '.png'
          } else {
            list[i].foods[j].image_hash = list[i].foods[j].image_hash.substr(0, 1) + '/' + list[i].foods[j].image_hash.substr(1, 2) + '/' + list[i].foods[j].image_hash.substr(3) + '.jpeg'
          }
        }
      }
      console.log(list)
      res.send(list);
    })
  })
})
router.get('/uliketop', function (req, res, next) {
  var list;
  
  https.get('https://mainsite-restapi.ele.me/hotfood/v1/guess/banner?latitude=22.5832873&longitude=113.9569793&request_id=53edd455-c6ba-4f21-add6-e4f8c23e9fe0', function (message) {

    var data = ''
    message.on('data', function (chunk) {
      data += chunk;
    });

    message.on('end', function () {
      list = JSON.parse(data)
      res.send(list);
    })
  })
})
module.exports = router;
