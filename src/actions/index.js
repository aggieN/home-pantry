export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};

export const addItem = (id, name, amount, unit) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      id,
      name,
      amount,
      unit,
    },
  };
};
