<template>
	<view class="body">
		<view class="head">
			<view class="head_back"><image src="@/static/img/back.png" mode="" @click="navigateBack()"></image></view>
			<view class="head_center hei_38_bold">我的名片</view>
			<view class=" head_right hei_30_bold" ></view>
		</view>

		<view class="zi_body ">
			<view :change:msg="renderScript.receiveMsg" class="renderjs" id="poster" >
			<view class="mingpain_top" v-if="user.photourl" >
				<view class="mingpain_top_tx" >
					<image :src="img_url+user.photourl" mode="" class="tx"></image>
					<image src="../../static/img/renzheng2.png" mode="" class="ren"></image>
				</view>
				<view class="bai_40_bold">
					{{user.nickname}}律师
				</view>
				<view class="mingpian_dizhi bai_28">
					<image src="../../static/lsimg/bai_dizhi.png" mode=""></image>{{zhiye_ren.province}}·{{zhiye_ren.city}}
				</view>
				<view class="mingpian_lvsuo bai_28">
					<image src="../../static/lsimg/bai_lvsuo.png" mode=""></image>{{zhiye_ren.lvsuo}}
				</view>
				<view class="mingpian_zhuanchang bai_26">
									<text v-if="zhuanchang_arry[zhiye_ren.expertise1] && zhuanchang_arry[zhiye_ren.expertise1].shanchangname">{{zhuanchang_arry[zhiye_ren.expertise1].shanchangname}}</text>
									<text v-if="zhuanchang_arry[zhiye_ren.expertise2] && zhuanchang_arry[zhiye_ren.expertise2].shanchangname">{{zhuanchang_arry[zhiye_ren.expertise2].shanchangname}}</text>
									<text v-if="zhuanchang_arry[zhiye_ren.expertise3] && zhuanchang_arry[zhiye_ren.expertise3].shanchangname">{{zhuanchang_arry[zhiye_ren.expertise3].shanchangname}}</text>
				</view>
			</view>
              <view class="ming_pian">
               	<image :src="codeImg" mode="" ></image>
				<view class="qian_26">
					扫描二维码，法律问题来咨询
				</view>
               </view>
		</view>	   
			   <view class="fenxiang hui_26">
			   	<text></text>分享名片<text></text>
			   </view>
			<view class="fenxiang_list hui_26" >
				<view class="fenxiang_item"  @click="fenxiang_weixin()">
					<image src="../../static/lsimg/weixin.png" mode=""></image>
					<view class="">
						微信
					</view>
				</view>
				<view class="fenxiang_item" @click="fenxiang_pengyouquan()">
					<image src="../../static/lsimg/pengyouquan.png" mode=""></image>
					<view class="">
						朋友圈
					</view>
				</view>
				<view class="fenxiang_item" @click="baocun()">
					<image src="../../static/lsimg/baocun.png" mode=""></image>
					<view class="">
						保存图片
					</view>
				</view>
			</view>
		</view>
		
	<!-- <image :src="test" mode="aspectFit" class="test"></image>			 -->
		
		<!-- 	<view class="poster-view">
					<image :src="base64" mode=""></image>
				</view> -->
				
				
				
	</view>
</template>

<script>
	// 以下路径需根据项目实际情况填写
	import { pathToBase64, base64ToPath } from '@/common/index.js'
export default {
	data() {
		return {
			img_url: uni.getStorageSync('img_url'),
			zhuanchang_arry:[],
			zhiye_ren:'',
			user:'',
			erweima:'',
			codeImg:'',
			base64: '',
			lvsuo:'',
			dizhi:'',
			type:0,
			test: ''
			
		};
	},
	onReady() {
			const that = this;
	        //防止切图成白屏
			//#ifdef APP-PLUS
			setTimeout(function() {
				that.toImage();
			}, 1000);
			
			//#endif
	
		},
	created() {},
	onLoad(option) {
		// this.zhuanhuan1('/static/lsimg/bai_dizhi.png')
		// this.zhuanhuan2('/static/lsimg/bai_lvsuo.png')
		// this.zhuanhuan3('/static/img/renzheng2.png')
		// this.zhuanhuan4('/static/lsimg/ming_bg.png')
		var that=this
		this.huoqu_zhangchang_lei()
		this.$http
			.post({
				url: '/mlawyerapi/user/getlawyer'
			})
			.then(res => {
				this.user=res.data.user;


          });	
		this.tupain()
		
	},
	methods: {
		navigateBack() {
			uni.navigateBack();
		},
		/* 截图 */
				toImage() {
					const that = this;
					/* 获取屏幕信息 */
					let ws = this.$mp.page.$getAppWebview();
					let bitmap = new plus.nativeObj.Bitmap('test');
					// 将webview内容绘制到Bitmap对象中
					ws.draw(
						bitmap,
						function(e) {
							/* 获取base64 */
							that.test= bitmap.toBase64Data();
							that.cunwenjian()
							// console.log(that.test,'1111')
							// /* 加载base64编码 */
							// bitmap.loadBase64Data(
							// 	bitmap.toBase64Data(),
							// 	function() {
									
							// 		console.log('加载Base64图片数据成功');
							// 		/* 保存图片 */
							// 		bitmap.save(
							// 			'_doc/share.jpg',
							// 			{},
							// 			async (i)=>{
							// 				console.log('保存图片成功：' + JSON.stringify(i));
							// 				uni.saveImageToPhotosAlbum({
							// 					filePath: i.target,
							// 					success: function() {
							// 						/* 清除 */
							// 						bitmap.clear();
							// 						that.tools.toast('保存成功,请到相册中查看')
							// 					},
							// 					fail(e) {
							// 						that.tools.toast('保存失败')
							// 					}
							// 				});
							// 			},
							// 			function(e) {
							// 				console.log('保存图片失败：' + JSON.stringify(e));
							// 			}
							// 		);
							// 	},
							// 	function() {
							// 		console.log('加载Base64图片数据失败：' + JSON.stringify(e));
							// 	}
							// );
						},
						function(e) {
							console.log('截屏绘制图片失败：' + JSON.stringify(e));
						},
						{
							check: true, // 设置为检测白屏
							clip: { top: '80px', left: '0px', height: '600px', width: '100%' } // 设置截屏区域
						}
					);
				},
		// zhuanhuan1(url){
		// 	pathToBase64(url)
		// 	  .then(base64 => {
			    
		// 		this.dizhi=base64
		// 	  })
		// 	  .catch(error => {
		// 	    console.error(error)
		// 	  })
		
		// },
		// zhuanhuan2(url){
		// 	pathToBase64(url)
		// 	  .then(base64 => {
			    
		// 		this.lvsuo=base64
		// 	  })
		// 	  .catch(error => {
		// 	    console.error(error)
		// 	  })
		
		// },
		// zhuanhuan3(url){
		// 	pathToBase64(url)
		// 	  .then(base64 => {
			    
		// 		this.renzheng=base64
		// 	  })
		// 	  .catch(error => {
		// 	    console.error(error)
		// 	  })
		
		// },
		// zhuanhuan4(url){
		// 	pathToBase64(url)
		// 	  .then(base64 => {
			    
		// 		this.bg=base64
		// 	  })
		// 	  .catch(error => {
		// 	    console.error(error)
		// 	  })
		
		// },
	saveImg(url) {
				const that = this;
				uni.downloadFile({
							url,
				success: res => {
					if (res.statusCode === 200) {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: function() {
								this.tools.toast('保存成功');
							},
							fail: function() {
								this.tools.toast('保存失败，请稍后重试');
							}
						});
					} else {
						this.tools.toast('下载失败');
					}
				}
						});
					},
		tupain(){
			var that=this
			uni.request({
				url: that.$http.baseUrl + '/mlawyerapi/user/lawyer_qrcode',
				method: 'GET',
				dataType:"arraybuffer",
                responseType: "arraybuffer",
				success: function(res) {
					   const arrayBuffer = res.data
                  that.codeImg='data:image/jpeg;base64,'+ uni.arrayBufferToBase64(arrayBuffer)
							
				},
				fail: function(resp) {}
			});
		},

		huoqu_zhangchang_lei(){
			this.$http
				.post({
					url: '/mapi/index/getshanchang'
				})
				.then(res => {
					this.huoqu_renzheng()
					this.zhuanchang_arry=res.data.shanchang
				});
		},
		huoqu_renzheng(){
			// 获取用户信息
					this.$http
						.post({
							url: '/mlawyerapi/lawyer/auth',
							data:{
								type:2
							}
						})
						.then(res => {
							this.zhiye_ren=res.data.lawyerauth
							
						});
		},
		baocun() {
			
			uni.showToast({
			    title: '图片保存成功'
			    
			})
		
		},
		
		cunwenjian(){
			var that=this
			let base64 = this.test;
			   const bitmap = new plus.nativeObj.Bitmap("test");
			   bitmap.loadBase64Data(base64, function() {
			       const url = "_doc/" + new Date().getTime() + ".png";  // url为时间戳命名方式
							
			       console.log('saveHeadImgFile', url)
			       bitmap.save(url, {
			           overwrite: true,  // 是否覆盖
			          
			       }, (i) => {
			           uni.saveImageToPhotosAlbum({
			               filePath: url,
			               success: function() {
														console.log('保存图片成功：' + JSON.stringify(i));
														that.dizhi=i.target
			                   // uni.showToast({
			                   //     title: '图片保存成功'
			                       
			                   // })
			                   bitmap.clear()
			               }
			           });
			       }, (e) => {
			           uni.showToast({
			               title: '图片保存失败',
			               icon: 'none'
			           })
			           bitmap.clear()
			       });
			   }, (e) => {
			       uni.showToast({
			           title: '图片保存失败',
			           icon: 'none'
			       })
			       bitmap.clear()
			   });
		},
		
        fenxiang_weixin(){
			var that=this
          this.type=1
			uni.share({
			    provider: "weixin",
			    scene: "WXSceneSession",
			    type: 2,
			    imageUrl: that.dizhi,
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
		},
		fenxiang_pengyouquan(){
			var that=this
			uni.share({
			    provider: "weixin",
			    scene: "WXSenceTimeline",
			    type: 2,
			    imageUrl: that.dizhi,
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
		},
		receiveRenderData(val) {
			console.log(val)
			this.base64 = val
		}
		
		
	}
};
</script>
<script module="renderScript" lang="renderjs">
	import html2canvas from 'html2canvas';
	export default {
		data() {
			return {

			}
		},
		mounted() {},
		methods: {
			// 发送数据到逻辑层
			emitData(e, ownerVm) {
				console.log(e)
				this.type=e
				const dom = document.getElementById('poster')
				
				html2canvas(dom, {
					width: dom.clientWidth, //dom 原始宽度
					height: dom.clientHeight,
					scrollY: 0, // html2canvas默认绘制视图内的页面，需要把scrollY，scrollX设置为0
					scrollX: 0,
					allowTaint:true,
					useCORS: true, //支持跨域，但好像没什么用
					scale:window.devicePixelRatio,
					dpi: window.devicePixelRatio, // window.devicePixelRatio是设备像素比
				
				}).then((canvas) => {
					// 将生产的canvas转为base64图片3
					
					// this.base64=canvas.toDataURL('image/png')
					// if(this.type==1){
					// 	console.log('weixin')
					// }else if(this.type==2){
					// 	console.log('朋友圈')
					// }else{
					// 	console.log('baocun')
					// }
					
					ownerVm.callMethod('receiveRenderData', canvas.toDataURL('image/png'))
				});

			}
		}
	};
</script>

<style>
.head {
	border-bottom: 2rpx solid #e8e8e8;
}
.mingpain_top{
		height: 543rpx;
		background: url(../../static/lsimg/ming_bg.png) no-repeat;
		background-size: 100% 100%;
		text-align: center;
		padding-top: 40rpx;
		box-sizing: border-box;
}
.mingpain_top_tx{
	width: 150rpx;
		height: 151rpx;
		background-color: #3c86c7;
		border: solid 3rpx #ceffee;
		border-radius: 100%;
		position: relative;
		margin: 0rpx auto 20rpx;
}
.tx{
	width: 100%;
	height: 100%;
	border-radius: 100%;
	
}
.ren{
		width: 18rpx;
		height: 18rpx;
		background-color: #ffad2b;
		border: solid 2rpx #ffffff;
		border-radius: 100%;
		position: absolute;
		bottom: 10rpx;
		right: 10rpx;
}
.mingpian_dizhi{
	margin: 20rpx 0;
}
.mingpian_dizhi image{
		width: 28rpx;
		height: 29rpx;
		vertical-align: middle;
		margin-right: 10rpx;
}
	
.mingpian_lvsuo image{
		width: 34rpx;
			height: 33rpx;
		vertical-align: middle;
		margin-right: 10rpx;
}
.mingpian_zhuanchang{
	margin-top: 36rpx;
}
.mingpian_zhuanchang text{
	display: inline-block;
		height: 60rpx;
		background-color: #39bf84;
		line-height: 60rpx;
		padding: 0 30rpx;
		margin-right: 20rpx;
}
.mingpian_zhuanchang text:last-child{
	margin-right: 0;
}
.ming_pian{
	text-align: center;
	margin-top: 65rpx;
}
.ming_pian image{
		width: 254rpx;
		height: 258rpx;
		margin-bottom: 30rpx;
}
#poster{
	padding-bottom: 160rpx;
}
.fenxiang{
	margin: 0rpx 0 50rpx;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
}
.fenxiang text{
	width: 150rpx;
	height: 2rpx;
	background-color: #c6c6c6;
	display: inline-block;
}
.fenxiang text:first-child{
	margin-right: 20rpx;
}
.fenxiang text:last-child{
	margin-left: 20rpx;
}
.fenxiang_list{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 100rpx 100rpx;
}
.fenxiang_item{
	text-align: center;
	
}
.fenxiang_item image{
		width: 62rpx;
		height: 61rpx;
		margin-bottom: 20rpx;
}

</style>
