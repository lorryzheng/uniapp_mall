<template>
	<view class='user-info-box'>
	    <view class="legal-date">{{userInfo.vip_expire}}</view>
	    <view class="legal-info">
	        <view class="legal-item" @click="goShopkeeperGifts">
	            <view class="legal-detail">{{userInfo.buy_num}}次/月</view>
	            <view class="legal-name">店主权益</view>
	        </view>
	        <view class="legal-item" @click='goTeamData'>
	            <view class="legal-detail">{{userInfo.low_all}}人</view>
	            <view class="legal-name">数据管理</view>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					vip_expire: 10,
					buy_num: 10,
					low_all: 10
				}
			}
		},
		methods: {
			goShopkeeperGifts() {
				
			},
			goTeamData() {
				
			}
		}
	}
</script>

<style>
	.user-info-box {
	    margin: 30rpx;
	    padding: 0 34rpx;
	    background-image: url('https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/legal-bg.png');
	    background-size: 100%;
	    background-repeat: no-repeat;
	}
	
	.legal-date {
	    height: 68rpx;
	    line-height: 68rpx;
	    text-align: right;
	    font-size: 26rpx;
	    color: #ffe3c0;
	}
	
	.legal-info {
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    height: 116rpx;
	    padding: 0 22rpx;
	}
	
	.legal-item {
	    display: flex;
	}
	
	.legal-detail {
	    font-weight: 600;
	    font-size: 32rpx;
	    color: #ffebbf;
	}
	
	.legal-name {
	    width: 126rpx;
	    height: 42rpx;
	    line-height: 42rpx;
	    text-align: center;
	    background: #ffebbf;
	    border-radius: 60rpx;
	    font-size: 24rpx;
	    color: #334158;
	    margin-left: 20rpx;
	}
</style>
