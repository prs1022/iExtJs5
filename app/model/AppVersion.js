Ext.define("App.model.AppVersion", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "appVersion"},
	    {name: "downLoadUrl"},
	    {name: "userName"},
	    {name: "message"},
	    {name: "createTime"},
	    {name: "updateTime"}
	]
});