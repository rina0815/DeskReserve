import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

const opts = {
	icons: {
		iconfont: 'mdi'
    }
};

const vuetify = new Vuetify(opts);

export default vuetify;
