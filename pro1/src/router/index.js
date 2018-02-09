import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index'
import page2 from '@/components/page2/page2'
import page3 from '@/components/page3/page3'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index.vue',
            component: index
        },
        {
            path: '/page2/page2',
            name: 'page2.vue',
            component: page2
        },
        {
            path: '/page3/page3/:id',
            name: 'page2.vue',
            component: page3
        }
    ]
})