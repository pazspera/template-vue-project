import DocsView from "@/views/DocsView.vue";
import HomeView from "@/views/HomeView.vue";
import ThemesView from "@/views/ThemesView.vue";
import TypographyChart from "@/views/TypographyChart.vue";
import { createMemoryHistory, createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: HomeView
    },
    {
        path: "/docs",
        name: "Docs",
        component: DocsView
    },
    {
        path: "/themes",
        name: "Themes",
        component: ThemesView
    },
    {
        path: "/typograpy-chart",
        name: "TypographyChart",
        component: TypographyChart
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})