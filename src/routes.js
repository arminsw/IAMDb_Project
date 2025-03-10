import Home from "@/Views/Home.vue";
import List from "@/Views/List.vue";
import Detail from "@/Views/Detail.vue";
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/detail',
        component: Detail
    }
];

export default routes;