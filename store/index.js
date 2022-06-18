export const state = () => ({
  users: [],
});

export const mutations = {
  ADD_USERS: (state, users) => {
    state.users = users;
  },
};

export const getters = {};

export const actions = {
  async getUsers() {
    const users = await axios.get("https://randomuser.me/api/?results=20");
    commit("ADD_USERS", users);
  },
};
