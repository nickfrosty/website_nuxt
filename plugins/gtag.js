import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-HNVZKZFGFB' }, 
  bootstrap: 'true', 
  appName: 'frostbutter.com', 
  enabled: true, 
  pageTrackerScreenviewEnabled: true, 
})