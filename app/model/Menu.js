/* 
 * 数据模型 - product
 * `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
 `desc` varchar(50) NOT NULL DEFAULT '' COMMENT '描述',
 `icon` varchar(100) NOT NULL DEFAULT '' COMMENT '图标',
 `product_name` varchar(30) NOT NULL DEFAULT '' COMMENT '产品名称',
 `title` varchar(50) DEFAULT NULL,
 `URL_base` varchar(100) NOT NULL DEFAULT '' COMMENT 'URL',
 `index_sort` int(11) NOT NULL DEFAULT '0' COMMENT '默认排序',
 */

Ext.define("App.model.Menu", {
	extend: "Ext.data.Model",
	fields: [
	    {name: "id"},
	    {name: "reportName"},
	    {name: "title"},
	    {name: "subIcon"},
	    {name: "icon"},
	    {name: "sortIndex"},
	    {name: "hasPermission"},
	    {name: "parentId"},
	    {name: "productId"}
	]
});