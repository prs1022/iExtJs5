/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Menu", {
    extend: "Ext.data.Store",
    alias: "store.menu",

    model: "App.model.Menu",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/menuItem/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});