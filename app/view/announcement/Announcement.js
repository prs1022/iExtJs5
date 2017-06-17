/*
 * 视图 - 角色管理
 */

Ext.define("App.view.announcement.Announcement", {
    extend: "Ext.grid.Panel",
    xtype: "announcement",
    id: "announcementGrid",

    requires: ["App.view.announcement.AnnouncementModel", "App.view.announcement.AnnouncementController"],
    viewModel: {
        type: "announcement"
    },
    controller: "announcement",

    bind: {
        store: "{announcement}"
    },
    initComponent: function () {
        Ext.apply(this, {
            selType: "checkboxmodel",
            title: "通知管理",
            border: true,
            columns: [
                {
                    text: "编号",
                    dataIndex: "id",
                    flex: 0.5
                },
                {
                    text: "内容",
                    dataIndex: "announcement",
                    flex: 2
                },
                {
                    text: "创建时间",
                    dataIndex: "createTime",
                    flex: 1,
                    renderer: function (val) {
                        var date = new Date(val);
                        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
                    }
                },
                {
                    text: "更新时间",
                    dataIndex: "updateTime",
                    flex: 1,
                    renderer: function (val) {
                        var date = new Date(val);
                        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
                    }
                },
                {
                    text: "开始时间",
                    dataIndex: "startTime",
                    flex: 1
                },
                {
                    text: "结束时间",
                    dataIndex: "endTime",
                    flex: 1
                },
                {
                    text: "是否删除",
                    dataIndex: "isDeleted",
                    flex: 1,
                    renderer: function (val) {
                        if(val=="1"){
                            return "是"
                        }else if(val=="0"){
                            return "否"
                        }
                    }
                },
                {
                    text: "产品名称",
                    dataIndex: "appCode",
                    flex: 1
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
                    store: "{announcement_store}"
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