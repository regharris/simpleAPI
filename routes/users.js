import express from 'express';
import { v4 as uuidv4 } from 'uuid';
//Initializing my router
const router = express.Router()
//database of users
let users = [];

//all routes here start with /users from server.js
router.get('/', (req,res) => {
    res.send(users);
})
router.post('/', (req,res) => {
    //sets user to the request body
    const user = req.body
    //generates a random id
    const userid = uuidv4();
    //uses spread operator to join user obj and id into a new object
    const userWithId = {...user, id:userid}
    //pushes the new object to the users array
    users.push(userWithId);
    res.send(`Add new user ${user.firstName}`)
})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    //finding which users id matches the id that is searched for 
    const foundUser = users.find((user) => user.id === id)
    //returning the user found
    res.send(foundUser)
})

router.delete('/:id', (req,res) => {
 const {id} = req.params

 users = users.filter((user) => user.id !== id);

 res.send(`user with the id ${id} is deleted`)


})

router.patch('/:id', (req,res) => {
    const {id} = req.params
    const {firstName, lastName, age} = req.body


    users = users.find((user) => user.id === id)

    if(firstName) users.firstName = firstName;
    if(lastName) users.lastName = lastName;
    if(age) users.age = age;

})



export default router;