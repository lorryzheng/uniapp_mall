<template>
	<view class='user-info-box'>
	    <image class='user-info-bg' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/user-info-bg.png'></image>
	    <view class='system-message-box' @click='goMessageCenter'>
	        <image class='system-message-icon' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/message.png'></image>
	        <text class='system-message-num' v-if='messageInfo.all>0'>{{messageInfo.all}}</text>
	    </view>
	
	    <view class='user-info-main'>
	        <!-- <view class="get-info-btn-box" v-if='{{unionID==0}}'>
	            <button class='get-info-btn' bindgetuserinfo="getUserInfo" open-type="getUserInfo">获取个人信息</button>
	        </view> -->
	        <block>
	            <view class='user-info'>
	                <image class='invite-btn' src='https://mozi.bailingyoupin.com/static/images/wx_sm/userCenter/invite-btn.png' @click='goCall'></image>
	                <view class='user-img-box' @click='goUserInfo'>
	                    <image :src='userInfo.heard_img'></image>
	                </view>
	                <view class='user-info-detail'>
	                    <view class='user-name'>
	                        <view class='user-name-ellpsis'>{{userInfo.nickname}}</view>
	                        <view class='user-level'>{{roleList[userInfo.role_type]}}</view>
	                    </view>
	                    <view class='invite-code'>邀请码：{{userInfo.user_id}}</view>
	                </view>
	            </view>
	            <view class='user-data-main'>
	                <view class='user-data-item' @click='goIncome' data-type='all'>
	                    <view class='user-data-info'>{{userInfo.history_money}}</view>
	                    <view class='user-data-name'>累计收益</view>
	                </view>
	                <view class='user-data-item' @click='goAccount'>
	                    <view class='user-data-info'>{{userInfo.money}}</view>
	                    <view class='user-data-name'>余额</view>
	                </view>
	                <view class='user-data-item' @click='goIncome' data-type='wait'>
	                    <view class='user-data-info'>{{userInfo.wait_money}}</view>
	                    <view class='user-data-name'>待到账</view>
	                </view>
	                <view class='user-data-item' @click="goContribution">
	                    <view class='user-data-info'>{{userInfo.exploit_money}}</view>
	                    <view class='user-data-name'>贡献值</view>
	                </view>
	            </view>
	        </block>
	    </view>
	    <image class='shadow-line' src='https://mozi.bailingyoupin.com/static/images/wx_sm/home/box-shadow.png'></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				roleList: ['店主'],
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
				messageInfo: {}
			}
		},
		methods: {
			goMessageCenter() {
				
			},
			goUserInfo() {
				
			},
			goCall() {
				
			},
			goIncome() {
				
			},
			goAccount() {},
			goContribution() {
				
			}
		}
	}
</script>

<style>
	/* pages/user/userCenter/comps/userInfo/userInfo.wxss */
	
	.user-info-box {
	    position: relative;
	    padding: 148rpx 30rpx 0 30rpx;
	}
	
	.user-info-bg {
	    position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	}
	
	.system-message-box {
	    position: absolute;
	    top: 70rpx;
	    left: 50rpx;
	    width: 52rpx;
	    height: 52rpx;
	}
	
	.system-message-icon {
	    width: 100%;
	}
	
	.system-message-num {
	    position: absolute;
	    top: -10rpx;
	    right: -10rpx;
	    width: 30rpx;
	    height: 30rpx;
	    line-height: 30rpx;
	    text-align: center;
	    font-size: 20rpx;
	    color: #fff;
	    background: #e84545;
	    border-radius: 100%;
	}
	
	.user-info-main {
	    position: relative;
	    background: #fff;
	    border-radius: 6rpx;
	}
	
	.get-info-btn-box {
	    padding: 80rpx 0;
	}
	
	.get-info-btn {
	    margin: 0 auto;
	    width: 200rpx;
	    height: 60rpx;
	    line-height: 60rpx;
	    text-align: center;
	    background: #000;
	    border-radius: 6rpx;
	    font-size: 24rpx;
	    color: #fff;
	}
	
	.user-info {
	    position: relative;
	    display: flex;
	    align-items: center;
	    padding: 36rpx 180rpx 37rpx 38rpx;
	}
	
	.invite-btn {
	    position: absolute;
	    top: 32rpx;
	    right: 0;
	    width: 150rpx;
	    height: 54rpx;
	}
	
	.user-img-box {
	    width: 90rpx;
	    height: 90rpx;
	    border-radius: 100%;
	    overflow: hidden;
	}
	
	.user-img-box image {
	    width: 90rpx;
	    height: 90rpx;
	}
	
	.user-info-detail {
	    flex: 1;
	    padding: 0 20rpx;
	}
	
	.user-name {
	    display: flex;
	    align-items: center;
	}
	
	.user-name-ellpsis {
	    max-width: 200rpx;
	    font-weight: 600;
	    font-size: 36rpx;
	    color: #131313;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	
	.user-level {
	    margin-left: 20rpx;
	    width: 110rpx;
	    line-height: 38rpx;
	    background: #000;
	    border-radius: 60rpx;
	    text-align: center;
	    font-weight: normal;
	    font-size: 24rpx;
	    color: #ffebbf;
	}
	
	.invite-code {
	    margin-top: 6rpx;
	    font-size: 26rpx;
	    color: #131313;
	}
	
	.user-data-main {
	    display: flex;
	    padding: 36rpx 0 30rpx 0;
	}
	
	.user-data-item {
	    flex: 1;
	    text-align: center;
	}
	
	.user-data-info {
	    font-weight: 600;
	    font-size: 32rpx;
	    color: #131313;
	}
	
	.user-data-name {
	    font-size: 24rpx;
	    color: #131313;
	    margin-top: 14rpx;
	}
	
	.shadow-line {
	    display: block;
	    width: 100%;
	}

</style>
