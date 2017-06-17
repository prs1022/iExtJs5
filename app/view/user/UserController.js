/*
 * 视图控制器 - 用户管理
 */

Ext.define("App.view.user.UserController", {
    extend: "Ext.app.ViewController",
    alias: "controller.user",

    uses: ["App.view.user.UserWin"],

    //初始化
    init: function () {
        this.st = Ext.getCmp("userGrid").getStore(); //通过Component获取Store
    },

    //搜索
    search: function () {
        this.getViewModel().getStore("user").reload();
    },

    //新增
    add: function () {
        var win = Ext.create("App.view.user.UserWin");
        win.show();
    },

    //编辑
    edit: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var win = Ext.create("App.view.user.UserWin", {
            title: "编辑用户 - #" + rec.get("id")
        });
        win.down("form").loadRecord(rec);
        win.show();
    },

    //删除
    del: function (grid, rowIndex, colIndex) {
        var msg = "确认删除用户：" + grid.getStore().getAt(rowIndex).get("userName") + " ？";
        Ext.Msg.confirm("确认", msg, function (res) {
            if (res == "yes") {
                delRecord(grid.store().data.items[rowIndex].id);
                grid.getStore().removeAt(rowIndex);
            }
        });
    },

    //批量删除
    batchDel: function () {
        var grid = Ext.getCmp("userGrid");
        if (grid.getSelectionModel().hasSelection()) {
            var st = grid.getStore();
            var recs = grid.getSelectionModel().getSelection();
            var names = "";
            for (var i = 0; i < recs.length; i++) {
                names += recs[i].data.userName + "<br />";
            }
            Ext.Msg.confirm("确认", "确认删除以下用户？<br />" + names, function (res) {
                if (res == "yes") {
                    st.remove(recs);
                }
            });
        } else {
            Ext.Msg.alert("信息", "请选择要删除的用户！");
        }
    },

    //保存
    save: function (btn) {
        var fr = this.lookupReference("userForm").getForm();
        if (fr.isValid()) {
            var id = fr.findField("id").getValue();
            var data = fr.getValues();
            if (id) { //编辑
                updateRecord(data);
                var rec = this.st.getById(id);
                //this.st.rejectChanges();	//取消所有修改
                this.st.commitChanges();	//提交修改数据
            } else { //新增
                addRecord(data);
                var obj = fr.getFieldValues();
                obj.id = this.st.last() ? parseInt(this.st.last().get("id")) + 1 : 1;
                this.st.add(obj);
            }
            btn.up("userwin").close();
        }
    },

    //取消
    cancel: function (btn) {
        btn.up("userwin").close();
    }
});


/**
 * 更新
 * @param data
 */
function updateRecord(data) {
    Ext.Ajax.request({
        url: '/mdp/user',
        method: 'put',
        jsonData: data,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}

/**
 * 新增
 * @param data
 */
function addRecord(data) {
    Ext.Ajax.request({
        url: '/mdp/user',
        method: 'post',
        jsonData: data,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}
/**
 * 删除
 * @param data
 */
function delRecord(id) {
    Ext.Ajax.request({
        url: '/mdp/user/' + id,
        method: 'delete',
        params: id,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}