/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.datefilter.DateFilterModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.datefilter",
	requires: ["App.store.DateFilter"],
	
	data: {},
	
	stores: {
		datefilter: {
			type: "datefilter",
			pageSize: 10,
			autoLoad: true
		}
	}
});
