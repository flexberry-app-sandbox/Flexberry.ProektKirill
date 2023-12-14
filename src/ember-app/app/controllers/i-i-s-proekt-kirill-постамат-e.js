import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-proekt-kirill-постамат-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-proekt-kirill-ячейка+хранение':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'продления',
            required: true,
            relationName: 'хранение',
            projection: 'ХранениеL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
