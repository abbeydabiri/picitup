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
						<span class="tc f4 fw6 white tracked" style=""> GALLERY OF DIRTS </span>
					</div>
				</article>

				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-1.jpeg" class="fl br3"/>
				</div>
				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-2.jpeg" class="fl br3"/>
				</div>
				<div class="cf mv3"></div>
				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-3.jpeg" class="fl br3"/>
				</div>

				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-4.jpeg" class="fl br3"/>
				</div>

				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-1.jpeg" class="fl br3"/>
				</div>
				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-2.jpeg" class="fl br3"/>
				</div>
				<div class="cf mv3"></div>
				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-3.jpeg" class="fl br3"/>
				</div>

				<div class="w-50 pa2 fl">
					<img src="/assets/img/gallery-4.jpeg" class="fl br3"/>
				</div>


			</section>
		)
	}
}

export default page;
