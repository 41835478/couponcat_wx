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
                coupons = formatData(JSON.parse(data))
                callback && callback(coupons)
            }
        })
    }
}

function formatData(data){
    for(index1 in data){
        for(index2 in data[index1].lists){
            data[index1].lists[index2]['title'] = data[index1].lists[index2]['name']
        }
    }
    return data
}

module.exports = {
  getData: getData,
  companyName: '麦当劳'
}
