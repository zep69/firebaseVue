<template>
	<div class="header">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
		<button class="logBtn" v-if="$store.state.user" @click="$store.dispatch('logout')">logout</button>
		<button class="logBtn" v-if="!$store.state.user" @click="$router.push('/login')">Login</button>
	</div>
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
	name: "Header",
	setup(){
		const store = useStore()

		onBeforeMount(()=>{
			store.dispatch('fetchUser')
		})

	}
}
</script>

<style scoped>
.header{
	background-color: #5375E2 ;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

.logBtn{
	position: fixed;
	right: 2rem;
}

</style>