/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.datefilter.DateFilterWin", {
    extend: "Ext.window.Window",
    xtype: "datefilterwin",

    requires: ["App.view.datefilter.DateFilterModel", "App.view.datefilter.DateFilterController"],
    viewModel: {
        type: "datefilter"
    },
    controller: "datefilter",

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
                    reference: "datefilterForm",
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
                                    name: "filterContent",
                                    fieldLabel: "内容"
                                }
                            ]
                        }
                        ,
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
                    handler: "datefiltersave"
                },
                {
                    text: "取消",
                    handler: "datefiltercancel"
                }
            ]
        });
        this.callParent(arguments);
    }
});