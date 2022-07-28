const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
  query,
  addReview,
  remove,
}

async function query() {
  try {
    const collection = await dbService.getCollection('review')
    const reviews = await collection.find().toArray()
    reviews.sort((a, b) => { a.createdAt - b.createdAt })
    return reviews;
  } catch (err) {
    logger.error('cannot find reviews', err);
    throw err;
  }
}

async function addReview(review) {

  const reviewToAdd = {
    createdAt: new Date(),
    title: review.title,
    text: review.text
  }

  const collection = await dbService.getCollection('review')
  const addedReview = await collection.insertOne(reviewToAdd)
  return addedReview
}

async function remove(reviewId) {
  try {
    const collection = await dbService.getCollection('review')
    const criteria = { _id: ObjectId(reviewId) }
    await collection.deleteOne(criteria)
  } catch (err) {
    logger.error(`cannot remove review ${reviewId}`, err)
    throw err
  }
}

