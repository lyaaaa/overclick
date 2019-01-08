import Vue from 'vue'
(function () {
  // 防抖,防止多次点击
  function _debounce(func, delay) {
    let timer
    return function (...args) {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
  // 节流
  function _throttle(func, delay) {
    let timer
    return function (...args) {
      if (!timer) {
        timer = setTimeout(() => {
          func.apply(this, args)
          timer = null
        }, delay);
      }
    }
  }
  // 给元素添加事件  
  function _addEvent(el, event, func) {
    if (el.addEventListener) {
      el.addEventListener(event, func)
    } else if (el.attachEvent) {
      el.attachEvent('on' + event, func);
    } else {
      el['on' + event] = func;
    }
  }

  var debounceClick = {
    bind: function (el, binding) {
      _addEvent(el, binding.value.event, _debounce(() => {
        if (binding.value.data) {
          binding.value.fn(binding.value.data)
        } else {
          binding.value.fn()
        }
      }, binding.value.delay || 200))
    },
    unbind: function (el, binding) {
      _addEvent(el, binding.value.event, function () {});
    }
  }
  var throttleClick = {
    bind: function (el, binding) {
      _addEvent(el, binding.value.event, _throttle(() => {
        if (binding.value.data) {
          binding.value.fn(binding.value.data)
        } else {
          binding.value.fn()
        }
      }, binding.value.delay || 200))
    },
    unbind: function (el, binding) {
      _addEvent(el, binding.value.event, function () {});
    }
  }
  Vue.directive('debounce', debounceClick)
  Vue.directive('throttle', throttleClick)
})()
