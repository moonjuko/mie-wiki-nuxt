import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { c as cards } from './cards.1924e27f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import 'tailwind-merge';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';

const _sfc_main$1 = {
  props: ["id", "img", "name", "description"]
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="image"><img${ssrRenderAttr("src", "/images/" + $props.img)}></div><div class="content"><h3 class="cardTitle">${ssrInterpolate($props.name)}</h3><p class="description">${ssrInterpolate($props.description)}</p><a${ssrRenderAttr("href", "/destinations/" + $props.id)} class="button">Explore</a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "dest",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = __nuxt_component_0;
      _push(`<!--[--><header class="masthead clear"><div class="centered"><div class="site-branding"><h1 class="site-title">Everything About Mie-Ken in Your Pocket</h1><p class="destText"> Mie boasts exceptional seafood thanks to its ocean-side location and is also home to one of the three best types of Japanese beef. <br>And then there\u2019s its natural beauty, with dense ancient forests that meet cascading waterfalls. </p><h3 class="bestDest">The Best Places to Visit</h3></div></div></header><main class="main-area"><div class="centered"><section class="cards"><!--[-->`);
      ssrRenderList(unref(cards), (card) => {
        _push(ssrRenderComponent(_component_Card, {
          img: card.img,
          name: card.name,
          description: card.description,
          id: card.id,
          key: card.id
        }, null, _parent));
      });
      _push(`<!--]--></section></div></main><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dest.29dd81c8.mjs.map
