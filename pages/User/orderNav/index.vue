<template>
	<view class='order-nav-box'>
	    <view class='order-nav-top'>
	        <view class='order-nav-title'>订单中心</view>
	        <view class='order-more' @click='goOrderCenter'>查看全部</view>
	    </view>
	    <view class='order-nav-main'>
	        <view class='order-nav-item' @click='goOrderCenter'>
	            <image class='order-nav-img' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/order-nav-1.png'></image>
	            <view class='order-nav-name'>待付款</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_pay<100&&orderInfo.waite_pay>0'>{{orderInfo.waite_pay}}</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_pay>99'>99+</view>
	        </view>
	        <view class='order-nav-item' @click='goOrderCenter'>
	            <image class='order-nav-img' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/order-nav-2.png'></image>
	            <view class='order-nav-name'>待发货</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_deliver<100&&orderInfo.waite_deliver>0'>{{orderInfo.waite_deliver}}</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_pay>99'>99+</view>
	        </view>
	        <view class='order-nav-item' @click='goOrderCenter'>
	            <image class='order-nav-img' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/order-nav-3.png'></image>
	            <view class='order-nav-name'>待收货</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_get<100&&orderInfo.waite_get>0'>{{orderInfo.waite_get}}</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_pay>99'>99+</view>
	        </view>
	        <view class='order-nav-item' @click='goCommentList'>
	            <image class='order-nav-img' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/order-nav-4.png'></image>
	            <view class='order-nav-name'>待评价</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_comment<100&&orderInfo.waite_comment>0'>{{orderInfo.waite_comment}}</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_pay>99'>99+</view>
	        </view>
	        <view class='order-nav-item' @click='goRefundList'>
	            <image class='order-nav-img' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/order-nav-5.png'></image>
	            <view class='order-nav-name'>退换/售后</view>
	            <view class='order-nav-num' v-if='orderInfo.after<100&&orderInfo.after>0'>{{orderInfo.after}}</view>
	            <view class='order-nav-num' v-if='orderInfo.waite_pay>99'>99+</view>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		props: {
			orderInfo: {
				type: Array,
				dafault() {
					return []
				}
			}
		},
		methods: {
			goOrderCenter() {
				
			},
			goCommentList() {},
			goRefundList() {}
		}
	}
</script>

<style>
	.order-nav-box {
	    background: #fff;
	    margin: 30rpx;
	    border-radius: 6rpx;
	}
	
	.order-nav-top {
	    display: flex;
	    align-items: baseline;
	    justify-content: space-between;
	    padding: 45rpx 30rpx 0 30rpx;
	}
	
	.order-nav-title {
	    font-weight: 600;
	    font-size: 28rpx;
	    color: #131313;
	}
	
	.order-more {
	    font-size: 26rpx;
	    color: #888;
	}
	
	.order-nav-main {
	    display: flex;
	    padding: 0 30rpx;
	}
	
	.order-nav-item {
	    position: relative;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	    flex: 1;
	    height: 200rpx;
	}
	
	.order-nav-img {
	    width: 50rpx;
	    height: 50rpx;
	}
	
	.order-nav-name {
	    font-size: 22rpx;
	    color: #131313;
	    margin-top: 30rpx;
	}
	
	.order-nav-num {
	    position: absolute;
	    top: 30rpx;
	    right: 15rpx;
	    padding: 4rpx 10rpx;
	    background: #e84545;
	    font-size: 20rpx;
	    color: #fff;
	    line-height: 1;
	    border-radius: 20rpx;
	}

</style>
