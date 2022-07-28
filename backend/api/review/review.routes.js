const express = require('express')
const { getReviews, addReview, deleteReview } = require('./review.controller')
const router = express.Router()

router.get('/', getReviews)
router.post('/', addReview)
router.delete('/:id', deleteReview)

module.exports = router
