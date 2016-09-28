const app = getApp()
let host = 'http://youhui.kfc.com.cn'
let op = 'LFF'
let coupons = wx.getStorageSync('kfc')

function getData(callback){
    if(coupons){
        callback && callback(coupons)
    }
    app.request({
        url: host+'/mobile/handler/GetList.ashx',
        method: 'POST',
        data: {"op": "LFF"},
        header: {
            'content-type':'application/x-www-form-urlencoded'
        },
        success: function(data){
            coupons = formatData(data)
            wx.setStorage({
                key: "kfc",
                data: coupons
            })
            callback && callback(coupons)
        }
    })
}

function formatData(data){
    let list = []
    for(index in data.data){
        list.push({
            'id': data.data[index].CouponID,
            'img': host+data.data[index].SmallPic,
            'name': data.data[index].CouponTitle,
            'price': data.data[index].CouponPrice,
            'time': data.data[index].CouponValidity,
            'img_big': host+data.data[index].BigPic
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
  companyName: '肯德基'
}
