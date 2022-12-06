import { createStore } from "vuex";
// import axios from "axios";

// const cartURL = "http://localhost:4000/items";
let cart = window.localStorage.getItem("cart");
export default createStore({
	state: {
		counter: 1,
		cart: [],
		products: [
			{
				id: 1,
				title: "queen panel bed",
				price: 10.99,
				image: "product-1.jpeg",
				lock: false,
			},
			{
				id: 2,
				title: "king panel bed",
				price: 12.99,
				image: "product-2.jpeg",
				lock: false,
			},
			{
				id: 3,
				title: "single panel bed",
				price: 12.99,
				image: "product-3.jpeg",
				lock: false,
			},
			{
				id: 4,
				title: "twin panel bed",
				price: 22.99,
				image: "product-4.jpeg",
				lock: false,
			},
			{
				id: 5,
				title: "fridge",
				price: 88.99,
				image: "product-5.jpeg",
				lock: false,
			},
			{
				id: 6,
				title: "dresser",
				price: 32.99,
				image: "product-6.jpeg",
				lock: false,
			},
			{
				id: 7,
				title: "couch",
				price: 45.99,
				image: "product-7.jpeg",
				lock: false,
			},
			{
				id: 8,
				title: "table",
				price: 33.99,
				image: "product-8.jpeg",
				lock: false,
			},
		],
	},

	getters: {
		displayCartItems(state) {
			// localStorage.setItem("state.products", JSON.stringify(state.products));
			return state.products;
		},
		getProductItems(state) {
			// localStorage.setItem("cart", state.cart)
			return state.cart;
		},
		getTotalItems: (state) => {
			var total = 0;
			state.cart.forEach((item) => {
				total += item.price * item.quantity;
			});
			return total.toFixed(2);
		},
		cartQuantity(state) {
			return state.cart.reduce((sum, item) => {
				return sum + item.quantity;
			}, 0);
		},
	},

	actions: {
		addToCart({ commit }, item) {
			localStorage.setItem("cart", JSON.stringify(item));
			commit("addToCart", item);
		},
		removeFromCart({ commit }, id) {
			commit("removeItem", id);
		},
		increaseQuantity({ commit }, id) {
			commit("increaseCartItem", id);
		},
		decreaseQuantity({ commit }, id) {
			commit("decreaseCartItem", id);
		},
		removeAllCart({ commit }, cart) {
			commit("removeAllItem", cart);
		},
		getCartFromStorage({ commit }) {
			localStorage.getItem(JSON.parse(cart));
			commit("addToCart");
		},
	},
	mutations: {
		addToCart(state, item) {
			// state.cart.push({ ...item, quantity: 1 });
				localStorage.setItem("comfy", JSON.stringify(item))
			// 	state.products.map((product) => {
			// 		if (product.id === item.id) {
			// 			item.lock = true;
			// 		}
			// 	});
			let itemFound = state.cart.find((p) => p.id === item.id);
			if (!itemFound) {
				state.cart.push({ ...item, quantity: 1 });
			}
			if (itemFound) {
				itemFound.quantity = 1;
			}
		},
		// saveCart: (state) => {
		// 	window.localStorage.setItem("cart", JSON.stringify(state.cart));
		// },
		removeItem(state, id) {
			state.cart = state.cart.filter((item) => item.id !== id);
		},
		increaseCartItem(state, id) {
			state.cart.map((item) => {
				if (item.id == id) {
					item.quantity += 1;
				}
			});
		},
		decreaseCartItem(state, id) {
			state.cart.map((item) => {
				if (item.id == id) {
					item.quantity -= 1;
				}
			});
			state.cart.map((item) => {
				if (item.quantity < 1) {
					state.cart = state.cart.filter((item) => item.id !== id);
				}
			});
		},
		removeAllItem(state, cart) {
			state.cart = state.cart.splice(0, cart);
		},
	},
});
