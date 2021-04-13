<template>

	<view class="body">
		<view class="head">
			<view class="head_back" >
				<image src="@/static/img/back.png" mode="" @click="navigateBack()"></image>
			</view>
			<view class="head_center hei_38_bold">上传案例</view>
			<view class=" head_right hei_30_bold" >
				<text @click="save">保存</text>
			</view>
		</view>

		<view class="zi_body shiming_body">

			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					案件类型
				</view>
				<picker :range="lei" @change="leixing_change" class="picker">
					<view :class="['zhuanchang_xuan',leixing=='请选择'?'qian_26':'hei_26']"><text>{{leixing}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					案件标题
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="biaoti" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					案件专长
				</view>
				<picker :range="fenlei" @change="zhuanchang_change" :range-key="'typename'" class="picker">
					<view :class="['zhuanchang_xuan',zhuanchang=='请选择'?'qian_26':'hei_26']"><text>{{zhuanchang}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					案号
				</view>
				<input type="text" value="" placeholder="例：(2018)浙0104民初9333号" class="hei_26" v-model="anhao" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					判决时间
				</view>
				<picker mode='date' @change="biye_change" class="picker">
					<view :class="['zhuanchang_xuan',shijian=='请选择'?'qian_26':'hei_26']">{{shijian}}
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					审理法院
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="fayuan" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					案件标的
				</view>
				<input type="text" value="" placeholder="请填写，如260000元" class="hei_26" v-model="biaodi" />
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					所属行业
				</view>
				<input type="text" value="" placeholder="如：餐饮行业" class="hei_26" v-model="hangye" />
			</view>
				
			<view class="shiming_list hei_28" @click="go_neirong">
				<view class="shiming_list_left">
					案情内容
				</view>
				<view class="zhuanchang_xuan hei_26"><text class="neirong_txt">{{neirong}}</text>
					<image src="@/static/lsimg/go_r.png" mode=""></image>
				</view>
			</view>
				
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					代理方向
				</view>
				<picker :range="fangxiang_arry" @change="fangxiang_change" class="picker">
					<view :class="['zhuanchang_xuan',fangxiang=='请选择'?'qian_26':'hei_26']"><text>{{fangxiang}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					判决结果
				</view>
				<picker :range="jieguo_arry" @change="jieguo_change" class="picker">
					<view :class="['zhuanchang_xuan',jieguo=='请选择'?'qian_26':'hei_26']"><text>{{jieguo}}</text>
						<image src="@/static/lsimg/go_r.png" mode=""></image>
					</view>
				</picker>
			</view>
			<view class="shiming_list hei_28">
				<view class="shiming_list_left">
					我的价值
				</view>
				<input type="text" value="" placeholder="请填写" class="hei_26" v-model="jiazhi" />
			</view>
		</view>

	</view>



</template>

<script>
	export default {

		data() {
			return {
				ruxue: '请选择',
				shijian: '请选择',
				xuexiao: '',
				leixing: '诉讼案件',
				lei: ['诉讼案件'],
				zhuanchang: '请选择',
				fangxiang: '请选择',
				jieguo: '请选择',
				fenlei: [],
				fangxiang_arry: ['原告', '被告', '上诉人', '被上诉人', '申请人', '被害人', '自诉人', '刑事附带民事原告人', '刑事附带民事被告人', '其他'],
				jieguo_arry: ['胜诉', '败诉', '达成和解', '原告撤诉', '执行到位', '获得改判', '维持原判', '缓刑', '少刑', '无罪释放', '其他'],
				biaoti: '',
				anhao: '',
				biaodi: '',
				hangye: '',
				jiazhi: '',
				fayuan: '',
				neirong: '',
				zhuanchang_id:'',
				state:'',
				lyanliid:''


			}
		},
		created() {

		},
		onLoad(option) {
			
			if(option.lyanliid){
				this.lyanliid=option.lyanliid
				this.state=2
				
			}
			
			
		// 获取分类
			this.$http
				.post({
					url: '/mapi/index/gettype'
				})
				.then(res => {
					var array = [];
					for (var key in res.data.type) {
						array.push(res.data.type[key]);
					}
					this.fenlei = array;
					this.zhuan=res.data.type
					if(option.lyanliid){
						this.xq()
						
					}
					
				});
		},
		onShow() {
		var that=this
		uni.getStorage({
		    key: 'neirong',
		    success: function (res) {
		        	that.neirong=res.data
		    }
		}) 
		},
		methods: {
			navigateBack() {
				uni.navigateBack()
			},
			go_neirong(){
				uni.navigateTo({
					url:'up_neirong?lyanliid='+this.lyanliid
				})
			},
			xq(){
				this.$http
					.post({
						url: '/mapi/lawyer/anli_xq',
						data:{
							lyanliid:this.lyanliid
						}
					})
					.then(res => {
						this.lyanli=res.data.anli
						this.biaoti=res.data.anli.title
						this.zhuanchang = this.zhuan[res.data.anli.typeid].typename;
						this.zhuanchang_id = res.data.anli.typeid;
						this.anhao=res.data.anli.anlinum
						this.shijian= res.data.anli.endtime
						this.fayuan= res.data.anli.fayuan
						this.biaodi= res.data.anli.anlibiao
						this.hangye= res.data.anli.hangye
						this.neirong= res.data.anli.information
						this.fangxiang= res.data.anli.daili
						this.jieguo= res.data.anli.jieguo
						this.jiazhi= res.data.anli.jiazhi
						uni.setStorage({
												key: 'neirong',　　　　　　　　　　　　
												data: this.neirong,　
												success: function () {　 
													
												}
											}) 
					});
			},
			ruxue_change(data) {
				this.ruxue = data.detail.value
			},
			biye_change(data) {
				this.shijian = data.detail.value
			},
			leixing_change(data) {
				this.leixing = this.lei[data.detail.value]
			},
			zhuanchang_change(e) {
				this.zhuanchang = this.fenlei[e.detail.value].typename;
				this.zhuanchang_id = this.fenlei[e.detail.value].typeid;
			},
			fangxiang_change(data) {
				this.fangxiang = this.fangxiang_arry[data.detail.value]
			},
			jieguo_change(data) {
				this.jieguo = this.jieguo_arry[data.detail.value]
			},
			save() {

                  console.log(this.zhuanchang_id)


				if (this.leixing == '请选择') {
					uni.showToast({
						title: '请选择案件类型',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.biaoti == '') {
					uni.showToast({
						title: '请输入案件标题',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.zhuanchang == '请选择') {
					uni.showToast({
						title: '请选择案件专长',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.anhao == '') {
					uni.showToast({
						title: '请输入案号',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.shijian == '请选择') {
					uni.showToast({
						title: '请选择判决时间',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.fayuan == '') {
					uni.showToast({
						title: '请输入审理法院',
						duration: 2000,
						icon: "none"
					});
					return false
				} 
				else if (this.biaodi == '') {
					uni.showToast({
						title: '请输入案件标的',
						duration: 2000,
						icon: "none"
					});
					return false
				} else if (this.hangye == '') {
					uni.showToast({
						title: '请输入所属行业',
						duration: 2000,
						icon: "none"
					});
					return false
				}  else if (this.neirong == '') {
					uni.showToast({
						title: '请输入内容',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.fangxiang == '请选择') {
					uni.showToast({
						title: '请选择代理方向',
						duration: 2000,
						icon: "none"
					});
					return false
				}
				else if (this.jieguo == '请选择') {
					uni.showToast({
						title: '请选择判决结果',
						duration: 2000,
						icon: "none"
					});
					return false
				}else if (this.jiazhi == '') {
					uni.showToast({
						title: '请输入我的价值',
						duration: 2000,
						icon: "none"
					});
					return false
				} 

if(this.state==2){
	this.$http
					.post({
						url: '/lawyer/lawyer/upanli',
						data:{
							bianti:this.biaoti,
							zhuanchang:this.zhuanchang_id,
							anhao:this.anhao,
							nianyueri:this.shijian,
							fayuan:this.fayuan,
							biaodi:this.biaodi,
							hangye:this.hangye,
							neirong:this.neirong,
							fangxiang:this.fangxiang,
							jieguo:this.jieguo,
							jiazhi:this.jiazhi,
							lyanliid:this.lyanliid
						}
					})
					.then(res => {
						uni.removeStorage('neirong')
						if(res.code==0){
							uni.showToast({
								title: '修改成功',
								duration: 2000
							});
							setTimeout(function(){
											uni.navigateBack()
										},2000)
							
						}
					});
}else{
	

             this.$http
				.post({
					url: '/lawyer/lawyer/zx_upanli',
					data:{
						bianti:this.biaoti,
						zhuanchang:this.zhuanchang_id,
						anhao:this.anhao,
						nianyueri:this.shijian,
						fayuan:this.fayuan,
						biaodi:this.biaodi,
						hangye:this.hangye,
						neirong:this.neirong,
						fangxiang:this.fangxiang,
						jieguo:this.jieguo,
						jiazhi:this.jiazhi
					}
				})
				.then(res => {
					uni.removeStorage('neirong')
					if(res.code==0){
						uni.showToast({
							title: '上传成功',
							duration: 2000
						});
						setTimeout(function(){
										uni.navigateBack()
									},2000)
						
					}
				});

}


				console.log(this.leixing, this.biaoti, this.zhuanchang, this.anhao, this.shijian)
				console.log(this.fayuan, this.biaodi, this.hangye, this.neirong, this.fangxiang)
				console.log(this.jieguo, this.jiazhi)
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
		justify-content: space-between;
		border-bottom: 2rpx solid #E8E8E8;
		padding-left: 30rpx;
		padding-right: 30rpx;
		position: relative;
	}

	.shiming_list:last-child {
		margin-bottom: 100rpx;
	}

	.shiming_list input {
		width: 500rpx;
		text-align: right;

	}

	.shiming_list_left {
		width: 170rpx;
	}

	.jianjie {
		padding: 0 30rpx;
		line-height: 100rpx;
	}

	.jianjie_txt {
		font-size: 28rpx;
		width: 100%;
	}

	.zhuanchang_xuan {
		/* width: 500rpx; */
		padding-right: 30rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: right;
		text-align: right;
		position: relative;
	}

	.zhuanchang_xuan image {
		width: 13rpx;
		height: 23rpx;
		position: absolute;
		right: 0;

	}
	.neirong_txt{
		display: inline-block;
		overflow:hidden; 
		text-overflow:ellipsis; 
		white-space:nowrap; 
		max-width: 500rpx;
		height: 40rpx;
	}
/* 	.picker image{
		right: 0;
	} */
</style>
