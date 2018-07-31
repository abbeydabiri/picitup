var m = require("mithril");
import Icons from '../#icons.js';

// export function menu() {
// 	m.render(document.getElementById('appMenu'), m(menu))
// }

export var menu = {
	menuFixed: "bg-transparent",
	oninit: function() {
		window.addEventListener('scroll', function() {
			var menuFixed;
			var shrinkOn = 160;
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > shrinkOn) { menuFixed = "top-nav fadeIn fixed"; }
			else { menuFixed = "bg-transparent"; }

			if (menuFixed !== menu.menuFixed) {
				menu.menuFixed = menuFixed;
				m.redraw();
			}
		});
	},
	linkItem : {
		view: function(vnode) {
			return(
				<a class="link" href={vnode.attrs.href}>
					<li class="tr" onclick={menu.toggle}>
						<p class="ph2 pv3 mv0 white hover-bg-white hover-blue fw5 tracked">
							{vnode.children}
						</p>
					</li>
				</a>
			)
		}
	},
	menuItem : {
		view: function(vnode) {
			return(
				<a class="link f5" oncreate={m.route.link} href={vnode.attrs.href}>
					<li class="tr" onclick={menu.toggle}>
						<p class="ph2 pv3 mv0 dark-green hover-bg-gradient hover-white fw5 tracked">
							{vnode.children}
						</p>
					</li>
				</a>
			)
		}
	},
	toggle: function() {
		var appmenuToggle = document.getElementById("menuToggle");
		var appmenuCover = document.getElementById("menuCover");
		appmenuCover.classList.toggle('dn');
		appmenuToggle.classList.toggle('animated');
		appmenuToggle.classList.toggle('bounceInRight');

		// document.getElementById("nav").classList.toggle('dn');
		// document.getElementById("menuBlur").classList.toggle('vh-100');
		document.getElementById("html").classList.toggle('overflow-hidden');
	},
	view: function(vnode) {
		return (
			<section id="menuBlur" class={"z-max w-100 "+menu.menuFixed}>
				<div id="menuCover"  class="fixed z-max right-0 w-100 vh-100 fr dn pa0" style="">
					<ul id="menuToggle" class="fr tr w-40 w-30-ns list pl0 vh-100 ma0 bg-yellow overflow-y-scroll overflow-y-hidden-l" style="">
						<li class="w-100 cf pa3">
							<Icons name="cancel" class="h1 dim dib white" onclick={menu.toggle}/>
						</li>
						<a oncreate={m.route.link} class="link white f5" href="/app/cleanup/">
							<li class="w-100 ttu tracked cf pa3 bb b--white-30" onclick={menu.toggle}>
								Clean UP
							</li>
						</a>
						<a oncreate={m.route.link} class="link white f5" href="/app/recycle/">
							<li class="w-100 ttu tracked cf pa3 bb b--white-30" onclick={menu.toggle}>
								Recycle
							</li>
						</a>
						<a oncreate={m.route.link} class="link white f5" href="/app/gallery/">
							<li class="w-100 ttu tracked cf pa3 bb b--white-30" onclick={menu.toggle}>
								Gallery
							</li>
						</a>
						<a oncreate={m.route.link} class="link white f5" href="/app/map/">
							<li class="w-100 ttu tracked cf pa3 bb b--white-30" onclick={menu.toggle}>
								Dirt Map
							</li>
						</a>
						<a oncreate={m.route.link} class="link white f5" href="/app/earning/">
							<li class="w-100 ttu tracked cf pa3 bb b--white-30" onclick={menu.toggle}>
								Earnings
							</li>
						</a>
						<a class="link white f5" href="/">
							<li class="w-100 ttu tracked cf pa3 bb b--white-30" onclick={menu.toggle}>
								LOGOUT
							</li>
						</a>
						<li class="tc pa3 fw3 f6 gray" onclick={menu.toggle}>
							<small>Rinkeby Testnet via<br/> Infura Network</small>
						</li>
					</ul>
				</div>

				<nav id="nav" class="w-100 mw8 pa3 fixed z-9999">
					<Icons name="menu" class=" purple h1 fr pa2 bg-white br1" onclick={menu.toggle}/>
				</nav>

				<div id="appAlert"></div>
			</section>
		)
	}
}

export default menu;
