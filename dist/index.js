!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["kidsloop-branding"]=o():e["kidsloop-branding"]=o()}(this,(function(){return(()=>{"use strict";var e={911:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0});const n={company:{name:"KidsLoop",officialName:"KidsLoop Limited",website:new URL("https://www.kidsloop.net/")},defaultLocale:"en",policies:{help:new URL("https://www.kidsloop.net/en/faq/"),refund:new URL("https://kidsloop.net/en/policies/return-policy/"),privacy:new URL("https://www.kidsloop.net/policies/terms/"),termsAndConditions:new URL("https://www.kidsloop.net/policies/privacy-notice/")},auth:{showRegionSelect:!0},webpack:{resolve:{alias:{"@branding":"kidsloop-branding/dist/brands/kidsloop"}}}};o.default=n},857:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0});const n={company:{name:"Rumah Kisah",officialName:"Rumah Kisah",website:new URL("https://rumahkisah.id/")},defaultLocale:"id",policies:{privacy:new URL("https://rumahkisah.id/privacy-policy"),termsAndConditions:new URL("https://rumahkisah.id/terms-and-conditions")},auth:{showRegionSelect:!1},webpack:{resolve:{alias:{"@branding":"kidsloop-branding/dist/brands/rumahkisah"}}}};o.default=n},758:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.BrandingError=void 0;class n extends Error{constructor(e){super(e),this.name="BrandingError"}}o.BrandingError=n},607:function(e,o,n){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(o,"__esModule",{value:!0}),o.loadBrandingOptions=o.BrandingError=void 0;const r=t(n(682)),i=n(758);Object.defineProperty(o,"BrandingError",{enumerable:!0,get:function(){return i.BrandingError}});const s=t(n(911)),a=t(n(857)),d=r.default("kidsloop-branding");o.loadBrandingOptions=function(e){switch(e){case"KIDSLOOP":return s.default;case"RUMAH_KISAH":return a.default;case void 0:return d("No brand specified, defaulting to Kidsloop"),s.default;default:throw new i.BrandingError(`Unrecognised brand ${e}`)}}},682:e=>{e.exports=require("debug")}},o={};return function n(t){var r=o[t];if(void 0!==r)return r.exports;var i=o[t]={exports:{}};return e[t].call(i.exports,i,i.exports,n),i.exports}(607)})()}));