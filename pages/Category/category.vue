<style lang='scss'>
	.category {
		display: flex;
		&_left {
			flex: 0 0 200upx;
			.row {
				height: 100%;
				border-right: 1px solid #eee;
				.col {
					height: 90upx;
					line-height: 90upx;
					font-size: 28upx;
					text-align: center;
				}
			}
			.active {
				background: #eee;
				position: relative;
				color: #e93b3d;
				&::after {
					content: '';
					position: absolute;
					left: 0upx;
					top: 50%;
					transform: translateY(-50%);
					width: 6upx;
					height: 40upx;
					border-radius: 0 8upx 8upx 0;
					background: #e93b3d;
				}
			}
		}
		&_right {
			flex: 1;
			box-sizing: border-box;
			padding: 28upx;
			&_box {
				width: 100%;
				.label {
					width: 100%;
				}
				.list {
					display: flex;
					justify-content: space-between;
					&_item {	
						flex: 1;
						img {
							
						}
						.name {
							font-size: 28upx;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<view>
		<searchHeader />
		<view class='category'>
			<!-- 左侧导航 -->
			<scroll-view scroll-y='true' class="category_left">
				<view
					v-for="(item,index) in categoryList"
					:key='index'
					class='row'
					:class="{'active': index == currentIndex}"
				>
					<view class='col'>{{item.title}}</view>
				</view>
			</scroll-view>
			<!-- 右侧内容 -->
			<scroll-view scroll-y='true' class="category_right">
				<view
					v-for="(itemList,index) in categoryList"
					:key="index"
					class='category_right_box'
				>
					<view class="label">热门商品</view>
					<view class="list">
						<view v-for="(item,index) in itemList.list" class='list_tem'>
							<img :src="'/static/img/category/list/' + item.img" alt="">
							<view class="name">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import searchHeader from '@/components/searchHeader.vue'
	import { getCategory } from '@/api/home.js'
	export default {
		components: {
			searchHeader
		},
		data() {
			return {
				categoryList: [],
				currentIndex: 0
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			getData() {
				getCategory().then(res => {
					this.categoryList = res.data
				})
			}
		}
	}
</script>
