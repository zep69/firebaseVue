<template>
	<Header/>
	<main>
		<router-view/>
	</main>
	<div class="footer">
    <div style="
    color: white; padding:1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;">
      <p>{{year}} by Nikita Pikalov</p>
      <div>
        <Button icon="pi pi-telegram" class="p-button-icon p-button-rounded p-button-outlined" style="color: white;"/>
        <Button icon="pi pi-comment" class="p-button-icon p-button-rounded p-button-outlined" style="color: white; margin-left: 3px;"/>
      </div>

    </div>
  </div>
</template>
<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
	components:{
		Header,Footer,
	},
	data:() => ({
		year: new Date().getFullYear()
	})
}
</script>

<style>
*{

	margin:0;
	padding: 0;
	box-sizing: border-box;

}
.footer{
  overflow: hidden;
	bottom: 0;
  height: 4rem;
  background-color: #5375E2;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
