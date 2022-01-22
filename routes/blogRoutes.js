const express = require('express');
const blogConroller = require('../controllers/blogController')

const router = express.Router()

router.get('/create', blogConroller.blog_create_get);

router.get('/', blogConroller.blog_index);

router.post('/', blogConroller.blog_create_post)

router.get('/:id', blogConroller.blog_details)

router.delete('/:id', blogConroller.blog_delete)



module.exports = router;