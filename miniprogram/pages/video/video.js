Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentList: [],
    fileList: [],
    videoSrc: 'https://apd-98dd0664cb26afd9ac83d677d75704c8.v.smtcdns.com/vweishi.tc.qq.com/AX3xB0rsuuk4UjM2nc_iPEx5K81IABCsRd2T2-bWhljs/svp_1047/shg_1047_1047_0bf2auammaaasuaegwjhijprobieyyjabqsa.f70.mp4?sdtfrom=v1105&guid=048c143ac6482ff0ca47648f7eb264ea&vkey=027717D72E3DD81AC50E88FA354B2B5F9939D12372D5A905BD223EC5F38BE980375902AA44C9A7BAF198F185C8AE02C9540E4DFB9F3EB1107DCD2CAF92297FDACD1F251B40749BC78423A3318956EA0942CEF15AF49502C39D08C602A07AA46830D643545ECB48365F034A1E33D12921AA27D70B2181CE86C5075F3DA45B7EE7' 
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
  // 上传图片
  onUpload(){
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera']
    }).then(res =>{
      var oldFile = this.data.fileList
      var newFile = oldFile.concat(res.tempFilePaths)
      this.setData({
        fileList: newFile
      })
    })
  },
  // 上传视频
  getVideo(){
    wx.chooseVideo({
      sourceType: ['album','camera'],
      maxDuration: 60,
      camera: 'back'
    }).then(res =>{
      this.setData({
        videoSrc: res.tempFilePath
      })
      // this.cloudVideo(res.tempFilePath, new Date().getTime())
    })
  },
  goToTourist:function(e){
    wx.navigateTo({ url: '/pages/tourist/tourist'})
  },
  cloudVideo(){
     wx.showLoading({
       title: '视频上传中',
     })
     let path = this.data.videoSrc
     wx.cloud.uploadFile({
      cloudPath: new Date().getTime()+'.mp4',
      filePath: path
     }).then(res =>{
       wx.hideLoading()
       wx.showToast({
        title: '上传成功',
        duration: 2000
      })
       console.log(res)
     }).catch(error => {

     })
  },
  onClose(e){
    console.log(e)
     var index = e.currentTarget.dataset.id
     var fileList=this.data.fileList
     fileList.splice(index, 1)
     this.setData({
      fileList: fileList
     })
  },
  cloudFile(){
    var fileList=this.data.fileList
    fileList.forEach((item,index) =>{
      wx.cloud.uploadFile({
        cloudPath: new Date().getTime() + '_' + index + '.jpg',
        filePath: item, // 文件路径
      }).then(res => {
        // get resource ID
        console.log(res.fileID)
      }).catch(error => {
        // handle error
      })
    })
  },
  getImgWth() {
     var wth=wx.getSystemInfoSync().screenWidth
     var imgWth=(wth-20-5)/3
     this.setData({
      imgWth:imgWth
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getImgWth()
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