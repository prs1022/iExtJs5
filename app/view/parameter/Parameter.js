/*
 * 视图 - 角色管理
 */

Ext.define("App.view.parameter.Parameter", {
	extend: "Ext.grid.Panel",
	xtype: "parameter",
	id: "parameterGrid",
	
	requires: ["App.view.parameter.ParameterModel", "App.view.parameter.ParameterController"],
	viewModel: {
		type: "parameter"
	},
	controller: "parameter",
	
	bind: {
		store: "{parameter}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "参数管理",
			border: true,
			columns: [{
				text: "编号",
				dataIndex: "id",
				flex: 1
			}, {
				text: "参数内容",
				dataIndex: "paramName",
				flex: 2
			}, {
                text: "报表ID",
                dataIndex: "reportId",
                flex: 2
            },{
				xtype: "actioncolumn",
				text: "操作",
				width: 100,
				align: "center",
				sortable: false,
				menuDisabled: true,
				items: [{
					iconCls: "opt-edit",
					tooltip: "编辑",
					handler: "paramedit"
				}, {
					iconCls: "opt-delete",
					tooltip: "删除",
					handler: "paramdel"
				}]
			}]
            ,
			tbar: [{
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "角色编号",
				labelWidth: 60
			}, {
				xtype: "textfield",
				maxWidth: 205,
				fieldLabel: "角色名称",
				labelWidth: 60
			}, {
				xtype: "button",
				text: "搜索",
				glyph: 0xf002,
				handler: "search"
			}, "->", "->", {
				xtype: "button",
				text: "新增",
				glyph: 0xf067,
				handler: "add"
			}, {
				xtype: "button",
				text: "批量删除",
				glyph: 0xf00d,
				handler: "batchDel"
			}],
			bbar: {
				xtype: "pagingtoolbar",
				bind: {
					store: "{parameter_store}"
				},
				displayInfo: true
			},
			listeners: {
				itemclick: function(view, record, item, index, e, eOpts) {}
			}
		});
		this.callParent(arguments);
	}
});