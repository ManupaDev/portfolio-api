"use strict";

import express from "express";
import {
  createProject,
  deleteProject,
  fullyUpdateProject,
  getAllProjects,
  getProject,
  partiallyUpdateProject,
} from "../controllers/projectController.js";

//* /api/devices
const projectRouter = express.Router();

//* /api/devices
projectRouter.route("/").get(getAllProjects).post(createProject);

//* /api/devices/:id
projectRouter
  .route("/:id")
  .get(getProject)
  .put(fullyUpdateProject)
  .patch(partiallyUpdateProject)
  .delete(deleteProject);

export default projectRouter;
