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
        component: TypographyChartView
    },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})