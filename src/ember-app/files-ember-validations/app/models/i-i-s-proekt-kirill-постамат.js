import {
  defineNamespace,
  defineProjections,
  Model as ПостаматMixin
} from '../mixins/regenerated/models/i-i-s-proekt-kirill-постамат';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПостаматMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
