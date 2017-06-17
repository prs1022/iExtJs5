/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.ReportFilter", {
    extend: "Ext.data.Store",
    alias: "store.reportfilter",

    model: "App.model.ReportFilter",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/reportFilter/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});