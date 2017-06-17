/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.AppVersion", {
    extend: "Ext.data.Store",
    alias: "store.appversion",

    model: "App.model.AppVersion",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/appVersion/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});