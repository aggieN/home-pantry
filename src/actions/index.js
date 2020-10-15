// eslint-disable-next-line import/prefer-default-export
export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};
