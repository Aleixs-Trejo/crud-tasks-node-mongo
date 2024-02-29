import Task from "./../models/Task";

export const renderIndex = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", {tasks})
}

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    console.log(taskSaved);
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
}

export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", {task});
  } catch (err) {
    console.error(err);
  }
}

export const editTask = async (req, res) => {
  try {
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect("/")
  } catch (err) {
    console.error(err);
  }
}

export const deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
}

export const doneTask = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save()
    console.log(task);
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
}