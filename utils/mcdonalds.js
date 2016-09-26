const app = getApp()
let host = 'http://qiniu.woaap.com//mcd/coupon/dist/card_data.js'
let coupons = null

function getData(callback){
    if(coupons){
        callback && callback(coupons)
    }else{
        app.request({
            url: host,
            method: 'GET',
            success: function(data){
                data = data.replace(/\s*var cardData =\s*/,'')
                coupons = JSON.parse(data)
                callback && callback(coupons)
            }
        })
    }
}

module.exports = {
  getData: getData,
  companyName: '麦当劳'
}
