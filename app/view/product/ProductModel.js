/*
 * 视图模型 - 角色管理
 */

Ext.define("App.view.product.ProductModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.product",
	requires: ["App.store.Product"],
	
	data: {},
	
	stores: {
		product: {
			type: "product",
			pageSize: 10,
			autoLoad: true
		}
	}
});
