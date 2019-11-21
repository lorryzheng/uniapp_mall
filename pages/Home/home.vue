<style lang='scss'>
	.home {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20upx;
	}
</style>
<template>
	<view class='home'>
		<page-header />
		<home-banner :bannerList='bannerList' v-if='bannerList.length > 0' />
		<home-category :categoryList='categoryList' v-if='categoryList.length > 0' />
		<home-poster :poster='poster' />
		<home-promotion :promotion='promotion' v-if='promotion.length > 0' />
	</view>
</template>

<script>
	import pageHeader from '@/components/pageHeader.vue'
	import homeBanner from './cmps/Banner/banner'
	import homeCategory from './cmps/Category/category'
	import homePoster from './cmps/Poster/poster'
	import homePromotion from './cmps/Promotion/promotion'
	import { getHomeData } from '@/api/home.js'
	
	export default {
		components: {
			pageHeader,
			homeBanner,
			homeCategory,
			homePoster,
			homePromotion
		},
		data() {
			return {
				bannerList: [],
				categoryList: [],
				poster: '',
				promotion: []
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData() {
				getHomeData().then(res => {
					// console.log(statusCode)
					console.log(res)
					this.bannerList = res.data.swiperList
					this.categoryList = res.data.categoryList
					this.bannerList = res.data.swiperList
					this.promotion = res.data.promotion
				})
			}
		}
	}
</script>
