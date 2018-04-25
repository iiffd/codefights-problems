accounts = [10, 100, 20, 50, 30]
requests = ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"]

function bankRequests(accounts, requests) {
  let index = -1;
  for(const request of requests) {
    let parts = request.split(' ');
    if (parts[1] > accounts.length) return [index];

    if (parts[0] === 'withdraw') {
      accounts[Number(parts[1]) - 1] -= Number(parts[2]);
      if (accounts[Number(parts[1]) - 1] < 0) return [index];
    }

    if (parts[0] === 'transfer') {
      accounts[Number(parts[1]) - 1] -= Number(parts[3]);
      if (accounts[Number(parts[1]) - 1] < 0 || Number(parts[2]) > accounts.length) return [index];
      accounts[Number(parts[2]) - 1] += Number(parts[3]);
    }

    if (parts[0] === 'deposit') {
      accounts[Number(parts[1]) - 1] += Number(parts[2]);
    }
    index -= 1;
  }

  return accounts;
}


bankRequests(accounts, requests);
