const BumblebeeTransformer = use('Bumblebee/Transformer')

class UserTransformer extends BumblebeeTransformer {
  transform (model) {
    return {
      id: model.id,

      firstname: model.first_name,
      lastname: model.last_name
    }
  }
}

module.exports = UserTransformer

