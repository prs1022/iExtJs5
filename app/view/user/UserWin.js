/*
 * 窗口视图 - 用户管理
 */

Ext.define("App.view.user.UserWin", {
    extend: "Ext.window.Window",
    xtype: "userwin",

    requires: ["App.view.user.UserModel", "App.view.user.UserController"],
    viewModel: {
        type: "user"
    },
    controller: "user",

    title: "新增用户",
    width: 600,
    height: 350,
    resizable: false,
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
            items: [{
                xtype: "form",
                reference: "userForm",
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
                        items: [{
                            xtype: "hiddenfield",
                            name: "id",
                            value: ""
                        }, {
                            xtype: "textfield",
                            name: "userName",
                            fieldLabel: "用户名称"
                        }, {
                            xtype: "textfield",
                            name: "role",
                            fieldLabel: "角色"
                        }]
                    }
                ]
            }],
            buttonAlign: "center",
            buttons: [{
                text: "保存",
                handler: "save"
            }, {
                text: "取消",
                handler: "cancel"
            }]
        });
        this.callParent(arguments);
    }
});
