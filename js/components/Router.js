import SplashComponent from "./TheSplashPage.js";
import HomeComponent from "./TheHomePage.js"

const routes = [
    { path: "/", name: "splash", component: SplashComponent },
    { path: "/home", name: "home", component: HomeComponent, props: true }
]

const router = new VueRouter({
    routes
})

export default router