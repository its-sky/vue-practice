import { createWebHistory, createRouter } from "vue-router";
import TitleComp from '../components/Title.vue';
import PortfolioComp from '../components/Portfolio.vue';
import AboutComp from '../components/About.vue';
import DetailComp from '../components/Detail.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: TitleComp,
		},
		{
			path: '/portfolio',
			component: PortfolioComp,
		},
		{
			path: '/about',
			component: AboutComp,
		},
		{
			path: '/detail/:id',
			component: DetailComp,
		},
	]
})

export default router;