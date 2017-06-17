/*
 * 视图 - 角色管理
 */

Ext.define("App.view.menu.Menu", {
    extend: "Ext.grid.Panel",
    xtype: "menu",
    id: "menuGrid",

    requires: ["App.view.menu.MenuModel", "App.view.menu.MenuController"],
    viewModel: {
        type: "menu"
    },
    controller: "menu",

    bind: {
        store: "{menu}"
    },
    initComponent: function () {
        Ext.apply(this, {
            selType: "checkboxmodel",
            title: "菜单管理",
            border: true,
            columns: [
                {
                    text: "菜单编号",
                    dataIndex: "id",
                    flex: 1
                },
                {
                    text: "报表名称",
                    dataIndex: "reportName",
                    flex: 2
                },
                {
                    text: "标题",
                    dataIndex: "title",
                    flex: 2
                },
                {
                    text: "子图标",
                    dataIndex: "subIcon",
                    flex: 2
                },
                {
                    text: "图标",
                    dataIndex: "icon",
                    flex: 2
                },
                {
                    text: "排序索引",
                    dataIndex: "sortIndex",
                    flex: 2
                },
                {
                    text: "权限",
                    dataIndex: "hasPermission",
                    flex: 2
                },
                {
                    text: "父节点",
                    dataIndex: "parentId",
                    flex: 2
                },
                {
                    text: "产品ID",
                    dataIndex: "productId",
                    flex: 2
                },
                {
                    xtype: "actioncolumn",
                    text: "操作",
                    width: 100,
                    align: "center",
                    sortable: false,
                    menuDisabled: true,
                    items: [
                        {
                            iconCls: "opt-edit",
                            tooltip: "编辑",
                            handler: "edit"
                        },
                        {
                            iconCls: "opt-delete",
                            tooltip: "删除",
                            handler: "del"
                        }
                    ]
                }
            ],
            tbar: [
                {
                    xtype: "textfield",
                    maxWidth: 205,
                    fieldLabel: "角色编号",
                    labelWidth: 60
                },
                {
                    xtype: "textfield",
                    maxWidth: 205,
                    fieldLabel: "角色名称",
                    labelWidth: 60
                },
                {
                    xtype: "button",
                    text: "搜索",
                    glyph: 0xf002,
                    handler: "search"
                },
                "->",
                "->",
                {
                    xtype: "button",
                    text: "新增",
                    glyph: 0xf067,
                    handler: "add"
                },
                {
                    xtype: "button",
                    text: "批量删除",
                    glyph: 0xf00d,
                    handler: "batchDel"
                }
            ],
            bbar: {
                xtype: "pagingtoolbar",
                bind: {
                    store: "{product_store}"
                },
                displayInfo: true
            },
            listeners: {
                itemclick: function (view, record, item, index, e, eOpts) {
                }
            }
        });
        this.callParent(arguments);
    }
});