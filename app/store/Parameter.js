/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Parameter", {
    extend: "Ext.data.Store",
    alias: "store.parameter",

    model: "App.model.Parameter",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/parameter/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});