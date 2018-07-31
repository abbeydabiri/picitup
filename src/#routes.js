var m = require("mithril")


//App Home Pages
import indexPage from './index.js';
import lockPage from './lock.js';
import importPage from './import.js';
import onboardPage from './onboard.js';
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
m.route(document.getElementById('appContent'), "/", {
	"/":{ view: function(vnode) { return m(indexPage);},},
	"/onboard":{ view: function(vnode) { return m(onboardPage);},},
	// "/lock":{ view: function(vnode) { return m(lockPage);},},
	// "/import":{ view: function(vnode) { return m(importPage);},},
});
