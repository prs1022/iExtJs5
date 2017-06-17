/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.menu.MenuModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.menu",
	requires: ["App.store.Menu"],
	
	data: {},
	
	stores: {
		menu: {
			type: "menu",
			pageSize: 10,
			autoLoad: true
		}
	}
});
