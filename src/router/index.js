import { createRouter } from "vue-router";
import HomeView from "../views/homeview.vue"
import CityView from "../views/CityView.vue"
const routes =  createRouter({
    history: createWebHistory(import.meta.env.baseURL),
    routes:[
        {
            path: "/",
            name: "Home",   
            component: HomeView
        },
        {
            path:"/weather/:state/:city",
            name: "cityView",
            component: CityView
        }
    ]

})



export default routes;s