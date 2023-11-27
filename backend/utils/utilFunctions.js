// import List from '../models/list.js';
const List = require("../models/list");

const populateLists = async (projectId) => {
  const newLists = await List.findOne({ projectId })
    .populate({
      path: "lists.tasks",
      populate: {
        path: "users",
        select: "username email profilePicture",
      },
    })
    .populate({
      path: "lists.tasks",
      populate: {
        path: "toDoLists.lists",
      },
    })
    .populate({
      path: "archivedTasks",
      populate: {
        path: "users",
        select: "username email profilePicture",
      },
    })
    .populate({
      path: "archivedTasks",
      populate: {
        path: "toDoLists.lists",
      },
    })
    .populate({
      path: "lists.tasks",
      populate: {
        path: "comments.user",
        select: "username email profilePicture",
      },
    })
    .populate({
      path: "archivedTasks",
      populate: {
        path: "comments.user",
        select: "username email profilePicture",
      },
    });

  return newLists;
};

const taskPopulation = (task) => {
  return task
    .populate({
      path: "users",
      select: "username email profilePicture",
    })
    .populate("toDoLists.lists")
    .populate({
      path: "comments.user",
      select: "username profilePicture",
    });
};

const listPopulation = (list) => {
  return list
    .populate({
      path: "lists.tasks",
      populate: {
        path: "users",
        select: "username email profilePicture",
      },
    })
    .populate({
      path: "lists.tasks",
      populate: {
        path: "toDoLists.lists",
      },
    })
    .populate({
      path: "archivedTasks",
      populate: {
        path: "users",
        select: "username email profilePicture",
      },
    })
    .populate({
      path: "archivedTasks",
      populate: {
        path: "toDoLists.lists",
      },
    })
    .populate({
      path: "lists.tasks",
      populate: {
        path: "comments.user",
        select: "username email profilePicture",
      },
    })
    .populate({
      path: "archivedTasks",
      populate: {
        path: "comments.user",
        select: "username email profilePicture",
      },
    });
};

module.exports = { populateLists, taskPopulation, listPopulation };
