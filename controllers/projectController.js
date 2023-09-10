const projects = [];

export const getAllProjects = (req, res) => {
  try {
    return res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const getProject = (req, res) => {
  try {
    const { id } = req.params;
    const project = projects.find((el) => el.id === parseInt(id));
    console.log(project);
    if (!project) {
      return res.status(404).send();
    }
    return res.status(200).send(project);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const createProject = (req, res) => {
  try {
    const project = req.body;
    const found = projects.find((el) => el.id === parseInt(project.id));
    if (found) {
      return res.status(400).send();
    }
    projects.push(project);
    return res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const deleteProject = (req, res) => {
  try {
    const { id } = req.params;
    const projectIndex = projects.findIndex((el) => el.id === parseInt(id));
    if (projectIndex === -1) {
      return res.status(404).send();
    }
    res.status(204).send();
    projects.splice(projectIndex, 1);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const fullyUpdateProject = (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = projects.find((el) => el.id === parseInt(id));
    if (!found) {
      return res.status(404).send();
    }
    found.name = data.name;
    found.state = data.state;
    found.location = data.location;
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

export const partiallyUpdateProject = (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const found = projects.find((el) => el.id === parseInt(id));
    if (!found) {
      return res.status(404).send();
    }
    found.state = data.state;
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};
