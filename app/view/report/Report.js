/*
 * 视图 - 角色管理
 */

Ext.define("App.view.report.Report", {
    extend: "Ext.grid.Panel",
    xtype: "report",
    id: "reportGrid",

    requires: ["App.view.report.ReportModel", "App.view.report.ReportController"],
    viewModel: {
        type: "report"
    },
    controller: "report",

    bind: {
        store: "{report}"
    },
    initComponent: function () {
        Ext.apply(this, {
            selType: "checkboxmodel",
            title: "报表管理",
            border: true,
            columns: [
                {
                    text: "报表编号",
                    dataIndex: "id",
                    flex: 1
                },
                {
                    text: "名称",
                    dataIndex: "reportName",
                    flex: 2
                },
                {
                    text: "标题",
                    dataIndex: "title",
                    flex: 2
                },
                {
                    text: "Hash",
                    dataIndex: "requestHash",
                    flex: 2
                },
                {
                    text: "request_url",
                    dataIndex: "requestUrl",
                    flex: 2
                },
                {
                    text: "补充信息",
                    dataIndex: "filters",
                    flex: 2
                },
                {
                    text: "产品ID",
                    dataIndex: "productId",
                    flex: 2
                },
                {
                    text: "权限",
                    dataIndex: "hasPermission",
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