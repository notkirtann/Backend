import Joi from 'joi';

const objectId = Joi.string().hex().length(24);
const requiredString = Joi.string().trim().required();

const categorySchema = Joi.object({
    name: requiredString,
    slug: Joi.string().trim().lowercase().required()
});

const companySchema = Joi.object({
    name: requiredString,
    location: requiredString,
    logo: Joi.string().trim().allow('').optional()
});

const productSchema = Joi.object({
    name: requiredString,
    company: objectId.required(),
    price: Joi.number().min(0).required(),
    colors: Joi.array().items(Joi.string()).optional(),
    image: Joi.string().trim().optional(),
    category: objectId.required(),
    isFeature: Joi.boolean().optional()
});

const docSchema = Joi.object({
    name: requiredString,
    values: Joi.array().items(Joi.number()).min(1).required()
});

const commentSchema = Joi.object({
    user: requiredString,
    message: requiredString,
    createdAt: Joi.date().optional()
});

const metadataSchema = Joi.object({
    views: Joi.number().min(0).optional(),
    likes: Joi.number().min(0).optional(),
    tags: Joi.array().items(Joi.string()).optional()
});

const postSchema = Joi.object({
    _id: Joi.number().optional(),
    title: requiredString,
    content: requiredString,
    author: requiredString,
    comments: Joi.array().items(commentSchema).optional(),
    metadata: metadataSchema.optional()
});

const salesSchema = Joi.object({
    _id: Joi.number().required(),
    quantity: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
    targetPrice: Joi.number().min(0).required()
});

export{
    categorySchema,
    docSchema,
    postSchema,
    companySchema,
    productSchema,
    salesSchema,
}
