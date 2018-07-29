var m = require("mithril");
import {appAlert} from '../#utils.js';

export var footer = {
	oninit: function(){
	},
	view: function(vnode) {
		return (
			<footer class="mw8 center fixed bottom-0 left-0">
				<div class="fl w-100 pv4 ph3 ph5-m ph6-l washed-green">
				  <small class="f6 db tc">© 2018 <b class="ttu tracked">Green House</b> - All Rights Reserved</small>
				  <div class="tc mt3">
				    <a href="/terms/" title="Terms" class="f6 dib ph2 link washed-green dim">Terms of Use</a>
				    <a href="/privacy/" title="Privacy" class="f6 dib ph2 link washed-green dim">Privacy</a>
				  </div>
				</div>
			</footer>
		)
	}
}

export default footer;
