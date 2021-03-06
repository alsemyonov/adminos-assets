import 'jquery';
import 'jquery-autosize';

import 'jquery-ui/ui/sortable';
import './dist/vendor/js/jquery_nested_sortable';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min';

import 'spin/dist/spin.min';
import 'select2/dist/js/select2.min';
import 'select2/dist/js/i18n/ru';

import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ru.min';
import 'bootstrap/dist/js/bootstrap.min';

if (process.env.NODE_ENV === 'production') {
  require('./dist/js/adminos.min');
} else {
  require('./dist/js/adminos');
}