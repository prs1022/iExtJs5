/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.ListFilter", {
    extend: "Ext.data.Store",
    alias: "store.listfilter",

    model: "App.model.ListFilter",
    proxy: {
        type: "ajax",
        url: window.BASEURL + "/listFilter/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners: {}
});