/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.DeviceToken", {
    extend: "Ext.data.Store",
    alias: "store.devicetoken",

    model: "App.model.DeviceToken",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/deviceToken/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});