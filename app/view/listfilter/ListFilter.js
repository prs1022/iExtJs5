/*
 * 视图 - 角色管理
 */

Ext.define("App.view.listfilter.ListFilter", {
	extend: "Ext.grid.Panel",
	xtype: "listfilter",
	id: "listfilterGrid",
	
	requires: ["App.view.listfilter.ListFilterModel", "App.view.listfilter.ListFilterController"],
	viewModel: {
		type: "listfilter"
	},
	controller: "listfilter",
	
	bind: {
		store: "{listfilter}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "list过滤器管理",
			border: true,
			columns: [{
				text: "编号",
				dataIndex: "id",
				flex: 1
			}, {
				text: "名称",
				dataIndex: "title",
				flex: 2
			}, {
                text: "值",
                dataIndex: "value",
                flex: 2
            },  {
                text: "类型",
                dataIndex: "type",
                flex: 2
            }, {
                text: "组名",
                dataIndex: "group",
                flex: 2
            }, {
                text: "展现形式",
                dataIndex: "actionType",
                flex: 2
            },{
                text: "图标",
                dataIndex: "icon",
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
					store: "{listfilter_store}"
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