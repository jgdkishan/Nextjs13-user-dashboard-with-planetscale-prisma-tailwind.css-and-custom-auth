/**
 * !! These are methods for basic testing of auth with raw data
 */

const fs = require('fs');
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// users in JSON file for simplicity, store in a db for production applications
let users = require('./data/users.json');

const create = async (user) => {
    // generate new user id
    user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

const saveData = async () => {
    console.info(JSON.stringify(users, null, 4))
    await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          posts: {
            create: { title: 'Hello World' },
          },
          profile: {
            create: { bio: 'I like turtles' },
          },
        },
      })
}

export const usersRepo = {
  getAll: () => users,
  getById: id => users.find(x => x.id.toString() === id.toString()),
  find: x => users.find(x),
  create,
  update,
  delete: _delete
};