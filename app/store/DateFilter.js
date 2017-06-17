/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.DateFilter", {
    extend: "Ext.data.Store",
    alias: "store.datefilter",

    model: "App.model.DateFilter",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/dateFilter/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});