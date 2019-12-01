<template>
	<view class='message-swiper-box'>
	    <view class='message-swiper-main'>
	        <image class='message-swiper-icon' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/message-icon.png'></image>
	        <swiper class='message-swiper' vertical="true" autoplay="true" interval="3000" duration="500" circular="true">
	            <swiper-item class='message-item' v-for='(item,index) in messageList' :key='index'>{{item}}</swiper-item>
	        </swiper>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				messageList: [
				            '热烈祝贺 李**升级成为了百领金牌店主',
				            '热烈祝贺 谭**升级成为了百领金牌店主',
				            '热烈祝贺 马**升级成为了百领服务商',
				            '热烈祝贺 陈**升级成为了百领店主',
				            '热烈祝贺 孙**升级成为了百领店主',
				            '热烈祝贺 赵**升级成为了百领服务商',
				            '热烈祝贺 李**升级成为了百领服务商',
				            '热烈祝贺 谭**升级成为了百领金牌店主',
				            '热烈祝贺 黎**升级成为了百领服务商',
				            '热烈祝贺 傅**升级成为了百领店主',
				            '热烈祝贺 梁**升级成为了百领店主',
				            '热烈祝贺 赵**升级成为了百领服务商'
				        ]
			}
		}
	}
</script>

<style>
	.message-swiper-box {
	    margin: 30rpx;
	    background: #fff;
	    border-radius: 6rpx;
	}
	
	.message-swiper-main {
	    display: flex;
	    align-items: center;
	    height: 80rpx;
	    padding: 0 18rpx;
	    background: #fff;
	}
	
	.message-swiper-icon {
	    width: 32rpx;
	    height: 28rpx;
	}
	
	.message-swiper {
	    flex: 1;
	    padding: 0 20rpx;
	    height: 80rpx;
	}
	
	.message-item {
	    line-height: 80rpx;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    font-size: 20rpx;
	    color: #131313;
	}
</style>
