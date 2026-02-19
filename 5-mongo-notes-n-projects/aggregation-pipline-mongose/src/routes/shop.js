import express from 'express';

import category from './category.routes.js'
import doc from './doc.routes.js'
import post from './post.routes.js'
import companies from './companies.routes.js'
import product from './product.routes.js'
import sales from './sales.routes.js'

const router = express.Router();

router.use('/category',category)
router.use('/doc',doc)
router.use('/post',post)
router.use('/companies',companies)
router.use('/product',product)
router.use('/sales',sales)

export default router; 