const app = getApp()
let host = 'http://youhui.kfc.com.cn/mobile/handler/GetList.ashx'
let op = 'LFF'

function getData(callback){
    app.request({
        url: host,
        method: 'POST',
        data: {"op": "LFF"},
        header: {
            'content-type':'application/x-www-form-urlencoded'
        },
        success: function(data){
            callback && callback(formatData(data))
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
