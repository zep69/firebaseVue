<template>
	<main class="login page">

    <div class="p-card" style="margin-top: 7rem" >
      <TabView>
		<section class="forms " >
      <TabPanel>
        <template #header>
          <span>Зарегистрироваться</span>
        </template>
      <Card class="p-card" style="margin-top: 3rem;padding: 2rem">
        <template #header>
          <img src="../assets/19199620.jpg" style="height: 25rem"  >
        </template>
        <template #content>
			  <form  class="register" @submit.prevent="register">
				  <h2>Чтобы записаться на урок, зарегистрирутесь</h2>
          <br>
          <input class="p-inputtext" type="email" placeholder="Email" v-model="register_form.email"/>
          <input class="p-inputtext" type="password" placeholder="password" v-model="register_form.password"/>
          <Button type="submit" value="Register">Register </Button>
			 </form>
        </template>
      </Card>
      </TabPanel>

      <TabPanel>
        <template #header>
          <span>Войти</span>
        </template>
       <Card class="p-card" style="margin-top: 3rem; padding: 2rem">
         <template #header>
           <img src="../assets/5836.jpg" style="height: 25rem">
         </template>
         <template #content>
			   <form class="login" @submit.prevent="login">
				   <h2>Войти в систему</h2>
           <br>
           <input class="p-inputtext" type="email" style="margin-left: 1rem" placeholder="Email" v-model="login_form.email"/>
				   <input class="p-inputtext" type="password" style="margin-left: 1rem" placeholder="password" v-model="login_form.password"/>
           <Button	class="p-button p-button-success" style="margin-left: 1rem" type="submit" value="Login">Login</Button>
			   </form>
         </template>
      </Card>
      </TabPanel>
		</section>
      </TabView>
    </div>
	</main>

</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
	name: "Login",
	setup (){
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value)
		}

		const register = () => {
		  store.dispatch('register', register_form.value)
		}

		return{
			login_form,
			register_form,
			login,
			register
		}
	}
}
</script>

<style scoped>
.page{
  width: 45rem;
  max-width: 45rem;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%);
}
</style>