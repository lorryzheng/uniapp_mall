function request(url, options) {
	
	const baseURL = "https://uniapp-interface.herokuapp.com/"
	
	if(method && method == 'POST') {
		header = {"content-type":"application/x-www-form-urlencoded"}
	}
	
	return new Promise((reject,resolve) => {
		uni.showLoading({
			title: "加载中...",
			mask: true
		})
		uni.request({
			url: baseURL + url,
			method: options.method || "GET",
			data: options.body || {},
			header: header,
			success: res => {
				if(res.code && res.code != 200){
					uni.showModal({
						content:res.msg
					})
					return;
				}else {
					resolve res.data
				}
			},
			fail: (err) => {
				uni.showModal({
					content: err.msg
				})
			},
			complete: () => {
				uni.hideLoading()
			}
		})
	})
}