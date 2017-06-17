/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.WebFilter", {
    extend: "Ext.data.Store",
    alias: "store.webfilter",

    model: "App.model.WebFilter",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/webFilter/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});