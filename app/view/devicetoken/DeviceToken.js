/*
 * 视图 - 角色管理
 */

Ext.define("App.view.devicetoken.DeviceToken", {
	extend: "Ext.grid.Panel",
	xtype: "devicetoken",
	id: "devicetokenGrid",
	
	requires: ["App.view.devicetoken.DeviceTokenModel", "App.view.devicetoken.DeviceTokenController"],
	viewModel: {
		type: "devicetoken"
	},
	controller: "devicetoken",
	
	bind: {
		store: "{devicetoken}"
	},
	initComponent: function() {
		Ext.apply(this, {
			selType: "checkboxmodel",
			title: "设备号管理",
			border: true,
			columns: [{
				text: "编号",
				dataIndex: "id",
				flex: 1
			}, {
				text: "设备号",
				dataIndex: "deviceToken",
				flex: 2
			}, {
                text: "用户名",
                dataIndex: "username",
                flex: 2
            },  {
                text: "创建时间",
                dataIndex: "createTime",
                flex: 2
            }, {
                text: "更新时间",
                dataIndex: "updateTime",
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
					store: "{devicetoken_store}"
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