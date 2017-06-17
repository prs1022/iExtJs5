/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Report", {
	extend: "Ext.data.Store",
	alias: "store.report",
	
	model: "App.model.Report",
	proxy: {
		type: "ajax",
		url: window.BASEURL+"/report/all", //模拟后台访问地址
		reader: {
			type: "json",
			rootProperty: "data"
		}
	}
});