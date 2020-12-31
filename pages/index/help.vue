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
      <view class="head_center hei_38_bold">帮助中心</view>
      <view class="head_right hei_30_bold"></view>
    </view>

    <view class="zi_body">
      <view class="help_top hei_24">
        <view class="help_item" v-for="item in leibie" @click="dalei(item.kindid)">
          <image :src=img_url+item.pic mode=""></image>
          <view class=""> {{item.kindname}} </view>
        </view>
      <!-- <view class="help_item">
          <image src="@/static/img/help2.png" mode=""></image>
          <view class=""> 我是公众 </view>
        </view>
        <view class="help_item">
          <image src="@/static/img/help3.png" mode=""></image>
          <view class=""> 我是律师 </view>
        </view>
        <view class="help_item">
          <image src="@/static/img/help4.png" mode=""></image>
          <view class=""> 服务声明 </view>
        </view> -->
      </view>

      <view class="help_txt qian_28"> 常见问题 </view>

      <view class="help_list hui_28" @click="xq(item.title,item.information)" v-for="item in wenti_list">
        <image src="@/static/img/wenhao.png" mode=""></image>
        {{item.title}}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id1: "5555",
      id2: "6666",
	  leibie:[],
	  img_url: uni.getStorageSync('img_url'),
	  wenti_list:[],
	  kind:''
    };
  },
  created() {},
  onLoad(option) {
	  
	  // 获取帮助类别
	  this.$http
	  	.post({
	  		url: '/mapi/user/kind'
	  	})
	  	.then(res => {
	  		this.leibie = res.data.kind;
	  	});
	  
	  this.huoqu_list()
  },
  methods: {
    navigateBack() {
      uni.navigateBack();
    },
    xq(title,body) {
      uni.navigateTo({
        url: "help_xq?title=" + title +"&body="+body
		// url: "help_xq?item=" + this.id1 + "&id2=" + this.id2,
      });
    },
	// 点击大类
	dalei(kind){
		this.kind=kind
		this.huoqu_list()
	},
	huoqu_list(){
		// 获取帮助类别
		this.$http
			.post({
				url: '/mapi/user/help',
				data:{
					kindid:this.kind
				}
			})
			.then(res => {
				this.wenti_list = res.data.support;
			});
	}
  },
};
</script>

<style>
.head {
  border-bottom: 2rpx solid #f7f7f7;
}

.help_top {
  display: flex;
  flex-wrap: wrap;
  padding: 40rpx 0 10rpx;
}

.help_item {
  width: 25%;
  text-align: center;
  margin-bottom: 20rpx;
}

.help_item image {
  width: 70rpx;
  height: 70rpx;
  border-radius: 100%;
  margin-bottom: 10rpx;
}

.help_txt {
  height: 98rpx;
  background-color: #f7f7f7;
  line-height: 98rpx;
  padding-left: 30rpx;
}

.help_list {
  padding: 28rpx 30rpx;
  border-bottom: 2rpx solid #f7f7f7;
}

.help_list:last-child {
  margin-bottom: 40rpx;
}

.help_list image {
  width: 23rpx;
  height: 22rpx;
  margin-right: 12rpx;
}
</style>
