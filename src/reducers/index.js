const initialState = [
  {
    category: 'vegetables',
    items: [],
  },
  {
    category: 'fruits',
    items: [],
  },
  {
    category: 'drinks',
    items: [],
  },
  {
    category: 'cereal products',
    items: [],
  },
];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return state.map((element) => ({
        ...element,
        items: element.items.filter((item) => item.id !== action.payload.id),
      }));
    case 'ADD_ITEM':
      return state.map((element) => ({
        ...element,
        items:
          element.category === action.payload.category
            ? [...element.items, action.payload.item]
            : element.items,
      }));
    case 'EDIT_ITEM':
      return state.map((element) => ({
        ...element,
        items: element.items.map((item) =>
          item.id === action.payload.item.id ? action.payload.item : item,
        ),
      }));

    default:
      return state;
  }
};

export default rootReducer;
