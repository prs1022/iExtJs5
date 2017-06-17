/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.listfilter.ListFilterModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.listfilter",
	requires: ["App.store.ListFilter"],
	
	data: {},
	
	stores: {
		listfilter: {
			type: "listfilter",
			pageSize: 10,
			autoLoad: true
		}
	}
});
