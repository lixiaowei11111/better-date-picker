import DatePicker from './src/picker/date-picker';

/* istanbul ignore next */
DatePicker.install = function install(Vue) {
  Vue.component('SBElDatePicker', DatePicker);
};

export default DatePicker;
