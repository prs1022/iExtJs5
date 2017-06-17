/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Product", {
    extend: "Ext.data.Store",
    alias: "store.product",

    model: "App.model.Product",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/product/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});