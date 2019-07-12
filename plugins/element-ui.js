import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Select,
  TimePicker
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.prototype.$ELEMENT = { locale }
Vue.use(Button)
Vue.use(Select)
Vue.use(TimePicker)

Vue.use(Main)
Vue.use(Footer)

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)

// Vue.use(Element, { locale })
