/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.parameter.ParameterModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.parameter",
	requires: ["App.store.Parameter"],
	
	data: {},
	
	stores: {
		parameter: {
			type: "parameter",
			pageSize: 10,
			autoLoad: true
		}
	}
});
