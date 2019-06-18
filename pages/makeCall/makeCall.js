// pages/makeCall/makeCall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
         phoneNumber:'15219579677'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 拨打电话功能
   */
  makeCall: function() {
    var that=this;
    wx.showActionSheet({
      itemList: ['拨打电话', '添加联系人'],
      itemColor: '#FF4600',
      success: function(res) {
      console.log(res);
        if (res.tapIndex==0){
          wx.makePhoneCall({
            phoneNumber: that.data.phoneNumber
          })
        }
        if (res.tapIndex == 1) {
          wx.addPhoneContact({
            firstName: 'Hugo',
            phoneNumber:that.data.phoneNumber
          })
        }
      }
    })
  }
})