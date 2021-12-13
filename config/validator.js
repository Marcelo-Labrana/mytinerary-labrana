const joi = require('joi')

const validator = (req, res, next) => {
    const nameRegex= /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/
    
    const schema = joi.object({

        lname: joi.string().pattern(new RegExp(nameRegex)).min(2).messages({
            'string.empty':'Last name field must be filled',
            'string.min':'Names must be at least 2 characters long',
            'any.required':'Last name is required',
            "string.pattern.base": "Last name must cotain alphabetical characters only",
            

        }) ,
        fname: joi.string().pattern(new RegExp(nameRegex)).min(2).messages({
            'string.empty':'First name field must be filled',
            'string.min':'Names must be at least 2 characters long',
            'any.required':'First name is required',
            "string.pattern.base": "First name must contain alphabetical characters only"

        }) ,

        email: joi.string().trim().email({ tlds: { allow: false } }).required().messages({
            'string.empty':'Email field must be filled',
            'any.required':'Email field is required'
        }),

        password: joi.string().required().trim().min(6).max(18).messages({
            'string.empty':'Password field must be filled',
            'string.min': 'Password must be at least 6 characters long',
            'string.max': 'Password can only contain up to 18 characters',
            'any.required':'Password is required'
        }),
        img: joi.string().required().trim().pattern(new RegExp('(https?:\/\/.*\.(?:png|jpg))')).messages({
            'string.empty':'Image field must be filled',
            "string.pattern.base":"Image URL must be valid (must start with 'https:' and end with '.png' or '.jpg')"
        }),
        country: joi.string().required().invalid('').messages({'string.empty':'Country field must be selected'})
    })

    const validation = schema.validate(req.body, { abortEarly: false })
    //Investigar opciones de .validate
    //console.log(validation.error.details)
    if(validation.error){
       return res.json({success: false, response: validation.error.details, error: validation.error.details})
    }
    next()
}

module.exports = validator