import Vue from "vue"
import Router from "vue-router"
import Home from './views/Home.vue'
import AppHeader from './components/homeComponents/AppHeader.vue'
import Student from './views/Student.vue'
import StudentHeader from './components/studentComponents/StudentHeader.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        components: {
            header: AppHeader,
            default: Home
        }
    }, {
        path: '/student/:id',
        name: 'student',
        components:{
            header: StudentHeader,
            default: Student
        }
    }],
    scrollBehavior: to => {
        if (to.hash) {
            return {
                selector: to.hash
            };
        } else {
            return {
                x: 0,
                y: 0
            };
        }
    }
})

export {
    router
}