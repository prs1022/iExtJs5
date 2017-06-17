/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.webfilter.WebFilterModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.webfilter",
	requires: ["App.store.WebFilter"],
	
	data: {},
	
	stores: {
		webfilter: {
			type: "webfilter",
			pageSize: 10,
			autoLoad: true
		}
	}
});
