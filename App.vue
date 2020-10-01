<template>
	<div id="app">
		<h1>Mes taches à effectuer</h1>
		<AFaire/>
	</div>
</template>

<script>
import AFaire from './components/AFaire.vue'

export default {
	components: {
		AFaire
	}
}
</script>

<style lang="scss">
@import './variables.scss';

*, *::before, *::after {
	box-sizing: border-box;
}

#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: $vue-blue;
}

h1 {
	text-align: center;
}
</style>