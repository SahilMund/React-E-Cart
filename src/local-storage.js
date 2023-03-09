export const loadFromLocalState = (key) => {
  try {
    const localState = localStorage.getItem(key);
    if (localState === null) {
      return undefined;
    }
    return JSON.parse(localState);
  } catch (err) {
    return undefined;
  }
};

//to save the state to local storage for making it persistent
export const saveTOLocalState = (key, state) => {
  try {
    const localState = JSON.stringify(state);
    setTimeout(() => {
      localStorage.setItem(key, localState);
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};
