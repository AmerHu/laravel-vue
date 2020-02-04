import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import dashboard from './pages/dashboard'
import testComponent from './pages/testComponent'

export default new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/', component: dashboard },
        { path: '/test/:title', component: testComponent, props: true }
    ]
})