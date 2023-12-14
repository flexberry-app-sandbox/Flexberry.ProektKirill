import {
  defineNamespace,
  defineProjections,
  Model as СлужбаДоставкиMixin
} from '../mixins/regenerated/models/i-i-s-proekt-kirill-служба-доставки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СлужбаДоставкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
