const initialState = [
  {
    category: 'vegetables',
    items: [
      {
        id: 1,
        name: 'carrots',
        amount: 3,
        unit: 'pc',
      },
      {
        id: 2,
        name: 'potatos',
        amount: 1,
        unit: 'kg',
      },
      {
        id: 3,
        name: 'broccoli',
        amount: 2,
        unit: 'pc',
      },
    ],
  },
  {
    category: 'fruits',
    items: [
      {
        id: 4,
        name: 'oranges',
        amount: 4,
        unit: 'pc',
      },
      {
        id: 5,
        name: 'blueberries',
        amount: 250,
        unit: 'g',
      },
    ],
  },
  {
    category: 'drinks',
    items: [
      {
        id: 6,
        name: 'Coca Cola',
        amount: 2,
        unit: 'l',
      },
      {
        id: 7,
        name: 'Grapefruit juice',
        amount: 1,
        unit: 'l',
      },
      {
        id: 8,
        name: 'Water',
        amount: 1,
        unit: 'l',
      },
    ],
  },
  {
    category: 'cereal products',
    items: [
      {
        id: 9,
        name: 'Cereal',
        amount: 2,
        unit: 'pack',
      },
      {
        id: 10,
        name: 'Muesli',
        amount: 1,
        unit: 'kg',
      },
    ],
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
        items: [...element.items, action.payload.item],
      }));

    default:
      return state;
  }
};

export default rootReducer;
