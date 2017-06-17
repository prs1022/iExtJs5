/*
 * 视图控制器 - 角色管理
 */

Ext.define("App.view.devicetoken.DeviceTokenController", {
    extend: "Ext.app.ViewController",
    alias: "controller.devicetoken",

    uses: ["App.view.devicetoken.DeviceTokenWin"],

    init: function () {
        this.st = Ext.getCmp("devicetokenGrid").getStore(); //通过Component获取Store
    },


    //搜索
    search: function () {
        this.getViewModel().getStore("devicetoken").reload();
    },

    //新增
    add: function () {
        var win = Ext.create("App.view.devicetoken.DeviceTokenWin");
        win.show();
    },

    //编辑
    edit: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var win = Ext.create("App.view.devicetoken.DeviceTokenWin", {
            title: "编辑设备号- #" + rec.get("id")
        });
        win.down("form").loadRecord(rec);
        win.show();
    },

    //删除
    del: function (grid, rowIndex, colIndex) {
        var msg = "确认删除产品：" + grid.getStore().getAt(rowIndex).get("devicetoken_name") + " ？";
        Ext.Msg.confirm("确认", msg, function (res) {
            if (res == "yes") {
                delRecord(grid.getStore().data.items[rowIndex].id);
                grid.getStore().removeAt(rowIndex);
            }
        });
    },


    //保存
    devicetokensave: function (btn) {
        var fr = this.lookupReference("devicetokenForm").getForm();
        if (fr.isValid()) {       //校验参数是否合法
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
            btn.up("devicetokenwin").close();
        }
    },

    //取消
    devicetokencancel: function (btn) {
        btn.up("devicetokenwin").close();
    }
});

/**
 * 更新
 * @param data
 */
function updateRecord(data) {
    Ext.Ajax.request({
        url: '/mdp/deviceToken',
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
        url: '/mdp/deviceToken',
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
        url: '/mdp/deviceToken/' + id,
        method: 'delete',
        params: id,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}