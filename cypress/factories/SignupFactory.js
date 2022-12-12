var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11887176532',
            adress: {
                postalcode: '09330788',
                street: 'Rua Albert Sabin',
                number: '31',
                details: 'Casa',
                district: 'Jardim São Gabriel',
                city_state: 'Mauá/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}