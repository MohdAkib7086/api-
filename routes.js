const express = require('express');
const controller = require('./controller');

const router = express.Router();



router
  .route('/')
  .get(controller.getAllUsers)
  .post(controller.createUser);

router
  .route('/:email')
  .get(controller.getUser)
  .patch(controller.updateUser)
  .delete(controller.deleteUser);



module.exports = router;