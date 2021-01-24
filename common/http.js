
let baseUrl = '';
let WebSocket_url=''
if (process.env.NODE_ENV == 'development') {

    baseUrl='/api'
	
	// #ifndef H5
	   baseUrl='http://www.ls.xyz/'
	// #endif
	//#ifdef APP-PLUS
	  baseUrl = 'http://www.xhlvshi.com' // 生产环境
	  WebSocket_url='www.xhlvshi.com'
	  // uni.setStorageSync("xian_url",baseUrl)
	//#endif
	
} else {
        baseUrl = '' // 生产环境
	  //#ifdef APP-PLUS
	    baseUrl = 'http://www.xhlvshi.com/' // 生产环境
		WebSocket_url='www.xhlvshi.com'
	    uni.setStorageSync("xian_url",baseUrl)
	  //#endif
}

function request(url,method,data,header={}){
  // uni.showLoading({
  //   title: '加载中...'
  // })
  return new Promise((resolve,reject) => {
    uni.request({
      url: baseUrl + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(resp) {
        uni.hideLoading();
		if (resp.data.code == 0) {
			resolve(resp.data);
		}
		else if (resp.data.message == '请先登录' || resp.data.msg == '请先登录') {
			uni.navigateTo({
				url:'login?type=back'
			});
		}
		else {
			uni.showToast({
				title: resp.data.message,
				duration: 2000,
				icon: 'none'
			});
			resolve(resp.data);
		}
      },
      fail: function(resp) {
        uni.hideLoading();
        reject(resp);
      },
	  complete(end) {
		  uni.stopPullDownRefresh();
		  
	  	      }
    })
  })
}


// 封装get方法
function get(obj) {
  return request(obj.url,'GET',obj.data)
}
// 封装post方法
function post(obj) {
  return request(obj.url,'POST',obj.data)
}



export default {
  request,
  get,
  post,
  baseUrl,
  WebSocket_url
}
