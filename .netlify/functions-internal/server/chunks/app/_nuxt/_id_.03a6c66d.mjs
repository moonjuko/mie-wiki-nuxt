import { c as useRoute } from '../server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const id = route.params.id;
    const detailCard = getCardById(id);
    function getCardById(idToFind) {
      if (idToFind > cards.length)
        return;
      let card = cards.find((x) => x.id == idToFind);
      return card;
    }
    function formatText() {
      return detailCard.longDescription.replace(/\n/g, "<br />");
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(detailCard)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="some-page-wrapper"><div class="row"><div class="column"><div class="blue-column"><h1 class="detailTitle">${ssrInterpolate(unref(detailCard).name)}</h1><p class="detailText">${formatText()}</p></div></div><div class="column"><div class="green-column"><div class="slider"><span id="slide-1"></span><span id="slide-2"></span><span id="slide-3"></span><div class="image-container"><img${ssrRenderAttr("src", "/images/" + unref(detailCard).img1)} class="slide" width="660" height="460"><img${ssrRenderAttr("src", "/images/" + unref(detailCard).img2)} class="slide" width="660" height="460"><img${ssrRenderAttr("src", "/images/" + unref(detailCard).img3)} class="slide" 8 width="660" height="460"></div><div class="buttons"><a href="#slide-1"></a><a href="#slide-2"></a><a href="#slide-3"></a></div></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/destinations/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_.03a6c66d.mjs.map
