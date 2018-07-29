import m from 'mithril';
import Siema from 'siema';

import Icons from './#icons.js';
import {appAlert} from './#utils.js';
import {checkRedirect} from './#utils.js';


var page = { sliderContainer:[],
	sliderItem: { view: function(vnode) {
		return(
			<article class="min-vh-100 dt w-100" style="">
				<div class="dtc v-mid tc black ph2 relative">
				<a href="/login" class="link absolute right-0 top-0 pa3 tracked f6 b tc green">
					SKIP
				</a>

				<div class="measure center tc relative">

					<div class="w-100 tc">
						<Icons name="media-record" class={"h1 "+vnode.attrs.slide1Status}/>
						<Icons name="media-record" class={"h1 "+vnode.attrs.slide2Status}/>
						<Icons name="media-record" class={"h1 "+vnode.attrs.slide3Status}/>
					</div>

					<div class="cf w-100 pv1"></div>

						<img class=" center h5 h4-ns" src={"../../assets/img/"+vnode.attrs.slideIcon} />

					<div class="fl w-100 tc pt3">
						<p class="f4 b dark-gray center tracked ">
							{vnode.attrs.slideTitle}
						</p>

						<p class="dark-gray f5 center tracked">
							{vnode.attrs.slideDetails}
						</p>
					</div>
				</div>
			</div>
		</article>
		)
	}},
	sliderInit: function(vnode){
		var searchList = [];
		searchList.push(m(page.sliderItem,{
			slide1Status:"green",slide2Status:"gray", slide3Status:"gray",
			slideIcon: "logo.png", slideTitle:"CleanUP Your Environment",
			slideDetails:"Join the community in identifying, mapping, collecting and recycling litter.",
		}));

		searchList.push(m(page.sliderItem,{
			slide1Status:"gray",slide2Status:"green", slide3Status:"gray",
			slideIcon: "recycle.png", slideTitle:"Recycling is Good!!",
			slideDetails:"Join the community in identifying, mapping, collecting and recycling litter.",
		}));

		searchList.push(m(page.sliderItem,{
			slide1Status:"gray",slide2Status:"gray", slide3Status:"green",
			slideIcon: "earn.png", slideTitle:"Earn Tokens",
			slideDetails:"Earn Tokens redeemable to cash as you recycle",
		}));


		if(searchList.length > 0) {
			page.sliderContainer = searchList; m.redraw();
			page.mySiema = new Siema({loop:true,});
			document.getElementById("html").classList.toggle('overflow-hidden');
		}
	},
	oninit:function(vnode){
		setTimeout(function(){page.sliderInit()},250);
	},
	oncreate:function(vnode){},
	view:function(vnode){
		return (
			<section style="" class="min-vh-100 bg-white  center w-100 ">
			<div class="flex flex-column flex-row-m">
				<div class="w-100 center relative">
						<div class="siema w-100">
							{page.sliderContainer}
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default page;
