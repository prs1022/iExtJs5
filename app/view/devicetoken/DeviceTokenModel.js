/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.devicetoken.DeviceTokenModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.devicetoken",
	requires: ["App.store.DeviceToken"],
	
	data: {},
	
	stores: {
		devicetoken: {
			type: "devicetoken",
			pageSize: 10,
			autoLoad: true
		}
	}
});
