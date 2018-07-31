var m = require("mithril")

//Generic Website Pages
import indexPage from './index.js';
import mapPage from './map.js';
import cleanupPage from './cleanup.js';
import recyclePage from './recycle.js';
import recipientPage from './recipient.js';
import galleryPage from './gallery.js';
import walletPage from './wallet.js';
import earningPage from './earning.js';
//


m.route.setOrig = m.route.set;
m.route.set = function(path, data, options){
	m.route.setOrig(path, data, options);
	window.scrollTo(0,0);
}

m.route.linkOrig = m.route.link;
m.route.link = function(vnode){
	m.route.linkOrig(vnode);
	window.scrollTo(0,0);
}

m.route.prefix("")
m.route.mode = "pathname"
m.route(document.getElementById('appContent'), "/app", {
	"/app":{ view: function(vnode) { return m(indexPage);},},

	"/app/map":{ view: function(vnode) { return m(mapPage);},},
	"/app/cleanup":{ view: function(vnode) { return m(cleanupPage);},},
	"/app/recycle":{ view: function(vnode) { return m(recyclePage);},},
	"/app/gallery":{ view: function(vnode) { return m(galleryPage);},},

	"/app/recipient":{ view: function(vnode) { return m(recipientPage);},},
	"/app/wallet":{ view: function(vnode) { return m(walletPage);},},
	"/app/earning":{ view: function(vnode) { return m(earningPage);},},

});
