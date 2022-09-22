<template>
	<div class="p-toolbar" style="background-color: #5375E2">
    <div class="p-toolbar-group-left">
      <router-link class="p-button p-button-text" style="color: white" to="/">Главная</router-link>
      <router-link class="p-button p-button-text" style="color: white" to="/about">Обо мне</router-link>
    </div>




    <button class="p-toolbar-group-right p-button p-button-rounded p-button-danger" v-if="$store.state.user" @click="$store.dispatch('logout')">Выйти</button>
    <button class="p-toolbar-group-right p-button p-button-rounded p-button-success" v-if="!$store.state.user" @click="$router.push('/login')">Войти</button>

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
	height: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

.logBtn{
	position: fixed;
	right: 0.5rem;
}

</style>