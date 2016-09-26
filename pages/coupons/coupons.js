//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      coupons: []
  },
  onLoad: function (params) {
      that = this
      companyId = params.company || 'mcdonalds'
      company = require('../../utils/'+companyId+'.js')
      company.getData((data)=>{
          that.setData({coupons:data})
      })
  }
})
