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
	view:function(vnode){
		return (
			<section style="" class="vh-100 mw8 center w-100 measure">
				<article class="vh-25 dt w-100">
					<div class="dtc v-mid tc ph2 relative">
						<div id="particles-js" class="w-100 vh-25 absolute top-0 left-0"></div>
						<span class="tc f4 fw6 white tracked" style=""> DIRT MAP OF YOUR CITY</span>
					</div>
				</article>
				<img src="https://www.litterati.org/bootstrap/images/map_street.png" class="w-100 br3"/>
					<div class="cf mv3"></div>
				<img src="https://www.litterati.org/bootstrap/images/map_world.png" class="w-100 br3"/>
			</section>
		)
	}
}

export default page;
