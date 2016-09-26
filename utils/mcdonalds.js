const app = getApp()
let host = 'http://qiniu.woaap.com//mcd/coupon/dist/card_data.js'

function getData(callback){
    app.request({
        url: host,
        method: 'GET',
        success: function(data){
            data = data.replace(/\s*var cardData =\s*/,'')
            callback && callback(JSON.parse(data))
        }
    })
}

module.exports = {
  getData: getData,
  companyName: '麦当劳'
}
