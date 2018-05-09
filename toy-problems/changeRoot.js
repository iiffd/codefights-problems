function recurse(parent, oldParent, newRoot) {
  const temp = parent[oldParent];
  parent[oldParent] = newRoot;
  if (oldParent === temp) {
    return parent;
  }
  return recurse(parent, temp, oldParent);
}

function changeRoot(parent, newRoot) {
  const temp = parent[newRoot];
  parent[newRoot] = newRoot;
  return recurse(parent, temp, parent[newRoot]);
}


changeRoot([0, 0, 0, 1], 1);