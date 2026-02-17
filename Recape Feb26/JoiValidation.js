import Joi from 'Joi'

const userFields = {
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),

    repeat_password: Joi.ref('password'),

    access_token: Joi.alternatives().try(
        Joi.string(),
        Joi.number()
    ),

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
};

const userSchema = Joi.object(userFields)
    .with('username', 'birth_year')
    .xor('password', 'access_token')
    .with('password', 'repeat_password');

export {userFields,userSchema}


const loginSchema = Joi.object({
    username: userFields.username.required(),
    password: userFields.password.required()
})

schema.validate({ username: 'abc', birth_year: 1994 });
// -> { value: { username: 'abc', birth_year: 1994 } }

schema.validate({});
// -> { value: {}, error: '"username" is required' }

// Also -

try {
    const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
}
catch (err) { }

/**
 The above schema defines the following constraints:
username
        a required string
        must contain only alphanumeric characters
        at least 3 characters long but no more than 30
        must be accompanied by birth_year

password
        an optional string
        must satisfy the custom regex pattern
        cannot appear together with access_token
        must be accompanied by repeat_password and equal to it

access_token
        an optional, unconstrained string or number

birth_year
        an integer between 1900 and 2013
        
email
        a valid email address string
        must have two domain parts e.g. example.com
        TLD must be .com or .net
 */