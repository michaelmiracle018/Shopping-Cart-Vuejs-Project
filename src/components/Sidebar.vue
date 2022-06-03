<template>
	<!-- cart -->
	<div class="cart-overlay">
		<div class="cart">
			<span @click="toggleSidebar" class="close-cart">
				<i class="fa-solid fa-window-close"></i>
			</span>
			<h2>your cart</h2>

			<div class="cart-content">
				<!-- cart item -->
				<div v-for="(cart) in getProductItems" :key="cart.id" class="cart-item">
					<img :src="require(`../assets/images/${cart.image}`)" alt="item" />
					<div>
						<h4>{{ cart.title }}</h4>
						<h5>${{ cart.price * cart.quantity }}</h5>
						<span @click="removeFromCart(cart.id)" class="remove-item">remove</span>
					</div>
					<div>
						<i @click="increaseQuantity(cart.id)" class="fa-solid fa-chevron-up"></i>
						<p class="item-amount">{{cart.quantity}}</p>
						<i @click="decreaseQuantity(cart.id)" class="fa-solid fa-chevron-down"></i>
					</div>
				</div>
				<!-- end of cart item -->
			</div>
			<div class="cart-footer">
				<h3>your total : $ <span class="cart-total">{{getTotalItems}}</span></h3>
				<button @click="removeAllCart(cart)" class="clear-cart banner-btn">clear cart</button>
			</div>
		</div>
	</div>
	<!-- end of cart -->
</template>

<script>
import {  mapGetters,mapActions,mapState } from "vuex";
export default {
	name: "Sidebar",
	props: ["toggleSidebar"],
	computed: {
		...mapGetters(["getProductItems", 'getTotalItems']),
    ...mapState(['counter'])
	},
  methods: {
    ...mapActions(['removeFromCart','increaseQuantity', 'decreaseQuantity','removeAllCart'])
  }
};
</script>

<style></style>
