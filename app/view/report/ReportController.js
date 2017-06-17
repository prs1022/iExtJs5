/*
 * 视图控制器 - 角色管理
 */

Ext.define("App.view.report.ReportController", {
    extend: "Ext.app.ViewController",
    alias: "controller.report",

    uses: ["App.view.report.ReportWin"],

    init: function () {
        this.st = Ext.getCmp("reportGrid").getStore(); //通过Component获取Store
    },


    //搜索
    search: function () {
        this.getViewModel().getStore("report").reload();
    },

    //新增
    add: function () {
        var win = Ext.create("App.view.report.ReportWin");
        win.show();
    },

    //编辑
    edit: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var win = Ext.create("App.view.report.ReportWin", {
            title: "编辑报表 - #" + rec.get("id")
        });
        win.down("form").loadRecord(rec);
        win.show();
    },

    //删除
    del: function (grid, rowIndex, colIndex) {
        var msg = "确认删除报表：" + grid.getStore().getAt(rowIndex).get("reportName") + " ？";
        Ext.Msg.confirm("确认", msg, function (res) {
            if (res == "yes") {
                delRecord(grid.getStore().data.items[rowIndex].id);
                grid.getStore().removeAt(rowIndex);
            }
        });
    },


    //保存
    reportsave: function (btn) {
        var fr = this.lookupReference("reportForm").getForm();
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
            btn.up("reportwin").close();
        }
    },

    //取消
    reportcancel: function (btn) {
        btn.up("reportwin").close();
    }
});


/**
 * 更新
 * @param data
 */
function updateRecord(data) {
    Ext.Ajax.request({
        url: '/mdp/report',
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
        url: '/mdp/report',
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
        url: '/mdp/report/' + id,
        method: 'delete',
        params: id,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}