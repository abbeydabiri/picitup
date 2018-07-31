import m from 'mithril';
import Siema from 'siema';

import menu from './#menu.js';
import footer from './#footer.js';

import Icons from '../#icons.js';
import {appAlert} from '../#utils.js';
import {checkRedirect} from '../#utils.js';


var page = {

	oninit:function(vnode){
		m.mount(document.getElementById('appMenu'), menu)
	},
	oncreate:function(vnode){
	},
	view:function(vnode){
		return (
			<section style="" class="tc mw8 center">
				<article class="vh-25 dt w-100">
					<div class="dtc v-mid tc ph2 relative">
						<div id="particles-js" class="w-100 vh-25 absolute top-0 left-0"></div>
						<span class="tc f4 fw6 white tracked" style=""> CLEAN UP </span>
					</div>
				</article>

				<img class="db center h5 h4-ns" src={"../../assets/img/camera.png"} />
				<div class="mv5"></div>
				<span class="bg-white bn purple fw6  shadow-4 pointer pa3 br2 f5"
				>CAPTURE DIRT AND CLEANUP
				</span>
			</section>
		)
	}
}

export default page;
