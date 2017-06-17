/*
 * 页面底部
 */

Ext.define("App.view.main.Bottom", {
	extend: "Ext.container.Container",
	xtype: "bottom",
	cls: "footer",
	
	initComponent: function() {
		Ext.apply(this, {
			height: 24,
			items: [{
				xtype: "label"
			}]
		});
		this.callParent(arguments);
	}
});
