/* 
 * 数据存储 - 角色
 */

Ext.define("App.store.Announcement", {
    extend: "Ext.data.Store",
    alias: "store.announcement",

    model: "App.model.Announcement",
    proxy: {
        type: "ajax",
        url: window.BASEURL+"/announceMent/all",//模拟后台访问
        reader: {
            type: "json",
            rootProperty: "data"
        }
    },
    listeners:{

    }
});