const express = require("express");
const {
    handleGetAllUsers
    ,handleGetUserById
    ,handleUpdateUserById
    ,handleDeleteUserById
    ,handleCreateNewUser
} = require('../controllers/user');

const router = express.Router();

//Routes => REST API
router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.route("/:id").get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

// console.log(router);
module.exports={router};

