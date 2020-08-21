Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    videoSrc: 'http://video19.ifeng.com/video09/2020/05/26/p35894648-102-9987636-173637.mp4?gid=bzNIUXQJhRUA&pver=ISHTML5Player_v1.0.0&sver=&tm=1597887550720&uid=o3hwQXQJhRUA&vid=ac284436-71c0-4478-adfd-cd128978eb3f&platform=pc&sourceType=h5&sign=0581286e258a79ac6646bbc9ca5a6bbe&mos=windows_NT&duration=&vkey=L7mqEGf2TEDnKzGXjwCoqKiD9ZEVAqyDczoImYqDndv8RPiiBJq6kulp%2BX38P9N%2FYAkrZ8pNvaFsCIUwvWIESLFmPqw%2F9%2FTxs%2BO5Z%2FJiyTyWjiy8iEXQFm2Z8VP%2BQWaWqRl9TVQtrJLSB7Z%2B9R%2BACWZ2muUkWsC6QeyG2VD1ZDSocdLuIgFasEOE3uMG1xSFquaMGnZesSl0OsJJgTSJ%2F09UpAmXd7s%2B1w0NtDiN0oHva3n66zjAz%2BrGRjVylpE1DMYgrAzMx2XNWyRHpH%2Bo6IU7UML0wzr%2BLpVLBykZzYU%3D' 
  },
  getCommentList: function (e) {
    wx.cloud.callFunction({
      name: 'video'
    }).then(res =>{
      this.setData({
       commentList: res.result.data
      })
      console.log(res)
    })
 },
  goToVideo:function(e){
    wx.navigateTo({ url: '/pages/video/video'})
  },
  goToTourist:function(e){
    wx.navigateTo({ url: '/pages/tourist/tourist'})
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCommentList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})