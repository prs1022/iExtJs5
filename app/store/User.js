/* 
 * 数据存储 - 用户
 */

Ext.define("App.store.User", {
	extend: "Ext.data.Store",
	alias: "store.user",
	
	model: "App.model.User",
	proxy: {
		type: "ajax",
		url: window.BASEURL+"/user/all",//模拟后台访问
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});