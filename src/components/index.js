import BokeButton from './button/index.vue';
import BokeForm from './form/index.vue';
import BokeTitle from './title/index.vue';
import BokeAutocomplete from './autocomplete/index.vue';
import BokeTable from './table/index.vue';
import BokePage from './page/index.vue';
import BokePagination from './pagination/index.vue';
export default {
  install(Vue) {
    Vue.component('BokeButton', BokeButton);
    Vue.component('BokeForm', BokeForm);
    Vue.component('BokeTitle', BokeTitle);
    Vue.component('BokeAutocomplete', BokeAutocomplete);
    Vue.component('BokeTable', BokeTable);
    Vue.component('BokePage', BokePage);
    Vue.component('BokePagination', BokePagination);
  },
};
