/*
 * 视图控制器 - 角色管理
 */

Ext.define("App.view.product.ProductController", {
    extend: "Ext.app.ViewController",
    alias: "controller.product",

    uses: ["App.view.product.ProductWin"],

    init: function () {
        this.st = Ext.getCmp("productGrid").getStore(); //通过Component获取Store
    },


    //搜索
    search: function () {
        this.getViewModel().getStore("product").reload();
    },

    //新增
    add: function () {
        var win = Ext.create("App.view.product.ProductWin");
        win.show();
    },

    //编辑
    edit: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex);
        var win = Ext.create("App.view.product.ProductWin", {
            title: "编辑产品 - #" + rec.get("id")
        });
        win.down("form").loadRecord(rec);
        win.show();
    },

    //删除
    del: function (grid, rowIndex, colIndex) {
        var msg = "确认删除产品：" + grid.getStore().getAt(rowIndex).get("product_name") + " ？";
        Ext.Msg.confirm("确认", msg, function (res) {
            if (res == "yes") {
                delProduct(grid.getStore().data.items[rowIndex].id);
                grid.getStore().removeAt(rowIndex);
            }
        });
    },


    //保存
    productsave: function (btn) {
        var fr = this.lookupReference("productForm").getForm();
        if (fr.isValid()) {       //校验参数是否合法
            var id = fr.findField("id").getValue();
            if (id) { //编辑
                saveProduct(fr.getValues());
                //this.st.rejectChanges();	//取消所有修改
                this.st.commitChanges();	//提交修改数据
            } else { //新增
                addProduct(fr.getValues());
                var obj = fr.getFieldValues();
                obj.id = this.st.last() ? parseInt(this.st.last().get("id")) + 1 : 1;
                this.st.add(obj);
            }
            btn.up("productwin").close();
        }
    },


//取消
    productcancel: function (btn) {
        btn.up("productwin").close();
    }
})
;

/**
 * 更新product
 * @param data
 */
function saveProduct(data) {
    Ext.Ajax.request({
        url: '/mdp/product',
        method: 'put',
        jsonData: data,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}

/**
 * 新增product
 * @param data
 */
function addProduct(data) {
    Ext.Ajax.request({
        url: '/mdp/product',
        method: 'post',
        jsonData: data,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}
/**
 * 删除product
 * @param data
 */
function delProduct(id) {
    Ext.Ajax.request({
        url: '/mdp/product/'+id,
        method: 'delete',
        params:id,
        success: function (response, options) {
        },
        failure: function () {
        }
    });
}