(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{144:function(e,t,n){var content=n(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(33).default)("3a792a42",content,!0,{sourceMap:!1})},145:function(e,t,n){var map={"./TextContent/index.vue":[165,10]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=145,e.exports=r},146:function(e,t,n){var map={"./AlternateGrid/index.vue":[167,0,11],"./CallToAction/index.vue":[160,0,4],"./CardsCarousel/index.vue":[166,0,5],"./CustomerLogos/index.vue":[164,0,6],"./FaqSection/index.vue":[163,0,7],"./FeatureTestimonials/index.vue":[162,0,2],"./ImagesSlider/index.vue":[161,0,8],"./PricingTable/index.vue":[157,0,3],"./TestimonialsSlider/index.vue":[158,0,9],"./VideoHighlights/index.vue":[159,0,1]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=146,e.exports=r},152:function(e,t,n){"use strict";var r={components:{Header:n(71).a}},o=n(23),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("Header"),this._v(" "),t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},168:function(e,t,n){n(169),e.exports=n(170)},214:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(33).default)("12ba2d00",content,!0,{sourceMap:!1})},215:function(e,t,n){(t=n(32)(!1)).push([e.i,":root{--primary-hue:212;--secondary-hue:221;--color--primary:hsl(var(--primary-hue),93%,46%);--color--secondary:hsl(var(--secondary-hue),43%,13%);--color--primary--dark:hsl(var(--primary-hue),26%,23%);--color--primary--darker:hsl(var(--primary-hue),75%,21%)}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.slide-fade-enter-active{transition:all .25s ease}.slide-fade-leave-active{transition:all .33s cubic-bezier(1,.5,.8,1)}.slide-fade-enter,.slide-fade-leave-to{transform:translateY(50%);opacity:0}",""]),e.exports=t},216:function(e,t,n){"use strict";n(144)},217:function(e,t,n){(t=n(32)(!1)).push([e.i,"nav a[data-v-3b50f9e8],nav a[data-v-3b50f9e8]:visited{color:#d2d6dc;text-decoration:none}nav a[data-v-3b50f9e8]:hover,nav a[data-v-3b50f9e8]:visited:hover{color:#fff}nav a.active[data-v-3b50f9e8],nav a.active[data-v-3b50f9e8]:visited{color:#fff;text-decoration:none}",""]),e.exports=t},218:function(e,t,n){var map={"./TextContent/index.vue":[165,10]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=218,e.exports=r},219:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=219},220:function(e,t,n){var map={"./AlternateGrid/index.vue":[167,0,11],"./CallToAction/index.vue":[160,0,4],"./CardsCarousel/index.vue":[166,0,5],"./CustomerLogos/index.vue":[164,0,6],"./FaqSection/index.vue":[163,0,7],"./FeatureTestimonials/index.vue":[162,0,2],"./ImagesSlider/index.vue":[161,0,8],"./PricingTable/index.vue":[157,0,3],"./TestimonialsSlider/index.vue":[158,0,9],"./VideoHighlights/index.vue":[159,0,1]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=220,e.exports=r},221:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=221},71:function(e,t,n){"use strict";n(18);var r=n(2),o={data:function(){return{pages:[],navigationVisible:!0}},methods:{fetchPages:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$prismic.api.getSingle("navigation").then((function(data){e.pages=data.data.menu_links}));case 2:case"end":return t.stop()}}),t)})))()}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchPages();case 2:case"end":return t.stop()}}),t)})))()},created:function(){this.navigationVisible=!1}},c=(n(216),n(23)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"bg-gray-800"},[n("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"flex items-center justify-between h-16"},[n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"flex-shrink-0"},[n("nuxt-link",{staticClass:"font-display text-lg font-bold pl-3 py-2 uppercase text-gray-300 hover:text-white",attrs:{to:"/"}},[e._v("Moduverse")])],1)]),e._v(" "),n("div",{staticClass:"hidden md:block"},[n("div",{staticClass:"ml-10 flex flex-grow items-center justify-end"},[n("nav",{staticClass:"text-gray-300 flex items-center"},e._l(e.pages,(function(t){return n("prismic-link",{key:t.link.id,staticClass:"mr-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",attrs:{field:t.link,"active-class":"active text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(e.$prismic.asText(t.label))+"\n\t\t\t\t\t\t")])})),1)])]),e._v(" "),e._e(),e._v(" "),n("div",{staticClass:"mr-2 flex md:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white",on:{click:function(t){e.navigationVisible=!e.navigationVisible}}},[e.navigationVisible?n("svg",{staticClass:"block h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})]):n("svg",{staticClass:"block h-6 w-6",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})])])])])]),e._v(" "),n("div",{class:{block:e.navigationVisible,"sm:hidden":!e.navigationVisible}},[n("div",{staticClass:"mx-2 px-2 pt-2 pb-3 sm:px-3  text-gray-300"},e._l(e.pages,(function(t){return n("prismic-link",{key:t.link.id,staticClass:"mt-1 block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",attrs:{field:t.link}},[e._v(e._s(e.$prismic.asText(t.label)))])})),1),e._v(" "),e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{staticClass:"max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid",attrs:{id:"user-menu","aria-label":"User menu","aria-haspopup":"true"}},[t("img",{staticClass:"h-8 w-8 rounded-full",attrs:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"},[t("div",{staticClass:"py-1 rounded-md bg-white shadow-xs",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"user-menu"}},[t("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{href:"#",role:"menuitem"}},[this._v("Your Profile")]),this._v(" "),t("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{href:"#",role:"menuitem"}},[this._v("Settings")]),this._v(" "),t("a",{staticClass:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{href:"#",role:"menuitem"}},[this._v("Sign out")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex items-center px-5"},[t("div",{staticClass:"flex-shrink-0"},[t("img",{staticClass:"h-10 w-10 rounded-full",attrs:{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""}})]),this._v(" "),t("div",{staticClass:"ml-3"},[t("div",{staticClass:"text-base font-medium leading-none text-white"},[this._v("Tom Cook")]),this._v(" "),t("div",{staticClass:"mt-1 text-sm font-medium leading-none text-gray-400"},[this._v("tom@example.com")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mt-3 px-2"},[t("a",{staticClass:"block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",attrs:{href:"#"}},[this._v("Your Profile")]),this._v(" "),t("a",{staticClass:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",attrs:{href:"#"}},[this._v("Settings")]),this._v(" "),t("a",{staticClass:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",attrs:{href:"#"}},[this._v("Sign out")])])}],!1,null,"3b50f9e8",null);t.a=component.exports}},[[168,16,13,17]]]);