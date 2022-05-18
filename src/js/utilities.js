const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NWdxAExdTSbiBb0LbxSy/scores';

const updateDom = (users) => {
  const thead = document.querySelector('#tbody');
  thead.innerHTML = '';
  users.forEach((user) => {
    thead.innerHTML += `<tr class="w-full">
    <td>${user.user}</td>
    <td>${user.socre}</td>
    </tr>`;
  });
};

const fetchUsers = async () => {
  const data = await fetch(url);
  return data.json();
};

const insertUsers = async () => {
  const users = await fetchUsers();
  updateDom(users.result);
};

const addUser = async (data) => {
  await fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: data[0], score: data[1] }),
  });
};

export { insertUsers, fetchUsers, addUser };