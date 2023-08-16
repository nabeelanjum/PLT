const initialState = {
  items: []
}

const cart = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    default:
      return state;
  }
}

export default cart;
