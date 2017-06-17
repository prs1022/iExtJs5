/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.reportfilter.ReportFilterModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.reportfilter",
	requires: ["App.store.ReportFilter"],
	
	data: {},
	
	stores: {
		reportfilter: {
			type: "reportfilter",
			pageSize: 10,
			autoLoad: true
		}
	}
});
