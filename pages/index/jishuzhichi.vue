<template>
  <view class="body">
    <view class="head">
      <view class="head_back">
        <image
          src="@/static/img/back.png"
          mode=""
          @click="navigateBack()"
        ></image>
      </view>
      <view class="head_center hei_38_bold">技术支持</view>
      <view class="head_right hei_30_bold"></view>
    </view>

    <view class="zi_body hei_30">
     <image src="@/static/img/jszc.png" mode="widthFix" style="width: 100%;"></image>
	 <view class="jishu_list">
	 	<view class="jishu_list_left">
	 	<image src="@/static/img/company.png" mode="" style="width: 28rpx;height: 30rpx;"></image>	公司名称
	 	</view>
		<text> 台州律易网络科技有限公司</text>
	 </view>
	 <view class="jishu_list">
	 	<view class="jishu_list_left">
	 	<image src="@/static/img/phone.png" mode=""style="width: 24rpx;height: 30rpx;"></image>	电话
	 	</view>
	 		<text>0576-83885500</text>
	 </view>
	 <view class="jishu_list">
	 	<view class="jishu_list_left">
	 	<image src="@/static/img/address.png" mode=""style="width: 25rpx;height: 30rpx;"></image>	地址
	 	</view>
	 		<text> 浙江省台州市天台县国际大厦8楼</text>
	 </view>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  created() {},
  onLoad(option) {
	  
	
  },
  methods: {
    navigateBack() {
      uni.navigateBack();
    },
   
	
  },
};
</script>

<style>
.head {
  border-bottom: 2rpx solid #f7f7f7;
}

.zi_body{
	
}

	.jishu_list{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		border-bottom: 2rpx solid #EEEEEE;
		padding: 0 30rpx;
		}
		.jishu_list image{
			margin-right: 10rpx;
		}
		.jishu_list_left{
			display: flex;
			align-items: center;
		}
</style>
