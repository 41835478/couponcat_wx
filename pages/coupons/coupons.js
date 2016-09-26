//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      companyName: '',
      loading: true,
      coupons: []
  },
  onLoad: function (params) {
      that = this
      companyId = params.company || 'mcdonalds'
      company = require('../../utils/'+companyId+'.js')
      this.setData({companyName:company.companyName})
      company.getData((data)=>{
          that.setData({coupons:data, loading: false})
      })
      
      
  },
  
  onReady(){
      wx.setNavigationBarTitle({title:this.data.companyName})
  }
})
