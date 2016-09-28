const app = getApp()
let host = 'http://qiniu.woaap.com//mcd/coupon/dist/card_data.js'
let coupons = wx.getStorageSync('mcdonalds')

function getData(callback){
    if(coupons){
        callback && callback(coupons)
    }
    app.request({
        url: host,
        method: 'GET',
        success: function(data){
            data = data.replace(/\s*var cardData =\s*/,'')
            coupons = JSON.parse(data)
            wx.setStorage({
                key: "mcdonalds",
                data: coupons
            })
            callback && callback(coupons)
        }
    })
    
}

module.exports = {
  getData: getData,
  companyName: '麦当劳'
}
