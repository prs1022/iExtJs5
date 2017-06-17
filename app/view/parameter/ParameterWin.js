/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.parameter.ParameterWin", {
    extend: "Ext.window.Window",
    xtype: "parameterwin",

    requires: ["App.view.parameter.ParameterModel", "App.view.parameter.ParameterController"],
    viewModel: {
        type: "parameter"
    },
    controller: "parameter",

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
                    reference: "parameterForm",
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
                                    name: "paramName",
                                    fieldLabel: "参数名称"
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
                                    name: "reportId",
                                    fieldLabel: "报表ID",
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
                    handler: "qsave"
                },
                {
                    text: "取消",
                    handler: "qcancel"
                }
            ]
        });
        this.callParent(arguments);
    }
});