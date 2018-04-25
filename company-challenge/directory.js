calls = ["/project1/subproject1/method1", 
 "/project2/subproject1/method1", 
 "/project1/subproject1/method1", 
 "/project1/subproject2/method1", 
 "/project1/subproject1/method2", 
 "/project1/subproject2/method1", 
 "/project2/subproject1/method1", 
 "/project1/subproject2/method1"];

class project {
  constructor(name) {
    this.projectCount = 0;
    this.name = name;
    this.nodes = {};
  }

  insertSubproject(name, methodName) {
    this.projectCount += 1;
    if (name in this.nodes) {
      this.nodes[name].insertMethod(methodName);
    } else {
      this.nodes[name] = new subproject(name);
      this.nodes[name].insertMethod(methodName);
    }
  }

  getCount() {
    return this.projectCount;
  }
}

class subproject {
  constructor(name) {
    this.name = name;
    this.subprojectCount = 0;
    this.nodes = {};
  }

  insertMethod(name) {
    this.subprojectCount += 1;
    if (name in this.nodes) {
      this.nodes[name].addCount();
    } else {
      this.nodes[name] = new method(name);
    }
  }

  getCount() {
    return this.subprojectCount;
  }
}

class method {
  constructor(name) {
    this.methodCount = 1;
    this.name = name;
  }
  
  addCount() {
    this.methodCount += 1;
  }

  getCount() {
    return this.methodCount;
  }
}

function createTree(calls) {
   projects = {};
   for (let i = 0; i < calls.length; i += 1) {
     let [_, projectName, subprojectName, methodName] = calls[i].split('/');

     if (projectName in projects) {
       projects[projectName].insertSubproject(subprojectName, methodName);
     } else {
       projects[projectName] = new project(projectName);
       projects[projectName].insertSubproject(subprojectName, methodName);
     }

    }
    return projects;
}

function countAPI(calls) {
  projects = createTree(calls);
  const directory = [];

  function recurse(project, level) {
    let pre = '--';
    directory.push(`${pre.repeat(level)}${project.name} (${project.getCount()})`);
    console.log(project.nodes);
    for (const subNode in project.nodes) {
      recurse(project.nodes[subNode], level + 1);
    }
  }
  for (const project in projects) {
    recurse(projects[project], 1);
  }
  return directory;
}

countAPI(calls);