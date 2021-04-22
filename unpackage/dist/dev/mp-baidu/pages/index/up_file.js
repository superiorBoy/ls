Page({
    data: {
        url:'https://www.xhlvshi.com/mns/up_file.html?type=1'+'&token='+swan.getStorageSync("token"),
        userid:''
    },
    onInit: function () {
        // 监听页面初始化的生命周期函数
    },
    onLoad: function (option) {


    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
        swan.setStorageSync("up_path", '');
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    onError: function () {
        // 错误监听函数
    },
    // web-view 通过 swan.webView.postMessage 向小程序发送消息，小程序通过 bindmessage 事件来监听网页向小程序发送的消息，接收时机：小程序后退、组件销毁、分享时
    postMessage(options) {
        // swan.showToast({
        //     title: '接收到了H5发送的message，详细信息请到控制台查看',
        //     icon: 'none'
        // })
           console.log('H5页传过来的参数为:', options);
          console.log('H5页传过来的参数为:', options.detail.data[0].key);
          swan.setStorageSync("up_path", options.detail.data[0].key);



        // options 为
        // {
        //     currentTarget: {
        //         id: '_5302',
        //         offsetLeft: 0,
        //         offsetTop: 0,
        //         dataset: {}
        //     },
        //     detail: {
        //         data:["foo"]
        //     },
        //     'target': {
        //         id: '_5302',
        //         offsetLeft: 0,
        //         offsetTop: 0,
        //         dataset: {}
        //     },
        //     timeStamp: 8,
        //     type: "message",
        // }
    }

});