/*
 * 视图 - 角色管理
 */

Ext.define("App.view.reportfilter.ReportFilter", {
	extend: "Ext.grid.Panel",
	xtype: "reportfilter",
	id: "reportfilterGrid",
	
	requires: ["App.view.reportfilter.ReportFilterModel", "App.view.reportfilter.ReportFilterController"],
	viewModel: {
		type: "reportfilter"
	},
	controller: "reportfilter",
	
	bind: {
		store: "{reportfilter}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "报表过滤器关系管理",
			border: true,
			columns: [{
				text: "关系编号",
				dataIndex: "id",
				flex: 1
			}, {
				text: "过滤器ID",
				dataIndex: "fiterId",
				flex: 2
			}, {
                text: "报表ID",
                dataIndex: "reportId",
                flex: 2
            },  {
                text: "请求URL",
                dataIndex: "requestUrl",
                flex: 2
            }, {
                text: "类型",
                dataIndex: "type",
                flex: 2
            }, {
                text: "映射map",
                dataIndex: "keymap",
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
					handler: "edit"
				}, {
					iconCls: "opt-delete",
					tooltip: "删除",
					handler: "del"
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
					store: "{reportfilter_store}"
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