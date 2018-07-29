import m from 'mithril';
import Icons from './#icons.js';
import {appAlert} from './#utils.js';
import {checkredirect} from './#utils.js';

import {uport, getCredentials, setCredentials} from './#uPort.js';

var page = {
	classLogin:"",classRegister:"dn",
	classBtnLogin:"white",
	classBtnRegister:"gray",

	switchFormLogin: function() {
		page.classLogin = "";
		page.classRegister = "dn";
		page.classBtnLogin = "white";
		page.classBtnRegister = "gray";
	},
	switchFormRegister: function() {
		page.classLogin = "dn";
		page.classRegister = "";
		page.classBtnLogin = "gray";
		page.classBtnRegister = "white";
	},
	connect:function(){
		uport.requestCredentials({
      requested: ['name', 'phone', 'avatar'],
      notifications: true // We want this if we want to recieve credentials
    })
    .then((mycred) => {
			setCredentials(mycred)
			var credentials = getCredentials();
			appAlert([{message: "Welcome " +mycred.name+" To PickItUP", }]);
			setTimeout(function(){window.location.href = "/app"},3000)
    })
	},
	oninit:function(vnode){
		// m.mount(document.getElementById('appMenu'), menu)
	},
	oncreate:function(vnode){
		// particlesJS.load('particles-js', '../assets/bin/particles.json', function() {
	 	// 	console.log('callback - particles.js config loaded');
	 	// });
	},
	view:function(vnode){
		return (
			<section style="" class="min-vh-100 mw8 center w-100">
				<div id="particles-js" class="absolute left-0 w-100"></div>
				<article class="min-vh-100 dt w-100 absolute left-0 top-0">
				  <div class="dtc v-mid tc white ph2">
						<div class="center w-80-l">

						  <div class="fl w-100 relative">
								<div class="ph2 w-100 br2 ">
									<article class="h5-l dt w-100">
										<div class="dtc v-mid tc white monaco ">
											<img class="db center h4" src="../../assets/img/logo.png" />
											<span class="b f2-l f3 i">PicitUP</span>
											<div class="pv2 tc f5 f5-l tracked i fw3">
												A Crowdsourced Waste Recycling and Social Benefit Venture
											</div>
											<div class="cf mv2"></div>

							          <span class="bg-white bn purple fw6 shadow-4 pointer pa3 br2 f5"
							            onclick={page.connect}>Connect with uPort »
							          </span>
										</div>
									</article>
								</div>
							</div>

							<div class="dn fl w-100 w-50-l pa2">

								<div class="w-100 br2">
									<div class="monaco center black flex flex-row">
										<div class={"w-50 fw5 pa3 br b--white pointer "+page.classBtnLogin} onclick={page.switchFormLogin}>
											Login
										</div>
										<div class={"w-50 fw5 pa3 pointer "+page.classBtnRegister} onclick={page.switchFormRegister}>
											Register
										</div>
									</div>

									<div class={"ph3 f6 avenir black tl cf pt4 pb2 "+page.classLogin}>
										<span class="fl w-100 center br2 flex items-center">
											{m("input", {class:"f6 tracked bn black pa3 br2 br--left w-100", placeholder:"Enter Password"})}
											<Icons name="chevron-right" class="bg-white h1 w2 pv3 ph3 ph2-ns white pointer br2 br--right"/>
										</span>
									</div>

									<div class={"ph3 f6 avenir black tl cf pt4 pb2 "+page.classRegister}>
										<span class="fl w-100 center br2 flex items-center">
											{m("input", {class:"f6 tracked bn black pa3 br2 br--left w-100", placeholder:"Enter Password"})}
											<Icons name="lock-locked" class="bg-white h1 w2 pv3 ph3 ph2-ns white pointer br2 br--right"/>
										</span>
										<div class="cf mv2"></div>
										<span class="fl w-100 center br2 flex items-center">
											{m("input", {class:"f6 tracked bn black pa3 br2 br--left w-100", placeholder:"Confirm Password"})}
											<Icons name="lock-locked" class="bg-white h1 w2 pv3 ph3 ph2-ns white pointer br2 br--right"/>
										</span>
										<div class="cf mv3"></div>
										<div class=" tc">
											<span class="bg-white ttu b tracked orange shadow-4 pointer fl w-100 dim pv3 br2" onclick={page.Submit}>Create Your Wallet </span>
										</div>
									</div>
								</div>
								<div class="ph3 w-100 br2">
									<div class="f6 avenir white tl cf">
										<a href="/import" oncreate={m.route.link} class="white no-underline ph1 br1">
											<span class="fw5 db">Restore account?</span>
											<span class="fw5 db white">Import using account seed phrase</span>
										</a>
									</div>
								</div>
						  </div>
						</div>
				  </div>
				</article>
			</section>
		)
	}
}

export default page;
