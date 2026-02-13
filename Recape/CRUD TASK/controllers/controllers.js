import Task from '../models/models.js';
import chalk from 'chalk';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
    console.log(chalk.bgBlue.red("Your all task are on postman!!!!"));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const {title,description,completed} = req.body
    if(!title&&!description&&!completed){
      res.json({error:'required data field not provided'})
    }
    const task = await Task.create(req.body);
    res.status(201).json(task);
    console.log(chalk.bgYellow.black("Your task is created and stored on mongodb using postman"))
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(task);
    console.log(chalk.bgWhite.black("Your task is updated and stored on mongodb using postman"))
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Deleted this task successfully'});
    console.log(chalk.bgRed.white("Deleted this task successfully"));


  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};