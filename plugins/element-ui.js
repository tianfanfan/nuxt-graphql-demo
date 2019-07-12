import Vue from 'vue'
import { Button, Select, TimePicker } from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.prototype.$ELEMENT = { locale }
Vue.use(Button)
Vue.use(Select)
Vue.use(TimePicker)
// Vue.use(Element, { locale })
