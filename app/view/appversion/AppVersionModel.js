/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.appversion.AppVersionModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.appversion",
	requires: ["App.store.AppVersion"],
	
	data: {},
	
	stores: {
		appversion: {
			type: "appversion",
			pageSize: 10,
			autoLoad: true
		}
	}
});
