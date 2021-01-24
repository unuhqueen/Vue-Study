import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter ({
    mode: "history",
    //url별 component 설정
    routes: [
        {path:"/", component: Home},
        {path:"/about", component: About},
    ]
});

export default router;