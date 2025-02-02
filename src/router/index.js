import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "countries",
		component: () => import("../views/CountriesList.vue"),
		children: [
			{
				path: "/:code",
				name: "details",
				component: () => import("../views/CountryDetails.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});
export default router;
