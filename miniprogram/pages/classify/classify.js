Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [
       {
         name: '推荐分类',
         id: 0,
         children: [
          {cate: '内蒙古自助七日游'} 
         ]
       },
       {
        name: '乐玩',
        id: 1,
        children: [
          {cate: '内蒙古自助七日游 - 乐玩推荐'} 
         ]
       },
       {
        name: '品鉴',
        id: 2,
        children: [
          {cate: '内蒙古自助七日游 - 品鉴推荐'} 
         ]
       },
       {
        name: '好物',
        id: 3,
        children: [
          {cate: '内蒙古自助七日游 - 好物推荐'} 
         ]
       },
       {
        name: '形象',
        id: 4,
        children: [
          {cate: '内蒙古自助七日游 - 形象推荐'} 
         ]
       }
    ],
    cagMenuList: [],
    currentIndex: 0,
    showView: true,
    dataList: [],
    num: ''
  },
  getLeftIndex(e) {
    let leftMenuList =[
      {
        name: '推荐分类',
        id: 0,
        children: [
          {
            cate: '内蒙古自助五日游',
            image: '../../images/image1.png'
          },
          {
           cate: '内蒙古自助七日游',
           image: '../../images/image3.jpg'
          },
          {
            cate: '内蒙古自助五日游',
            image: '../../images/image5.png'
          },
          {
           cate: '内蒙古自助七日游',
           image: '../../images/image6.png'
          }
        ]
      },
      {
       name: '乐玩',
       id: 1,
       children: [
          {
            cate: '内蒙古自助五日游 - 乐玩推荐',
            image: '../../images/image5.png'
          },
          {
          cate: '内蒙古自助七日游 - 乐玩推荐',
          image: '../../images/image3.jpg'
          },
          {
            cate: '内蒙古自助五日游 - 乐玩推荐',
            image: '../../images/image6.png'
          },
          {
          cate: '内蒙古自助七日游 - 乐玩推荐',
          image: '../../images/image1.png'
          }
        ]
      },
      {
       name: '品鉴',
       id: 2,
       children: [
         {
            cate: '内蒙古自助五日游 - 品鉴推荐',
            image: '../../images/image1.png'
          },
          {
          cate: '内蒙古自助七日游 - 品鉴推荐',
          image: '../../images/image3.jpg'
          },
          {
            cate: '内蒙古自助五日游 - 品鉴推荐',
            image: '../../images/image5.png'
          },
          {
          cate: '内蒙古自助七日游 - 品鉴推荐',
          image: '../../images/image6.png'
          }
        ]
      },
      {
       name: '好物',
       id: 3,
       children: [
         {
            cate: '内蒙古自助五日游 - 好物推荐',
            image: '../../images/image5.png'
          },
          {
          cate: '内蒙古自助七日游 - 好物推荐',
          image: '../../images/image3.jpg'
          },
          {
            cate: '内蒙古自助五日游 - 好物推荐',
            image: '../../images/image6.png'
          },
          {
          cate: '内蒙古自助七日游 - 好物推荐',
          image: '../../images/image1.png'
          }
        ]
      },
      {
       name: '形象',
       id: 4,
       children: [
         {
            cate: '内蒙古自助五日游 - 形象推荐',
            image: '../../images/image1.png'
          },
          {
          cate: '内蒙古自助七日游 - 形象推荐',
          image: '../../images/image3.jpg'
          },
          {
            cate: '内蒙古自助五日游 - 形象推荐',
            image: '../../images/image5.png'
          },
          {
          cate: '内蒙古自助七日游 - 形象推荐',
          image: '../../images/image6.png'
          }
        ]
      }
   ]
    let index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index,
      cagMenuList: leftMenuList[index].children
    })
  },
  goToVideo(){
    wx.navigateTo({ url: '/pages/video/video'})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let leftMenuList =[
      {
        name: '推荐分类',
        id: 0,
        children: [
          {
            cate: '内蒙古自助五日游',
            image: '../../images/image1.png'
          },
          {
           cate: '内蒙古自助七日游',
           image: '../../images/image3.jpg'
          },
          {
            cate: '内蒙古自助五日游',
            image: '../../images/image5.png'
          },
          {
           cate: '内蒙古自助七日游',
           image: '../../images/image6.png'
          }
        ]
      }
   ]
     this.setData({
      cagMenuList: leftMenuList[0].children
     })
  

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