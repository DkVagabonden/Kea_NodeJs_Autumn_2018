const {Model} = require('objection');

class User extends Model {
    static get tableName() {
        return "users";
    }

    static get jsonSchema() {
        
        return {
            type: 'object',
            required: ['email', 'password'],
        
            properties: {
                id: {type: 'integer'},
                email: {type: 'string'},
                password: {type: 'string'},
                timestamp: {type: 'dateTime'}
            }
        }
    }
}

module.exports = User;