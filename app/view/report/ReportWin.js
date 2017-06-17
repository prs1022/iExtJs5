/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.report.ReportWin", {
    extend: "Ext.window.Window",
    xtype: "reportwin",

    requires: ["App.view.report.ReportModel", "App.view.report.ReportController"],
    viewModel: {
        type: "report"
    },
    controller: "report",

    title: "新增报表",
    width: 600,
    height: 250,
    resizable: true,
    autoScroll: true,
    constrain: true,
    modal: true,
    /*
     tools: [{
     type: "refresh",
     tooltip: "刷新数据"
     }],
     */

    initComponent: function () {
        Ext.apply(this, {
            items: [
                {
                    xtype: "form",
                    reference: "reportForm",
                    margin: 10,
                    defaults: {
                        anchor: "100%"
                    },
                    fieldDefaults: {
                        flex: 1,
                        margin: 10,
                        labelWidth: 60,
                        allowBlank: false
                    },
                    items: [
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "hiddenfield",
                                    name: "id",
                                    value: ""
                                },
                                {
                                    xtype: "textfield",
                                    name: "reportName",
                                    fieldLabel: "报表名称"
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "textarea",
                                    name: "title",
                                    fieldLabel: "标题",
                                    grow: false,
                                    allowBlank: true
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "textarea",
                                    name: "requestHash",
                                    fieldLabel: "hash",
                                    grow: false,
                                    allowBlank: true
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "textarea",
                                    name: "requestUrl",
                                    fieldLabel: "请求URL",
                                    grow: false,
                                    allowBlank: true
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "textarea",
                                    name: "filters",
                                    fieldLabel: "补充信息",
                                    grow: false,
                                    allowBlank: true
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "textarea",
                                    name: "productId",
                                    fieldLabel: "产品ID",
                                    grow: false,
                                    allowBlank: true
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "textarea",
                                    name: "hasPermission",
                                    fieldLabel: "权限",
                                    grow: false,
                                    allowBlank: true
                                }
                            ]
                        },
                        {
                            xtype: "container",
                            layout: {
                                type: "hbox",
                                align: "stretch"
                            },
                            items: [
                                {
                                    xtype: "textarea",
                                    name: "isDeleted",
                                    fieldLabel: "是否删除",
                                    grow: false,
                                    allowBlank: true
                                }
                            ]
                        }
                    ]
                }
            ],
            buttonAlign: "center",
            buttons: [
                {
                    text: "保存",
                    handler: "reportsave"
                },
                {
                    text: "取消",
                    handler: "reportcancel"
                }
            ]
        });
        this.callParent(arguments);
    }
});
/**
 , {
                        xtype: "textfield",
                        name: "title",
                        fieldLabel: "产品标题"
                    }, {
                        xtype: "textfield",
                        name: "icon",
                        fieldLabel: "产品图标"
                    }, {
                        xtype: "textfield",
                        name: "desc",
                        fieldLabel: "产品描述"
                    }, {
                        xtype: "textfield",
                        name: "URL_base",
                        fieldLabel: "产品URL"
                    }, {
                        xtype: "textfield",
                        name: "index_sort",
                        fieldLabel: "排序索引"
                    }

 **/