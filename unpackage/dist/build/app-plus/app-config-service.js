
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/zixun","pages/index/tiwen_list","pages/index/tiwen_list_xq","pages/index/hongbao","pages/index/fuwufei","pages/index/shenqing_tuikuan","pages/index/tui_xq","pages/index/ceshi","pages/index/pipei","pages/index/tishi","pages/index/weituo","pages/index/forget","pages/index/tiwen_pay_fs","pages/index/xieyi","pages/index/yinsi","pages/index/jishuzhichi","pages/index/dianhua_tiwen","pages/index/zixun_jilu","pages/index/qita_jilu","pages/index/dianhua_jilu","pages/index/dianhua_jilu_xq","pages/index/dianhua_zixun","pages/index/weituo_list","pages/index/weituo_xq","pages/index/tuandui","pages/index/jiangli","pages/index/wanshan","pages/index/guanzhu","pages/index/shoucang","pages/index/ls_fuwu","pages/index/sucai","pages/index/yaoqing","pages/index/tuanzhang","pages/index/shendu_pay","pages/index/app_down","pages/index/geren_xinxi","pages/index/ls_anli","pages/index/ls_liushui","pages/index/ls_tixian","pages/index/chongzhi","pages/index/shipin","pages/index/shipin_xq","pages/index/changshi","pages/index/changshi_erji","pages/index/changshi_sanji","pages/index/changshi_xq","pages/index/zhishi_all","pages/index/ls_zhuye","pages/index/ls_zhuye_index","pages/index/ls_zhuye_huifu","pages/index/ls_zhuye_tuwen","pages/index/tuwen_xq","pages/index/ls_xinxi","pages/index/zhuye_zixun_xq","pages/index/help","pages/index/help_xq","pages/index/gonggao","pages/index/vip","pages/index/gonggao_xq","pages/index/zaixian_wen","pages/index/pay","pages/index/zhineng_pay","pages/index/tiwen","pages/index/xuanshang","pages/index/zaixian_list","pages/index/geren_xinxi_xiugai","pages/index/lvshi","pages/index/xiaoxi","pages/index/my","pages/index/zhuce","pages/index/pingjia","pages/index/login","pages/index/chat","pages/index/zhuiwen","pages/ls/index","pages/ls/jiedan","pages/ls/my","pages/ls/xiaoxi","pages/ls/yaoqing","pages/ls/fensi","pages/ls/jiedan_time","pages/ls/geren_xinxi_xiugai","pages/ls/ls_xueshu","pages/ls/anjian_weituo","pages/ls/weituo_xq","pages/ls/fuwu_guanli","pages/ls/anli","pages/ls/up_anli","pages/ls/jindou","pages/ls/kefu","pages/ls/up_neirong","pages/ls/mingpian","pages/ls/vip","pages/ls/ls_gongzuo","pages/ls/ls_meiti","pages/ls/wanshan","pages/ls/zixun_baojia","pages/ls/shoukuan","pages/ls/baojia_jianmian","pages/ls/baojia_list","pages/ls/jiedan_xq","pages/ls/fuwu_baojia","pages/ls/tui_xq","pages/ls/add_baojia","pages/ls/kaitong","pages/ls/peizhi","pages/ls/shezhi","pages/ls/geren_xinxi","pages/ls/tixian","pages/ls/my_jindou","pages/ls/gaimima","pages/ls/liushui","pages/ls/tiwen_guanli","pages/ls/tiwen_jilu","pages/ls/ceshi","pages/ls/tiwen_ji_xq","pages/ls/tiwen_guanli_xq","pages/ls/zhuiwen_xq","pages/ls/shiming_renzheng","pages/ls/zhiye_renzheng","pages/ls/ls_renzheng","pages/ls/ls_geren","pages/ls/ls_jiben","pages/ls/ls_jiaoyu","pages/ls/ls_more","pages/ls/ls_lianxi","pages/ls/login","pages/ls/ls_ren_list","pages/ls/ls_zhiwu","pages/ls/ls_rongyu","pages/ls/zaixian_list","pages/ls/zixun_jilu","pages/ls/qita_jilu","pages/ls/chat","pages/ls/dianhua_zixun"],"window":{"titleNView":false,"navigationBarTextStyle":"black"},"tabBar":{"color":"#8a8a8a","selectedColor":"#0eb77e","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/img/shouye_icon.png","selectedIconPath":"static/img/on_shouye_icon.png"},{"pagePath":"pages/index/zixun","text":"咨询","iconPath":"static/img/zixun_icon.png","selectedIconPath":"static/img/on_zixun_icon.png"},{"pagePath":"pages/index/lvshi","text":"律师","iconPath":"static/img/lvshi_icon.png","selectedIconPath":"static/img/on_lvshi_icon.png"},{"pagePath":"pages/index/xiaoxi","text":"消息","iconPath":"static/img/xiaoxi_icon.png","selectedIconPath":"static/img/on_xiaoxi_icon.png"},{"pagePath":"pages/index/my","text":"我的","iconPath":"static/img/my_icon.png","selectedIconPath":"static/img/on_my_icon.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"小虎律师","compilerVersion":"3.1.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/index/zixun","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/tiwen_list","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/tiwen_list_xq","meta":{},"window":{}},{"path":"/pages/index/hongbao","meta":{},"window":{}},{"path":"/pages/index/fuwufei","meta":{},"window":{}},{"path":"/pages/index/shenqing_tuikuan","meta":{},"window":{}},{"path":"/pages/index/tui_xq","meta":{},"window":{}},{"path":"/pages/index/ceshi","meta":{},"window":{}},{"path":"/pages/index/pipei","meta":{},"window":{}},{"path":"/pages/index/tishi","meta":{},"window":{}},{"path":"/pages/index/weituo","meta":{},"window":{}},{"path":"/pages/index/forget","meta":{},"window":{}},{"path":"/pages/index/tiwen_pay_fs","meta":{},"window":{}},{"path":"/pages/index/xieyi","meta":{},"window":{}},{"path":"/pages/index/yinsi","meta":{},"window":{}},{"path":"/pages/index/jishuzhichi","meta":{},"window":{}},{"path":"/pages/index/dianhua_tiwen","meta":{},"window":{}},{"path":"/pages/index/zixun_jilu","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/qita_jilu","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/dianhua_jilu","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/dianhua_jilu_xq","meta":{},"window":{}},{"path":"/pages/index/dianhua_zixun","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/weituo_list","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/weituo_xq","meta":{},"window":{}},{"path":"/pages/index/tuandui","meta":{},"window":{}},{"path":"/pages/index/jiangli","meta":{},"window":{}},{"path":"/pages/index/wanshan","meta":{},"window":{}},{"path":"/pages/index/guanzhu","meta":{},"window":{}},{"path":"/pages/index/shoucang","meta":{},"window":{}},{"path":"/pages/index/ls_fuwu","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/sucai","meta":{},"window":{}},{"path":"/pages/index/yaoqing","meta":{},"window":{}},{"path":"/pages/index/tuanzhang","meta":{},"window":{}},{"path":"/pages/index/shendu_pay","meta":{},"window":{}},{"path":"/pages/index/app_down","meta":{},"window":{}},{"path":"/pages/index/geren_xinxi","meta":{},"window":{}},{"path":"/pages/index/ls_anli","meta":{},"window":{}},{"path":"/pages/index/ls_liushui","meta":{},"window":{}},{"path":"/pages/index/ls_tixian","meta":{},"window":{}},{"path":"/pages/index/chongzhi","meta":{},"window":{}},{"path":"/pages/index/shipin","meta":{},"window":{}},{"path":"/pages/index/shipin_xq","meta":{},"window":{}},{"path":"/pages/index/changshi","meta":{},"window":{}},{"path":"/pages/index/changshi_erji","meta":{},"window":{}},{"path":"/pages/index/changshi_sanji","meta":{},"window":{}},{"path":"/pages/index/changshi_xq","meta":{},"window":{}},{"path":"/pages/index/zhishi_all","meta":{},"window":{}},{"path":"/pages/index/ls_zhuye","meta":{},"window":{}},{"path":"/pages/index/ls_zhuye_index","meta":{},"window":{}},{"path":"/pages/index/ls_zhuye_huifu","meta":{},"window":{}},{"path":"/pages/index/ls_zhuye_tuwen","meta":{},"window":{}},{"path":"/pages/index/tuwen_xq","meta":{},"window":{}},{"path":"/pages/index/ls_xinxi","meta":{},"window":{}},{"path":"/pages/index/zhuye_zixun_xq","meta":{},"window":{}},{"path":"/pages/index/help","meta":{},"window":{}},{"path":"/pages/index/help_xq","meta":{},"window":{}},{"path":"/pages/index/gonggao","meta":{},"window":{}},{"path":"/pages/index/vip","meta":{},"window":{}},{"path":"/pages/index/gonggao_xq","meta":{},"window":{}},{"path":"/pages/index/zaixian_wen","meta":{},"window":{}},{"path":"/pages/index/pay","meta":{},"window":{}},{"path":"/pages/index/zhineng_pay","meta":{},"window":{}},{"path":"/pages/index/tiwen","meta":{},"window":{}},{"path":"/pages/index/xuanshang","meta":{},"window":{}},{"path":"/pages/index/zaixian_list","meta":{},"window":{}},{"path":"/pages/index/geren_xinxi_xiugai","meta":{},"window":{}},{"path":"/pages/index/lvshi","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/index/xiaoxi","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/index/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/index/zhuce","meta":{},"window":{}},{"path":"/pages/index/pingjia","meta":{},"window":{}},{"path":"/pages/index/login","meta":{},"window":{}},{"path":"/pages/index/chat","meta":{},"window":{"enablePullDownRefresh":true,"softinputMode":"adjustResize"}},{"path":"/pages/index/zhuiwen","meta":{},"window":{}},{"path":"/pages/ls/index","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/jiedan","meta":{},"window":{}},{"path":"/pages/ls/my","meta":{},"window":{}},{"path":"/pages/ls/xiaoxi","meta":{},"window":{}},{"path":"/pages/ls/yaoqing","meta":{},"window":{}},{"path":"/pages/ls/fensi","meta":{},"window":{}},{"path":"/pages/ls/jiedan_time","meta":{},"window":{}},{"path":"/pages/ls/geren_xinxi_xiugai","meta":{},"window":{}},{"path":"/pages/ls/ls_xueshu","meta":{},"window":{}},{"path":"/pages/ls/anjian_weituo","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/weituo_xq","meta":{},"window":{}},{"path":"/pages/ls/fuwu_guanli","meta":{},"window":{}},{"path":"/pages/ls/anli","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/up_anli","meta":{},"window":{}},{"path":"/pages/ls/jindou","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/kefu","meta":{},"window":{}},{"path":"/pages/ls/up_neirong","meta":{},"window":{}},{"path":"/pages/ls/mingpian","meta":{},"window":{}},{"path":"/pages/ls/vip","meta":{},"window":{}},{"path":"/pages/ls/ls_gongzuo","meta":{},"window":{}},{"path":"/pages/ls/ls_meiti","meta":{},"window":{}},{"path":"/pages/ls/wanshan","meta":{},"window":{}},{"path":"/pages/ls/zixun_baojia","meta":{},"window":{}},{"path":"/pages/ls/shoukuan","meta":{},"window":{}},{"path":"/pages/ls/baojia_jianmian","meta":{},"window":{}},{"path":"/pages/ls/baojia_list","meta":{},"window":{}},{"path":"/pages/ls/jiedan_xq","meta":{},"window":{}},{"path":"/pages/ls/fuwu_baojia","meta":{},"window":{}},{"path":"/pages/ls/tui_xq","meta":{},"window":{}},{"path":"/pages/ls/add_baojia","meta":{},"window":{}},{"path":"/pages/ls/kaitong","meta":{},"window":{}},{"path":"/pages/ls/peizhi","meta":{},"window":{}},{"path":"/pages/ls/shezhi","meta":{},"window":{}},{"path":"/pages/ls/geren_xinxi","meta":{},"window":{}},{"path":"/pages/ls/tixian","meta":{},"window":{}},{"path":"/pages/ls/my_jindou","meta":{},"window":{}},{"path":"/pages/ls/gaimima","meta":{},"window":{}},{"path":"/pages/ls/liushui","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/tiwen_guanli","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/tiwen_jilu","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/ceshi","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/tiwen_ji_xq","meta":{},"window":{}},{"path":"/pages/ls/tiwen_guanli_xq","meta":{},"window":{}},{"path":"/pages/ls/zhuiwen_xq","meta":{},"window":{"softinputMode":"adjustResize"}},{"path":"/pages/ls/shiming_renzheng","meta":{},"window":{}},{"path":"/pages/ls/zhiye_renzheng","meta":{},"window":{}},{"path":"/pages/ls/ls_renzheng","meta":{},"window":{}},{"path":"/pages/ls/ls_geren","meta":{},"window":{}},{"path":"/pages/ls/ls_jiben","meta":{},"window":{}},{"path":"/pages/ls/ls_jiaoyu","meta":{},"window":{}},{"path":"/pages/ls/ls_more","meta":{},"window":{}},{"path":"/pages/ls/ls_lianxi","meta":{},"window":{}},{"path":"/pages/ls/login","meta":{},"window":{}},{"path":"/pages/ls/ls_ren_list","meta":{},"window":{}},{"path":"/pages/ls/ls_zhiwu","meta":{},"window":{}},{"path":"/pages/ls/ls_rongyu","meta":{},"window":{}},{"path":"/pages/ls/zaixian_list","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/zixun_jilu","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/qita_jilu","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/ls/chat","meta":{},"window":{"enablePullDownRefresh":true,"softinputMode":"adjustResize"}},{"path":"/pages/ls/dianhua_zixun","meta":{},"window":{"enablePullDownRefresh":true}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
