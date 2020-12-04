/* eslint-disable no-fallthrough */
const fetchLocalStorage = 'FETCH_LOCAL_STORAGE';
const setDates = 'SET_DATES';
const setMethod = 'SET_METHOD';
const setCategory = 'SET_CATEGORY';
const setCategoryDisable = 'SET_CATEGORY_DISABLE';

export const actions = {
  fetchLocalStorage() {
    return { type: fetchLocalStorage };
  },
  setDates(startDate: Date | null, endDate: Date | null) {
    return {
      type: setDates,
      payload: {
        dates: {
          startDate,
          endDate,
        },
      },
    };
  },
  setMethod(objectId: string) {
    return {
      type: setMethod,
      payload: {
        method: objectId,
      },
    };
  },
  setCategory(type: string, objectId: string) {
    return {
      type: setCategory,
      payload: {
        category: objectId,
        type,
      },
    };
  },
  setCategoryDisable(type: string) {
    return {
      type: setCategoryDisable,
      payload: {
        type,
      },
    };
  },
};

export const initialState = {
  dates: {
    startDate: new Date(),
    endDate: new Date(),
  },
  methods: [
    {
      checked: true,
      objectId: 1,
      title: '제목1',
    },
    {
      checked: false,
      objectId: 2,
      title: '제목2',
    },
  ],
  categories: {
    income: {
      disabled: false,
      list: [
        {
          checked: true,
          objectId: 1,
          title: '제목1',
        },
        {
          checked: true,
          objectId: 2,
          title: '제목2',
        },
        {
          checked: false,
          objectId: 3,
          title: '제목3',
        },
      ],
    },
    expense: {
      disabled: false,
      list: [],
    },
  },
};
// export const initialState = {
//   dates: {
//     startDate: new Date(),
//     endDate: new Date(),
//   },
//   methods: [],
//   categories: {
//     income: {
//       disabled: false,
//       list: [],
//     },
//     expense: {
//       disabled: false,
//       list: [],
//     },
//   },
// };

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case fetchLocalStorage: {
      const filter = localStorage.getItem('filter');
      if (filter) {
        return { ...state, ...JSON.parse(filter) };
      }
      return state;
    }
    case setDates: {
      const { dates } = action.payload;
      return { ...state, dates };
    }
    case setMethod: {
      const { method } = action.payload;
      return {
        ...state,
        methods: [
          ...state.methods.map((m: any) => {
            if (m.objectId !== method) return m;
            return { ...m, checked: !m.checked };
          }),
        ],
      };
    }
    case setCategory: {
      const { type, category } = action.payload;
      const target = state.categories[type];
      if (!target) return state;
      return {
        ...state,
        categories: {
          ...state.categories,
          [type]: {
            ...target,
            list: [
              ...target.list.map((cat: any) => {
                if (cat.objectId !== category) return cat;
                return { ...cat, checked: !cat.checked };
              }),
            ],
          },
        },
      };
    }
    case setCategoryDisable: {
      const { type } = action.payload;
      const target = state.categories[type];
      if (!target) return state;
      return {
        ...state,
        categories: {
          ...state.categories,
          [type]: {
            ...target,
            disabled: !target.disabled,
          },
        },
      };
    }
    default:
      return state;
  }
};
export default initialState;
