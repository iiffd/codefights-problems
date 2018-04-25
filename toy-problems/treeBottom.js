let tree = '(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))';

function checkAdj(tree, index) {
  for (let i = index; i < tree.length; i += 1) {
    if (tree[i] === '(' || tree[i] === ')' || tree[i] === ' ') {
      return i;
    }
  }
}

function treeBottom(tree) {
  let depth = 0;
  let maxDepth = 0;
  const result = [];

  for (let i = 0; i < tree.length; i += 1) {
    if (tree[i] === '(') {
      depth += 1;
    } else if (tree[i] === ')') {
      depth -= 1;
    } else if (tree[i] !== ' ') {
      if (depth > maxDepth) maxDepth = depth;
    }
  }

  for (let i = 0; i < tree.length; i += 1) {
    if (tree[i] === '(') {
      depth += 1;
    } else if (tree[i] === ')') {
      depth -= 1;
    } else if (tree[i] !== ' ') {
      jump = checkAdj(tree, i + 1);

      if (depth === maxDepth) {
        if (jump > i + 1) {
          result.push(Number(tree.slice(i, jump)));
          i += (jump - (i + 1));
        } else {
          result.push(Number(tree[i]));
        }
      }
    }
  }
  return result;
}


treeBottom(tree);
