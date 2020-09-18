const initState = {
  posts: [
    { id: "1", title: "Some Text", body: " some body" },
    { id: "2", title: "My Text", body: " My body" },
    { id: "3", title: "Your Text", body: " Your body" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
