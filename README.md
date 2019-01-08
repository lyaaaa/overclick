# overclick
基于vue自定义指令，为元素添加防抖节流防止事件多次触发


# 使用方法

在main.js中引入 overclick.js,即可使用

在元素中通过绑定v-debounce和v-throttle即可使用

例如 <li title='success' v-debounce="{ event: 'click', fn: debounceFn, data: 1, delay: 1000 }">success</li>  event 和 fn 必传, delay 为延迟时间默认200ms
data为时间参数;