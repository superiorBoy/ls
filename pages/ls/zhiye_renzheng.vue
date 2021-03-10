<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">执业认证</view>
			<view class=" head_right hong_30">

			</view>
		</view>

		<view class="zi_body shiming_body">
             <view class="shiming_list hei_28">
				<view class="shiming_list_left">
					手机号码
				</view> <input type="text" value="" placeholder="请填写手机号码" class="qian_28" v-model="shouji" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					执业证号
				</view> <input type="text" value="" placeholder="请填写执业证号" class="qian_28" v-model="zhenghao" />
			</view>
			<view class="shiming_list hei_28 zhuanchang">
				<view class="shiming_list_left">
					专长领域
				</view> 
				<picker :range="zhuanchang_arry" mode='multiSelector' @change="zhuanchang_arryChange" :range-key="'shanchangname'" >
							<view class="zhuanchang_xuan">{{zhuanchang==''?'第一专长 第二专长 第三专长':zhuanchang}} <image src="@/static/lsimg/go_r.png" mode=""></image></view> 
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					职务
				</view> <input type="text" value="" placeholder="在律所承担的职务" class="qian_28" v-model="zhiwu" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					执业年份
				</view> <input type="text" value="" placeholder="执业年份，例如：2年" class="qian_28" v-model="nianfen" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					执业地区
				</view> 
				<pickerAddress @change="change" class='aaaaaa'><text class="dizhi ">{{dizhi==''?'选择职业地区':dizhi}}</text> <image src="@/static/lsimg/go_r.png" mode=""></image></pickerAddress>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					详细地址
				</view> <input type="text" value="" placeholder="请输入详细地址" class="qian_28" v-model="xiangxi" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					执业律所
				</view> <input type="text" value="" placeholder="请输入律所名称" class="qian_28" v-model="lvsuo" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					个人概括
				</view> <input type="text" value="" placeholder="请输入个人概括" class="qian_28" v-model="gaikuo" />
			</view>
	

			<view class="up">
				<view class=" up_zheng">
					<view :class="['up_box',zheng_img==''?'up_zheng_top': '']" @click="up_zheng">
						<image :src="zheng_img" mode=""></image>
					</view>
					<text class="qian_26">请上传您的执业证正面完整图片</text>
				</view>
			</view>

			<view class="renzheng_btn">

				<button type="" :class="['tijao bai_30',shouji==''||zhenghao==''||zhuanchang=='第一专长 第二专长 第三专长'|| zhiwu==''|| dizhi=='执业的地区'||lvsuo==''||gaikuo==''||shouji==''||zheng_img==''?'sty_dis':''] "  @click="tijiao" :disabled="zhenghao==''||zhuanchang=='第一专长 第二专长 第三专长'|| zhiwu==''||nianfen==''||dizhi=='执业的地区'||lvsuo==''||gaikuo==''||zheng_img==''">{{tijiao_txt}}</button>
			</view>


		</view>




	</view>



</template>

<script>
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue'
	export default {

		data() {
			return {
				shouji:'',
				zhenghao: '',
				zhuanchang:'',
				zhiwu: '',
				nianfen:'',
				dizhi:'',
				lvsuo: '',
				gaikuo: '',
				zheng_img: '',
				dis:true,
				zhuanchang_arry: [],
				img_url: uni.getStorageSync('img_url'),
				huoqu_zhuang:[],
				tijiao_txt:'确认提交',
				shan_id:[],
				state:0,
				xiangxi:''
			}
		},
		components: {
			pickerAddress
		},
		created() {

		},
		onLoad(option) {
         this.get_shanchang();
		 
		
		 

		},
		methods: {
			navigateBack() {
				uni.redirectTo({
					url:'my'
				})
			},
			// 获取律师擅长信息
			get_shanchang() {
				this.$http
					.post({
						url: '/mapi/lawyer/getshanchang'
					})
					.then(res => {
						this.huoqu_zhuang=res.data.shanchang
						var array = [];
						for (var key in res.data.shanchang) {
							array.push(res.data.shanchang[key]);
							
						}
						var san=[]
						for (var i=0;i<3;i++) {
							san.push(array)
						}
						this.zhuanchang_arry = san;
						this.huoqu_list()
					});
			},
	      change(data) {
				console.log(data)
				this.dizhi = data.data.join('-')
				console.log(data.data.join('-'))
			},
			huoqu_list(){
				this.$http
					.post({
						url: '/mlawyerapi/lawyer/auth',
								data:{
									type:2
								}
					})
					.then(res => {
						
						
						if(res.data.lawyerauth){
							this.shouji=res.data.lawyerauth.mobile
							this.zhenghao=res.data.lawyerauth.zhiye
							this.zhiwu=res.data.lawyerauth.zhiwu
							this.xiangxi=res.data.lawyerauth.address
							this.lvsuo=res.data.lawyerauth.lvsuo
							this.gaikuo=res.data.lawyerauth.miaoshu
							this.zheng_img=uni.getStorageSync('img_url')+res.data.lawyerauth.zhiyephoto
							this.dizhi=res.data.lawyerauth.province+"-"+res.data.lawyerauth.city+"-"+res.data.lawyerauth.area
							this.nianfen=res.data.lawyerauth.zhiyenianfen
							this.zhuanchang=this.huoqu_zhuang[res.data.lawyerauth.expertise1].shanchangname+"-"+this.huoqu_zhuang[res.data.lawyerauth.expertise2].shanchangname+"-"+this.huoqu_zhuang[res.data.lawyerauth.expertise3].shanchangname
							
							this.shan_id=[]
							this.shan_id.push(res.data.lawyerauth.expertise1)
							this.shan_id.push(res.data.lawyerauth.expertise2)
							this.shan_id.push(res.data.lawyerauth.expertise3)
							if(res.data.lawyerauth.iszhiye==1){
								this.tijiao_txt='提交修改'
								this.state=2
							}else if(res.data.lawyerauth.iszhiye==3){
								this.tijiao_txt='失败：'+res.data.lawyerauth.zhiyereason	
								this.zheng_img=''
							}else if(res.data.lawyerauth.iszhiye==4){
								this.tijiao_txt='认证中'
							}
							
							
						}
	
					});
				
			},
			zhuanchang_arryChange(data){
				 this.shan_id=[]
				console.log(data.target.value[0])
				var yi=this.zhuanchang_arry[0][data.target.value[0]].shanchangname
				var er=this.zhuanchang_arry[1][data.target.value[1]].shanchangname
				var san=this.zhuanchang_arry[2][data.target.value[2]].shanchangname
				this.shan_id.push(this.zhuanchang_arry[0][data.target.value[0]].shanchangid)
				this.shan_id.push(this.zhuanchang_arry[0][data.target.value[1]].shanchangid)
				this.shan_id.push(this.zhuanchang_arry[0][data.target.value[2]].shanchangid)
				this.zhuanchang=yi+'-'+er+'-'+san
				
			},
			up_zheng() {
				let that = this
				uni.chooseImage({
					success(res) {
						console.log(res)
						// that.zheng_img = res.tempFilePaths[0];
						console.log(that.zhiye_zhao)
						// that.urlTobase64(res.tempFilePaths[0])
						
						//#ifdef H5
						uni.request({
							url: res.tempFilePaths[0],
							method: 'GET',
							responseType: 'arraybuffer',
							success: ress => {
								let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
								base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
								// console.log(base64)
								that.zheng_img = base64;
							}
						})
						//#endif
					//#ifdef APP-PLUS
					
					let path = that.getLocalFilePath(res.tempFilePaths[0]);
					plus.io.resolveLocalFileSystemURL(
						path,
						function(entry) {
							entry.file(
								function(file) {
									var fileReader = new plus.io.FileReader();
									fileReader.onload = function(data) {
										that.zheng_img = data.target.result;	
									};
									fileReader.onerror = function(error) {
										console.log(error);
									};
									fileReader.readAsDataURL(file);
								},
								function(error) {
									console.log(error);
								}
							);
						},
						function(error) {
							console.log(error);
						}
					);
					
					//#endif
						
						
					}
				})
			},
		getLocalFilePath(path) {
			if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
				return path;
			}
			if (path.indexOf('file://') === 0) {
				return path;
			}
			if (path.indexOf('/storage/emulated/0/') === 0) {
				return path;
			}
			if (path.indexOf('/') === 0) {
				var localFilePath = plus.io.convertAbsoluteFileSystem(path);
				if (localFilePath !== path) {
					return localFilePath;
				} else {
					path = path.substr(1);
				}
			}
			return '_www/' + path;
		},
			// 转化base64格式
			urlTobase64(url) {
				uni.request({
					url: url,
					method: 'GET',
					responseType: 'arraybuffer',
					success: ress => {
						let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
						base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
						// console.log(base64)
					}
				})
			},
			radio(e) {
				this.danxuan = e
			},
			tijiao() {

            if (this.shouji == '') {
					uni.showToast({
						title: '请输入手机号码',
						duration: 2000,
						icon: "none"
					});
					return false
				} 
				if (this.zhenghao == '') {
					uni.showToast({
						title: '请输入执业证号',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.zhuanchang=='') {
					uni.showToast({
						title: '请选择专长',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.zhiwu == '') {
					uni.showToast({
						title: '请输入职务',
						duration: 2000,
						icon: "none"
					});
					return false
				}  else if (this.nianfen == '') {
					uni.showToast({
						title: '请输入年份',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.dizhi == '') {
					uni.showToast({
						title: '请选择地址',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.xiangxi == '') {
					uni.showToast({
						title: '请输入详细地址',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.lvsuo == '') {
					uni.showToast({
						title: '请输入律所',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.gaikuo == '') {
					uni.showToast({
						title: '请输入概括',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.zheng_img == '') {
					uni.showToast({
						title: '请上传执业证',
						duration: 2000,
						icon: "none"
					});
					return false
				}
				
				var di=this.dizhi.split('-');
				// var zhuan=this.zhuanchang.split('-');
				// console.log(this.huoqu_zhuang)
				// console.log(zhuan)
				// return false
				
				
				if(this.tijiao_txt=='确认提交'){
					var url='/lawyer/lawyer/zx_zhiye_rz'
				}else if(this.tijiao_txt=='认证中'){
               	    return  false
               }else if(this.tijiao_txt=='提交修改'){
					var url='/lawyer/lawyer/upzhiye'
				}else{
					var url='/lawyer/lawyer/zx_zhiye_rz'
				}
				
				this.$http
					.post({
						url: url,
						data:{
							    phone:this.shouji,
								zhenghao:this.zhenghao,
								zhengjian:this.zheng_img,
								zhuangchang1:this.shan_id[0],
								zhuangchang2:this.shan_id[1],
								zhuangchang3:this.shan_id[2],
								zhiwu:this.zhiwu,
								nianfen:this.nianfen,
								sheng:di[0],
								shi:di[1],
								qu:di[2],
								address:this.xiangxi,
								dizhi:this.dizhi,
								gaikuo:this.gaikuo
						}
					})
					.then(res => {
						if(res.code==0){
							uni.showToast({
								title: '上传成功',
								duration: 2000
							});
						}
					});
				
				
				
				
  
			console.log(di)
				console.log(this.zhenghao,this.zhuanchang,this.zhiwu,this.nianfen,this.dizhi,this.lvsuo,this.gaikuo,this.zheng_img,)


			}
		}
	}
</script>

<style>
	.head {
		border-bottom: 2rpx solid #E8E8E8;
	}

	.shiming_list {
		height: 100rpx;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #E8E8E8;
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.shiming_list input {
		width: 500rpx;
	}

	.shiming_list_left {
		width: 169rpx;
	}

	.zhiyezhao {
		justify-content: space-between;
	}

	.up {
		display: flex;
		justify-content: center;
		border-top: 20rpx solid #F8F8F8;
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.renzheng_btn {
		padding-left: 30rpx;
		padding-right: 30rpx;
		margin-bottom: 30rpx;
	}

	.up_zheng
	 {
		text-align: center;
	}


.up_box{
	width: 586rpx;
		height: 256rpx;
		
		border-radius: 3rpx;
	margin-bottom: 15rpx;
	border-radius: 3rpx;
	border: solid 1rpx #f4f4f4;
	background-color: #FFFFFF;
}
	.up_box image,
	.up_box image {
		width: 100%;
		height:  100%;
	}

	.up_zheng_top {
		background: url(@/static/lsimg/up_zhiye_bg.png) no-repeat;
		background-size: 100% 100%;
	}



	.tijao {
		height: 89rpx;
		background-color: #F43A51;
		border-radius: 44rpx;
		margin-top: 110rpx;
		line-height: 89rpx;
	}

	.nan {
		margin-right: 55rpx;
	}

	.shiming_list_right {
		display: flex;
		align-items: center;
	}

	.tx {
		width: 80rpx;
		height: 80rpx;
		border-radius: 100%;
	}

	.genghuan {
		width: 14rpx;
		height: 24rpx;
		margin-left: 12rpx;
	}
	.sty_dis{
		color: #FFFFFF;
		border: none;
		background-color: #999999;
	}
	.zhuanchang{
		
	}
	.zhuanchang_xuan,.aaaaaa{
		display: flex;
		align-items: center;
		width:520rpx;
		justify-content: space-between;
		color: #777777;
	}
	input{
		color: #777777 !important;
	}
	.zhuanchang image,.aaaaaa image{
			width: 13rpx;
			height: 23rpx;;
			position: absolute;
			right: 30rpx;
	}
	.dizhi{
		color: #777777;
	}
</style>
