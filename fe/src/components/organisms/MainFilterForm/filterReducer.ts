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
  methods: [],
  categories: {
    income: {
      disable: false,
      list: [],
    },
    expense: {
      disable: false,
      list: [],
    },
  },
};

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
      if (target.has(category)) {
        return {
          ...state,
          categories: {
            ...state.categories,
            [type]: {
              ...target,
              list: new Set([
                [...target.list].filter((x: string) => x !== category),
              ]),
            },
          },
        };
      }
      return {
        ...state,
        categories: {
          ...state.categories,
          [type]: {
            ...target,
            list: new Set([...target.list, category]),
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
