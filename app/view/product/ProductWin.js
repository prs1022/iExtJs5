/*
 * 窗口视图 - 角色管理
 */

Ext.define("App.view.product.ProductWin", {
    extend: "Ext.window.Window",
    xtype: "productwin",

    requires: ["App.view.product.ProductModel", "App.view.product.ProductController"],
    viewModel: {
        type: "product"
    },
    controller: "product",

    title: "新增产品",
    width: 600,
    height: 250,
    resizable: true,
    autoScroll: true,
    constrain: true,
    modal: true,
    renderTo: Ext.getBody(),
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
                    reference: "productForm",
                    standardSubmit: true,
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
                                    name: "productName",
                                    fieldLabel: "产品名称"
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
                                    name: "desc",
                                    fieldLabel: "产品描述",
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
                                    name: "icon",
                                    fieldLabel: "产品图标",
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
                                    name: "title",
                                    fieldLabel: "产品标题",
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
                                    name: "urlBase",
                                    fieldLabel: "产品URL",
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
                                    name: "indexSort",
                                    fieldLabel: "排序",
                                    grow: false,
                                    allowBlank: true
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
                    handler: "productsave"
                },
                {
                    text: "取消",
                    handler: "productcancel"
                }
            ]
        });
        this.callParent(arguments);
    }
});