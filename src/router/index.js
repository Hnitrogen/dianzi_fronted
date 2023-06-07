// import { createRouter, createWebHistory } from 'vue-router'
// import DataListView from '../views/DataListView.vue'
// import DataPostView from '../views/DataPostView.vue'

// const routes = [
//     {
//         path: "/download/",
//         name: "download",
//         component: DataListView,
//     },
//     {
//         path: "/upload/",
//         name: "upload",
//         component: DataPostView,
//     }
// ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

// export default router


import { createRouter, createWebHistory } from 'vue-router'
import DataListView from '../views/DataListView.vue'
import DataPostView from '../views/DataPostView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        redirect: { name: 'upload' },
    },
    {
        path: '/upload/',
        name: 'upload',
        component: DataPostView
    },
    {
        path: '/download/',
        name: 'download',
        component: DataListView
    },
    // {
    //     path: '/myspace/404/',
    //     name: '404',
    //     component: NotFoundView
    // },
    // {
    //     path: '/myspace/:catchAll(.*)',
    //     redirect: "/myspace/404/"
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
