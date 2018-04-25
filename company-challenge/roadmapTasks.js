function roadmap(tasks, queries) {
  const output = [];
  const sortedOutput = [];

  for (const [name, dateString] of queries) {
    const date = new Date(dateString);
    const task = [];

    for (const [letter, date1String, date2String, ...names] of tasks) {
      const nameSet = new Set(names);
      const date1 = new Date(date1String);
      const date2 = new Date(date2String);
      if (date >= date1 && date <= date2 && nameSet.has(name)) task.push([letter, date2]);
    }
    output.push(task);
  }

  for (const arr of output) {
    arr.sort((a, b) => {
      if (a[1] > b[1]) {
        return 1;
      } else if (b[1] > a[1]) {
        return -1;
      } else {
        if (a[0] > b[0]) return 1;
        if (b[0] > a[0]) return -1;
        return -1;
      }
    })
  }

  for (const arr of output) {
    const sortedArr = arr.map((item) => item[0]);
    sortedOutput.push(sortedArr);
  }

  return sortedOutput;
}