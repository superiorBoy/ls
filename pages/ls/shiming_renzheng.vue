<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">实名认证</view>
			<view class=" head_right hong_30">

			</view>
		</view>

		<view class="zi_body shiming_body">

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					姓名
				</view> <input type="text" value="" placeholder="请填写姓名" class="qian_28" v-model="name" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					性别
				</view> <label class="radio">
					<radio value="1" :checked="danxuan==1" @click="radio(1)" /><text class="nan">男</text>
					<radio value="2" :checked="danxuan==2" @click="radio(2)" /><text>女</text>
				</label>
			</view>
			<view class="shiming_list hei_28 zhiyezhao">
				<view class="shiming_list_left">
					律师头像
				</view>
				<view class="shiming_list_right" @click="up_zhiye">
					<image :src="zhiye_zhao" mode="" class="tx"></image>
					<image src="@/static/lsimg/go_r.png" mode="" class="genghuan"></image>
				</view>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					身份证号
				</view> <input type="text" value="" placeholder="请填写身份证号码" class="qian_28" v-model="shenfenhao" />
			</view>
			<view class="up">
				<view class=" up_zheng">
					<view :class="['up_box',zheng_img==''?'up_zheng_top': '']" @click="up_zheng">
						<image :src="zheng_img" mode=""></image>
					</view>
					<text class="hui_26">上传身份证正面</text>
				</view>
				<view class=" up_fan">
					<view  :class="['up_box' ,fan_img==''?'up_fan_top': '']" @click="up_fan">
						<image :src="fan_img" mode=""></image>
					</view>
					<text class="hui_26">上传身份证反面</text>
				</view>
			</view>

			<view class="renzheng_btn">

				<button type="" :class="['tijao bai_30',name==''|| shenfenhao==''||zheng_img==''||fan_img==''?'sty_dis':''] "  @click="tijiao" :disabled="name==''|| shenfenhao==''||zheng_img==''||fan_img==''">{{tijiao_txt}}</button>
			</view>


		</view>




	</view>



</template>

<script>
	export default {

		data() {
			return {
				name: '',
				shenfenhao: '',
				zheng_img: '',
				fan_img: '',
				zhiye_zhao: '',
				danxuan: false,
				dis:true,
				img_url: uni.getStorageSync('img_url'),
				tijiao_txt:'确认提交'
			}
		},
		created() {

		},
		onLoad(option) {
		this.$http
				.post({
					url: '/mlawyerapi/lawyer/auth',
					data:{
						type:1
					}
				})
				.then(res => {
					
					if(res.data.lawyerauth){
						
						this.name=res.data.lawyerauth.nickname
						this.danxuan=res.data.lawyerauth.sexid
						this.zhiye_zhao=this.img_url+res.data.lawyerauth.photourl
						this.shenfenhao=res.data.lawyerauth.idcard
						this.zheng_img=this.img_url+res.data.lawyerauth.idcardfront
						this.fan_img=this.img_url+res.data.lawyerauth.idcardback
						if(res.data.lawyerauth.isreal==1){
							this.tijiao_txt='提交修改'
						}else if(res.data.lawyerauth.isreal==4){
								this.tijiao_txt='认证中'
					      }else if(res.data.lawyerauth.isreal==3){
								this.tijiao_txt='失败：'+res.data.lawyerauth.realreason
								this.zhiye_zhao=''
								this.zheng_img=''
								this.fan_img=''
					       }
						
						
						
					}
					
					
				
					
				});

		},
		methods: {
			navigateBack() {
				uni.redirectTo({
					url:'my'
				})
			},
			up_zhiye() {
				let that = this
				uni.chooseImage({
					success(res) {
						console.log(res)
						that.zhiye_zhao = res.tempFilePaths[0];
						
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
								that.zhiye_zhao = base64;
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
										that.zhiye_zhao = data.target.result;	
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
			up_fan() {
				let that = this
				uni.chooseImage({
					success(res) {
						console.log(res)

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
								that.fan_img = base64;
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
											that.fan_img = data.target.result;	
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

				if (this.name == '') {
					uni.showToast({
						title: '请输入姓名',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (!this.danxuan) {
					uni.showToast({
						title: '请选择性别',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.shenfenhao == '') {
					uni.showToast({
						title: '请输入身份证号',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.zheng_img == '') {
					uni.showToast({
						title: '请上传身份证正面照',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.fan_img == '') {
					uni.showToast({
						title: '请上传身份证反面照',
						duration: 2000,
						icon: "none"
					});
					return false
				}

               if(this.tijiao_txt=='确认提交'){
               	var url='/lawyer/lawyer/zx_shiming_rz'
               }else if(this.tijiao_txt=='认证中'){
               	    return  false
               }else if(this.tijiao_txt=='提交修改'){
               	var url='/lawyer/lawyer/uprealname'
               }else{
				   var url='/lawyer/lawyer/zx_shiming_rz'
			   }




	      	this.$http
				.post({
					url: url,
					data:{
						xingming:this.name,
						sex:this.danxuan,
						touxiang:this.zhiye_zhao,
						shenfennumber:this.shenfenhao,
						zhengmian:this.zheng_img,
						fanmian:this.fan_img
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



				// console.log(this.name,this.danxuan,this.zhiye_zhao,this.shenfenhao,this.zheng_img,this.fan_img)
				console.log(this.name, 'name')
				console.log(this.danxuan, 'danxuan')
				console.log(this.zhiye_zhao, '执业照')
				console.log(this.shenfenhao, '身份号')
				console.log(this.zheng_img, '证')
				console.log(this.fan_img, '反')

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
		height: 300rpx;
	}

	.up {
		display: flex;
		justify-content: space-between;
		border-top: 20rpx solid #F8F8F8;
		padding-top: 30rpx;
		padding-left: 30rpx;
		padding-right: 30rpx;
	}

	.renzheng_btn {
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-bottom: 50rpx;
	}

	.up_zheng,
	.up_fan {
		text-align: center;
	}


.up_box{
	width: 330rpx;
	height: 220rpx;
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
		background: url(@/static/lsimg/shenfen_zheng.png) no-repeat;
		background-size: 100% 100%;
	}

	.up_fan_top {
		background: url(@/static/lsimg/shenfen_fan.png) no-repeat;
		background-size: 100% 100%;
	}

	.tijao {
		height: 89rpx;
		background-color: #F43A51;
		border-radius: 44rpx;
		margin-top: 200rpx;
		
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
		width: 240rpx;
		height: 240rpx;
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
</style>
