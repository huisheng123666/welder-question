"use strict";
const common_vendor = require("../../common/vendor.js");
const config_question = require("../../config/question.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const searchKey = common_vendor.ref("");
    const list = common_vendor.computed$1(() => {
      if (!searchKey.value)
        return [];
      return config_question.question.filter((item) => item.includes(searchKey.value));
    });
    function clean() {
      searchKey.value = "";
    }
    return (_ctx, _cache) => {
      return {
        a: searchKey.value,
        b: common_vendor.o(common_vendor.m(($event) => searchKey.value = $event.detail.value, {
          lazy: true
        })),
        c: common_vendor.o(clean),
        d: common_vendor.f(common_vendor.unref(list), (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "D:/my-project/han-gong/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
