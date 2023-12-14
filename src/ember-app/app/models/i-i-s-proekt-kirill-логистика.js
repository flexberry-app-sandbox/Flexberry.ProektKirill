import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЛогистикаMixin
} from '../mixins/regenerated/models/i-i-s-proekt-kirill-логистика';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЛогистикаMixin, Validations, {
});

defineProjections(Model);

export default Model;
