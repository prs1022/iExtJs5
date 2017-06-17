/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.appversion.AppVersionWin", {
    extend: "Ext.window.Window",
    xtype: "appversionwin",

    requires: ["App.view.appversion.AppVersionModel", "App.view.appversion.AppVersionController"],
    viewModel: {
        type: "appversion"
    },
    controller: "appversion",

    title: "新增产品",
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
                    reference: "appversionForm",
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
                                    name: "appVersion",
                                    fieldLabel: "版本号"
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
                                    name: "downloadUrl",
                                    fieldLabel: "下载地址",
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
                                    name: "userName",
                                    fieldLabel: "用户名",
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
                                    name: "message",
                                    fieldLabel: "消息",
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
                    handler: "appsave"
                },
                {
                    text: "取消",
                    handler: "appcancel"
                }
            ]
        });
        this.callParent(arguments);
    }
});