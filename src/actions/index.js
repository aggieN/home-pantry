export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};

export const addItem = (category, itemContent) => {
  const getId = () => `_${Math.random().toString(36).substr(2, 9)}`;
  return {
    type: 'ADD_ITEM',
    payload: {
      category,
      item: { id: getId(), ...itemContent },
    },
  };
};

export const editItem = (id, itemContent) => {
  return {
    type: 'EDIT_ITEM',
    payload: {
      item: { id, ...itemContent },
    },
  };
};
