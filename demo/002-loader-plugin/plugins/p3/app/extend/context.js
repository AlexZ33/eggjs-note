'use strict';

module.exports = {
  get plugin3_ctx_func() {
    return function() {
      console.log('this is plugin3_ctx_func');
    };
  },
};
