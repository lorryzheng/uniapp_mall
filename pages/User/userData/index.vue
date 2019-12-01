<template>
	<view class='user-info-box'>
	    <view class='user-info-title'>我的地盘</view>
	    <view class='user-info-main'>
	        <view class='user-info-item' @click='goTeamList'>
	            <view class='user-info-detail'>{{userInfo.low3}}</view>
	            <view class='user-info-name'>团队店主</view>
	        </view>
	        <view class='user-info-item' @click='goTeamList'>
	            <view class='user-info-detail'>{{userInfo.low2}}</view>
	            <view class='user-info-name'>直推会员</view>
	        </view>
	        <view class='user-info-item' @click='goTeamList'>
	            <view class='user-info-detail'>{{userInfo.low_all}}</view>
	            <view class='user-info-name'>团队总人数</view>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					low3: 1,
					low2: 2,
					low_all: 3
				}
			}
		}
	}
</script>

<style>
	.user-info-box {
	    background: #fff;
	    margin: 0 30rpx;
	    border-radius: 6rpx;
	}
	
	.user-info-title {
	    padding: 45rpx 30rpx 0 30rpx;
	    font-weight: 600;
	    font-size: 28rpx;
	    color: #131313;
	}
	
	.user-info-main {
	    display: flex;
	}
	
	.user-info-item {
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	    height: 174rpx;
	}
	
	.user-info-detail {
	    font-weight: 600;
	    font-size: 32rpx;
	    color: #131313;
	}
	
	.user-info-name {
	    font-size: 24rpx;
	    color: #131313;
	    margin-top: 24rpx;
	}

</style>
