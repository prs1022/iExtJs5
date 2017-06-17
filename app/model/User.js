/* 
 * 数据模型 - 用户
 */

Ext.define("App.model.User", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "userName"},
	    {name: "roleMark"},
	]
});