class ProjectService {
  constructor() {
    this.projects = [
      {
        name: 'express',
        description: 'desc',
        priority: 'High',
        tasks: [
          {
            name: 'task 1',
            status: 'Done',
          },
          {
            name: 'task 2',
            status: 'Pending',
          },
        ],
      },
      {
        name: 'react',
        description: 'complex project',
        priority: 'medium',
        status: 'in progress',
        comment: 'another comment',
        tasks: [
          {
            name: 'task 1',
            status: 'pending',
          },
          {
            name: 'task 2',
            status: 'pending',
          },
        ],
      },
      {
        name: 'vue',
        description: 'intermediate project',
        priority: 'low',
        status: 'not started',
        comment: 'third comment',
        tasks: [
          {
            name: 'task 1',
            status: 'not started',
          },
          {
            name: 'task 2',
            status: 'not started',
          },
        ],
      },
    ];
  }

  updateProject(id, updatedData) {
    const projectToUpdate = this.projects[id];

    if (!projectToUpdate) {
      return null;
    }

    const updatedProject = { ...projectToUpdate };

    if (updatedData.status) {
      updatedProject.status = updatedData.status;
    }

    if (updatedData.technology) {
      updatedProject.technology = updatedData.technology;
    }
    if (updatedData.comment) {
      updatedProject.comment = updatedData.comment;
    }

    if (updatedData.tasks) {
      Object.keys(updatedData.tasks).forEach((index) => {
        const taskIndex = parseInt(index);
        const task = updatedData.tasks[index];

        if (taskIndex < updatedProject.tasks.length) {
          updatedProject.tasks[taskIndex] = { ...updatedProject.tasks[taskIndex], ...task };
        } else {
          updatedProject.tasks.push(task);
        }
      });
    }

    this.projects[id] = updatedProject;
    return updatedProject;
  }

  editProject(id, newData) {
    return this.updateProject(id, newData);
  }

  getProjects() {
    return this.projects;
  }

  createProject(project) {
    this.projects.push(project);
    return this.projects;
  }
}

export default new ProjectService();
