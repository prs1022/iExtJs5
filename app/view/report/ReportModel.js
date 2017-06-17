/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.report.ReportModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.report",
	requires: ["App.store.Report"],
	
	data: {},
	
	stores: {
		report: {
			type: "report",
			pageSize: 10,
			autoLoad: true
		}
	}
});
