<template>
	<view>
	    <!-- <image class="save-tips-img" :src="saveTipsImg" style="top:{{statusBarHeight}}px"></image> -->
	    <!-- 用户信息 -->
	    <user-info
			:showConcat='showConcat'
			:userInfo='userInfo'
			:messageInfo='messageInfo'
			:unionID='unionID'
			:saveTipsImg='saveTipsImg'
		></user-info>
	    <!-- 用户信息 -->
		
		<!-- 订单导航栏 -->
		<order-nav :orderInfo='orderInfo'></order-nav>
		<!-- 订单导航栏 -->
	
	    <!-- 用户权益 -->
	    <user-legal :userInfo='userInfo'></user-legal>
	    <!-- 用户权益 -->
	
	    <!-- 用户数据 -->
	    <user-data :userInfo='userInfo'></user-data>
	    <!-- 用户数据 -->

	
	    <!-- 消息轮播 -->
	    <message></message>
	    <!-- 消息轮播 -->
	
	    <!-- 店铺管理 -->
	    <!-- <shop userInfo='{{userInfo}}'></shop> -->
	    <!-- 店铺管理 -->
	
	    <!-- 个人中心广告图 -->
	    <image class='adv' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/userCenter-adv-1.jpg'></image>
	    <!-- 个人中心广告图 -->
	
	    <!-- 授权板块 -->
	    <!-- <empower userInfo='{{userInfo}}' wx:if='{{userInfo.role_type>1}}'></empower> -->
	    <!-- 授权板块 -->
	
	    <!-- 功能列表 -->
	    <!-- <user-func :invite='invite' userInfo='userInfo'></user-func> -->
	    <!-- 功能列表 -->
	
	    <!-- 联系邀请人 -->
	    <!-- <concat-inviter showInviter='{{showInviter}}' bind:closeConcat='closeConcat' inviterConcat='{{inviterConcat}}'></concat-inviter> -->
	    <!-- 联系邀请人 -->
	
	    <view class="exit-login" @click="exitLogin">退出登录</view>
	
	    <!-- 分享图片 -->
	    <!-- <view class='share-img-box' >
	        <view class="preview-img-box">
	            <image class='preview-img' :src='previewImg'</image>
	        </view>
	        <scroll-view class='img-swiper' scroll-x>
	            <image :src='item' v-for='shareImg' :key='index'></image>
	        </scroll-view>
	        <view class='download-btn' catchtap='downloadImg'>保存图片</view>
	    </view> -->
	    <!-- <canvas class="share-canvas" canvas-id='shareCanvas' style="width: 750px; height: 1234px;"></canvas> -->
	    <!-- 分享图片 -->
	
	</view>
</template>

<script>
	import message from './message'
	import orderNav from './orderNav'
	import userData from './userData'
	import userInfo from './userInfo'
	import userLegal from './userLegal'
	export default {
		data() {
			return {
				userInfo: {
					heard_img: 'https://mozi.bailingyoupin.com/static/images/wx_sm/home/box-shadow.png',
					nickname: 'Reeyou',
					role_type: 0,
					user_id: 10,
					history_money: 10,
					money: 10,
					wait_money: 10,
					exploit_money: 100
				},
				orderInfo: {
					waite_pay: 999,
					waite_deliver: 88,
					waite_get: 100,
					waite_comment: 10,
					after: 10
				},
			}
		},
		components: {
			message,
			orderNav,
			userData,
			userInfo,
			userLegal
		}
	}
</script>

<style>
	page {
	    background: #f7f7f7;
	}
	
	.adv {
	    display: block;
	    width: 100%;
	    margin-top: 40rpx;
	}
	
	.share-img-box {
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background-color: rgba(0, 0, 0, 0.7);
	    z-index: 2;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	}
	
	.preview-img-box {
	    position: relative;
	    width: 500rpx;
	    height: 887rpx;
	}
	
	.share-canvas {
	    position: absolute;
	    top: -5000rpx;
	    left: -5000rpx;
	    opacity: 0;
	    z-index: 2;
	}
	
	.preview-img {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 500rpx;
	    height: 887rpx;
	    z-index: 3;
	}
	
	.img-swiper {
	    width: 600rpx;
	    margin-top: 30rpx;
	    white-space: nowrap;
	}
	
	.img-swiper image {
	    width: 150rpx;
	    height: 266rpx;
	    margin-right: 30rpx;
	}
	
	.download-btn {
	    margin-top: 30rpx;
	    width: 240rpx;
	    height: 80rpx;
	    line-height: 80rpx;
	    text-align: center;
	    background: #000;
	    border-radius: 10rpx;
	    font-size: 28rpx;
	    color: #fff;
	}
	
	.exit-login{
	  width: 100%;
	  height: 90rpx;
	  line-height: 90rpx;
	  color: #d71a09;
	  font-size: 28rpx;
	  text-align: center;
	  margin: 20rpx 0;
	  background-color: #fff;
	}
	
	.save-tips-img {
	    position: fixed;
	    right: 30rpx;
	    width: 482rpx;
	    height: auto;
	    z-index: 3;
	}
</style>
