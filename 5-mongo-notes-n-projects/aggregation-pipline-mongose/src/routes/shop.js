import express from 'express';

import category from 'category.routes.js'
import col from 'col.routes.js'
import comments from 'comments.routes.js'
import companies from 'companies.routes.js'
import product from 'product.routes.js'
import sales from 'sales.routes.js'

const router = express.Router();

router.use('/category',category)
router.use('/col',col)
router.use('/comments',comments)
router.use('/companies',companies)
router.use('/product',product)
router.use('/sales',sales)

export{
    category,
    col,
    comments,
    companies,
    product,
    sales
}