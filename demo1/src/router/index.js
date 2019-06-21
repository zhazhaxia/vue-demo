import Vue from 'vue'
import Router from 'vue-router'
import PageMain from '@/components/PageMain'
import PageTest from '@/components/PageTest'

Vue.use(Router)

export default new Router({
  routes: [
	{
      path: '/',
      redirect: '/pagemain'
    },
    {
      path: '/pagemain',
      name: 'PageMain',
      component: PageMain
    },
    {
      path: '/pagetest',
      name: 'PageTest',
      component: PageTest
    }
  ]
})