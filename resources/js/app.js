require('./bootstrap');
import Vue from 'vue';
import router from './router';
import App from './App.vue';
import vuetify from './vuetify';

new Vue({
el: '#app',
	router,
	vuetify,
	components: { App },
	template: '<App />'
})
