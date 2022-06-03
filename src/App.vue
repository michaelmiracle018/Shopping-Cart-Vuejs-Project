<template>
	<Products :toggleSidebar="toggleSidebar" />
	<Sidebar v-if="showSidebar" :toggleSidebar="toggleSidebar" />
</template>

<script>
import Products from "./components/Products.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
	name: "App",
	components: {
		Products,
		Sidebar,
	},
	data() {
		return {
			showSidebar: false,
		};
	},
	methods: {
		toggleSidebar() {
			this.showSidebar = !this.showSidebar;
		},
		
	},
};
</script>

<style></style>
