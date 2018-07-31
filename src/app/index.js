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
			<section style="" class="  center w-100 ">
				<article class="dn vh-100 dt w-100">
				  <div class="dtc v-mid tc white ph2 relative">
						<div id="particles-js" class="w-100 vh-100 absolute top-0 left-0"></div>
						<div class="measure center tc pa3">

							<img class="db center h4" src="../../assets/img/logo.png" />
							<div class="fl w-100">
								<p class="f5 tj center tracked ">
									<i class="b">PicitUP</i> is a Crowdsourced Waste Recycling and Social Benefit venture that motivate post-consumers to recycle by creating value from their everyday waste.
								</p>
								<p class="f5 tj center tracked">




									Join the community in identifying, mapping, collecting and recycling litter.
								</p>
							</div>
						</div>

				  </div>
				</article>
			</section>
		)
	}
}

export default page;
