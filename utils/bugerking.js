const app = getApp()
let host = 'http://www.bkchina.cn'
let coupons = null

function getData(callback){
  if(coupons){
    callback && callback(coupons)
  }else{
    app.request({
      url: host+'/discount/discountList',
      method: 'GET',
      success: function(data){
        coupons = formatData(data)
        callback && callback(coupons)
      }
    })
  }
}

function formatData(data){
  let list = []
  for(index in data){
    list.push({
      'id': data[index].FId,
      'img': data[index].FPicMiniUrl,
      'name': '',
      'price': '',
      'time': '',
      'img_big': data[index].FPicUrl
    })
  }
  return [
    {
      "lists":list
    }
  ]
}

module.exports = {
  getData: getData,
  companyName: '汉堡王'
}