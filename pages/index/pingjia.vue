<template>

	<view class="body">
		<view class="head">
			<view class="head_back">
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">发表评价</view>
			<view class=" head_right hei_30_bold"></view>
		</view>

		<view class="zi_body ">

			<view class="pingjia_top">
				<image :src="img_url+lvshi.photourl" mode="" class="ping_tx"></image>
				<view class="pingjia_top_right">
					<view class="ls_name">
						<text class="hei_30_bold">{{lvshi.nickname}}律师</text>
						<text class="hui_26">{{lvshi.province}}-{{lvshi.city}}</text>
					</view>
					<view class="pingjia_fuwu">
						<view class="qian_26">
							<image src="../../static/img/fuwu.png" mode=""></image>已服务<text class="lv_26">{{lvshi.replynum}}</text>人
						</view>
						<view class="qian_26" style="margin-left: 33rpx;">
							<image src="../../static/img/pingjia.png" mode=""></image>评价<text class="lv_26">{{lvshi.haopingnum}}</text>次
						</view>
					</view>
				</view>
			</view>

			<view class="pingjia_center">
				<view class="pingjia_xing hei_30_bold">
					<text style="position: relative;top: -4rpx;">服务评价：</text>
					<view class="xing_arry" :class="xing_number==1?'on1':xing_number==2?'on2':xing_number==3?'on3':xing_number==4?'on4':xing_number==5?'on5':''">
						<view class="xing" @click="xing(1)"></view>
						<view class="xing" @click="xing(2)"></view>
						<view class="xing" @click="xing(3)"></view>
						<view class="xing" @click="xing(4)"></view>
						<view class="xing" @click="xing(5)"></view>
					</view>
				</view>

				<textarea value="" placeholder="请在此评价律师服务，客观真实的评价有利于其他当事人选择律师（10字以上）。" maxlength="1000" class="hei_26 ping_shuru"
				 v-model="shuru_txt" />
				<view class="tu">
		<view class="tu_arry">
			<view class="img_tu"  v-for="(item,index) in arry_img" >
			<image :src="item" mode=""></image>
				<text class="del hong_26" @click="del(index)">X</text>
			</view>
		    <image src="@/static/img/up_tu.png" mode="" class="up_tu" @click="up_zheng"></image>
		</view>
	</view>
	
	
	</view>	
		<view class="yinxiang">
			<view class="yinxiang_top hei_30_bold">
				请选择律师印象：
			</view>
			<view class="yinxiang_arry qian_26">
				<text v-for="(item,index) in yinxiang_arry"  @click="xuan(item)" :class="{xuan_txt:arry.includes(item)}">{{item}}</text>
			</view>
		</view>
		
		<view class="baocun_btn">
		<button type="" class="bai_30 baocun_b" @click="save"><image src="@/static/img/fabu_icon.png" mode=""></image>发布评论</button>
		</view>	
		
		</view>

	</view>

</template>

<script>
	export default {

		data() {
			return {
				img_url: uni.getStorageSync('img_url'),
				xing_number:'1',
				arry_img:[],
				yinxiang_arry:['服务优质','学识渊博','经验丰富','待人诚恳','乐于助人','回复很快','形象专业','值得推荐 '],
				shuru_txt:'',
				arry:[],
				lawyerid:'',
				lvshi:''
			}
		},
		created() {

		},
		onLoad(option) {
            this.lawyerid=option.lsid
			this.huoqu_lvshi()
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			xuan(i){
				let that=this
				if(that.arry.includes(i)){
								//includes()方法判断是否包含某一元素,返回true或false表示是否包含元素，对NaN一样有效
								//filter()方法用于把Array的某些元素过滤掉，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素：生成新的数组
								that.arry=that.arry.filter(function (ele){return ele != i;});
								//this.arr=this.arr.filter((ele)=>ele!=i);
								//filter()为假时删除
							}else{
								if(that.arry.length<3){
								that.arry.push(i);
								}else{
									uni.showToast({
										title: '最多选择3项',
										duration: 2000,
										icon: "none"
									});
								}
							}
			},
		xing(i){
			console.log(i)
			this.xing_number=i
		},
		// 律师信息
		huoqu_lvshi(){
			this.$http
				.post({
					url: '/mapi/lawyer/lawyer',
					data: {
						lawyerid:this.lawyerid
					}
				})
				.then(res => {
					if (res.code == 0) {
						this.lvshi=res.data.lawyer
						console.log(res.data.lawyer)
					}
				});	
		},
		up_zheng() {
			let that = this
			uni.chooseImage({
				success(res) {
					console.log(res)
					// that.zheng_img = res.tempFilePaths[0];
					console.log(that.arry_img)
					// that.urlTobase64(res.tempFilePaths[0])
					for(var i=0;i<res.tempFilePaths.length;i++){
						uni.request({
							url: res.tempFilePaths[i],
							method: 'GET',
							responseType: 'arraybuffer',
							success: ress => {
								let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
								base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
								// console.log(base64)
								that.arry_img.push(base64) ;
								
							}
						})
					}
				
				}
			})
		},
		del(index){
			this.arry_img.splice(index,1)
		},
		save(){
			
			var that=this
			let baseUrl = '';
			if (process.env.NODE_ENV == 'development') {
			
			    baseUrl='/api'
				
				// #ifndef H5
				baseUrl='http://www.ls.xyz/'
				// #endif
				
			} else {
			    baseUrl = '' // 生产环境
			}
			if(this.shuru_txt==''){
				uni.showToast({
					title: '请输入评价',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			if(this.arry.length==0){
				uni.showToast({
					title: '请选择律师印象',
					duration: 2000,
					icon: 'none'
				});
				return false
			}
			
			uni.request({
			  url: baseUrl + '/index/lawyer/pingjia?lawyerid='+this.lawyerid,
			  method:'POST',
			  data: {
			  	xing:this.xing_number,
			  	pingjia:this.shuru_txt,
			  	yinxiang:this.arry,
			  	img:this.arry_img
			  },
			  header: {
			    'content-type': 'application/json'
			  },
			  success: function(resp) {
			    uni.hideLoading();
				if (resp.data.code == 0) {
					uni.showToast({
						title: '评价成功',
						duration: 2000,
						icon: 'none'
					});
					setTimeout(function(){
					uni.navigateTo({
						url:'ls_zhuye?lawyerid='+that.lawyerid
					})
					},2000)
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
					
				}
			  },
			  fail: function(resp) {
			   uni.showToast({
			   	title: resp.data.message,
			   	duration: 2000,
			   	icon: 'none'
			   });
			  }
			
			
			// this.$http
			// 	.post({
			// 		url: '/index/lawyer/pingjia?lawyerid='+this.lawyerid,
			// 		data: {
			// 			xing:this.xing_number,
			// 			pingjia:this.shuru_txt,
			// 			yinxiang:this.arry,
			// 			img:this.arry_img
			// 		}
			// 	})
			// 	.then(res => {
			// 		if (res.code == 0) {
			// 			uni.showToast({
			// 				title: '评价成功',
			// 				duration: 2000,
			// 				icon: 'none'
			// 			});
			// 			setTimeout(function(){
			// 			uni.reLaunch({
			// 				url:'ls_zhuye?lawyerid='+this.lawyerid
			// 			})
			// 			},2000)
			// 		}
			// 	});	
			
			})
			
			console.log(this.xing_number,this.shuru_txt,this.arry_img,this.arry)
		}
		}
	}
</script>

<style>
	page{
		background-color: #F7F7F7;
	}
	.head {
		border-bottom: 2rpx solid #F7F7F7;
	}
	.pingjia_fuwu{
		display: flex;
		margin-top: 30rpx;
		
	}
	.pingjia_fuwu text{
		margin: 0 6rpx;
	}
.pingjia_fuwu image{
		width: 27rpx;
		height: 23rpx;
		margin-right: 9rpx;
}
.ping_tx{
		width: 110rpx;
		height: 110rpx;
}
	
	.pingjia_top{
		display: flex;
		padding:  30rpx;
		justify-content: space-between;
		background-color: #FFFFFF;
	}
	.ls_name{
		display: flex;
		justify-content: space-between;
	}
	.pingjia_top_right{
		width: 80%;
	}
	.pingjia_center{
		background-color: #FFFFFF;
		margin: 20rpx 0;
        padding-bottom: 25rpx;
	}
	.pingjia_xing{
		height: 94rpx;
		display: flex;
		align-items: center;
		padding: 0 30rpx;
		border-bottom: 2rpx solid #F7F7F7;
	}
	.xing{
		background: url(../../static/img/xing_no.png) no-repeat;
		background-size: 100% 100% !important;
		width: 30rpx;
			height: 30rpx;
			margin-right: 6rpx;
	}
	.on1 .xing:nth-child(1){
		background: url(../../static/img/xing_on.png) no-repeat;
		background-size: 100% 100%;
	}
	.on2 .xing:nth-child(1),.on2 .xing:nth-child(2){
		background: url(../../static/img/xing_on.png) no-repeat;
		background-size: 100% 100%;
	}
	.on3 .xing:nth-child(1),.on3 .xing:nth-child(2),.on3 .xing:nth-child(3){
		background: url(../../static/img/xing_on.png) no-repeat;
		background-size: 100% 100%;
	}
	.on4 .xing:nth-child(1),.on4 .xing:nth-child(2),.on4 .xing:nth-child(3),.on4 .xing:nth-child(4){
		background: url(../../static/img/xing_on.png) no-repeat;
		background-size: 100% 100%;
	}
	.on5 .xing{
		background: url(../../static/img/xing_on.png) no-repeat;
		background-size: 100% 100%;
	}
	.xing_arry{
		display: flex;
		align-items: center;
	}
	.ping_shuru{
		padding: 30rpx ;
		width: 100%;
		box-sizing: border-box;
		height: 330rpx;
	}
	.up_tu{
			width: 140rpx;
			height: 140rpx;
			background-color: #f5f5f5;
			border-radius: 10rpx;
	}
	.tu_arry{
		display: flex;
		flex-wrap: wrap;
	}
	.img_tu{
		position: relative;
	}
	.del{
		position: absolute;
		top: 0;
		right: 14rpx;
	}
	.tu_arry image{
		width: 140rpx;
		height: 140rpx;
		margin-right: 10rpx;
		margin-bottom: 10rpx;
	}
	.tu{
		padding: 0 30rpx;
		display: flex;
		flex-wrap: wrap;
	}
	.yinxiang{
		background-color: #FFFFFF;
		padding: 0 30rpx 10rpx;
	}
	.yinxiang_top{
		line-height: 100rpx;
	}
	.yinxiang_arry{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.yinxiang_arry text{
		width: 154rpx;
		height: 50rpx;
			background-color: #f5f5f5;
			border-radius: 25rpx;
			display: inline-block;
			margin-bottom: 30rpx;
			text-align: center;
			line-height: 50rpx;
	}
	.baocun_btn{
		padding: 0 30rpx;
		margin-top: 174rpx;
		margin-bottom: 50rpx;
	}
	.baocun_b {
			height: 88rpx;
			background-color: #0eb77e;
			border-radius: 44rpx;
			line-height: 88rpx;
	}
	.baocun_b image{
			width: 25rpx;
			height: 25rpx;
			margin-right: 16rpx;
	}
	.xuan_txt{
		background-color: #fdd8dc !important;
		color: #f43a51;
	}
</style>
