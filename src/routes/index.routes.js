import {Router} from "express";
import { createTask, deleteTask, doneTask, editTask, renderEditTask, renderIndex } from "../controllers/task.controller";

const router = Router();

router.get("/", renderIndex);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderEditTask);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/done", doneTask)

export default router;