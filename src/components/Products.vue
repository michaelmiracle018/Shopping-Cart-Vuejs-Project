<template>
	<nav class="navbar">
		<div class="navbar-center">
			<span class="nav-icon">
				<i class="fas fa-bars"></i>
			</span>
			<img src="../assets/images/logo.svg" alt="logo" />
			<div class="cart-btn">
				<span @click="toggleSidebar" class="nav-icon">
					<i class="fa-solid fa-cart-shopping"></i>
				</span>
				<div class="cart-items">{{ cartQuantity }}</div>
			</div>
		</div>
	</nav>
	<!-- end of navbar -->
	<!-- hero -->
	<header class="hero">
		<div class="banner">
			<h1 class="banner-title">Furniture Collection</h1>
			<button class="banner-btn">shop now</button>
		</div>
	</header>
	<!-- end of hero -->
	<!-- products -->
	<section class="products">
		<div class="section-title">
			<h2>Our Products</h2>
		</div>
		<div class="products-center">
			<!-- single products -->
			<article v-for="item in displayCartItems" :key="item.id" class="product">
				<div class="img-container">
					<img
						:src="require(`../assets/images/${item.image}`)"
						alt="Items"
						class="product-img"
					/>
					<button @click="addToCart(item)" class="bag-btn" data-id="1" >
						<i class="fa-solid fa-cart-shopping"></i>
						Add To cart
					</button>
				</div>
				<h3>{{ item.title }}</h3>
				<h4>${{ item.price }}</h4>
			</article>
			<!-- end of single products -->
		</div>
	</section>
	<!-- end of products -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "Products",
	props: ["toggleSidebar"],
	computed: {
		...mapGetters(["displayCartItems", "cartQuantity", "setBtnLock"]),
	},
	methods: {
		...mapActions(["addToCart", "setUpCart"]),
	},
};
</script>

<style scoped></style>
