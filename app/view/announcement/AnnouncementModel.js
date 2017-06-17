/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.announcement.AnnouncementModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.announcement",
	requires: ["App.store.Announcement"],
	
	data: {},
	
	stores: {
		announcement: {
			type: "announcement",
			pageSize: 10,
			autoLoad: true
		}
	}
});
