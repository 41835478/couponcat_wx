const app = getApp()
let host = 'http://www.bkchina.cn'
let coupons = wx.getStorageSync('bugerking')

function getData(callback){
  if(coupons){
    callback && callback(coupons)
  }
  app.request({
    url: host+'/discount/discountList',
    method: 'GET',
    success: function(data){
      coupons = formatData(data)
      wx.setStorage({
          key: "bugerking",
          data: coupons
      })
      callback && callback(coupons)
    }
  })
  
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