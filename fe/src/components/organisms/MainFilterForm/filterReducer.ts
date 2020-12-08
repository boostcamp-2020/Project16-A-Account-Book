const setDates = 'SET_DATES';
const setMethod = 'SET_METHOD';
const setCategory = 'SET_CATEGORY';
const setCategoryDisable = 'SET_CATEGORY_DISABLE';
const setAllMethod = 'SET_ALL_METHOD';
const setAllCategories = 'SET_ALL_CATEGORIES';

export const actions = {
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
  setAllMethod(objectIds: string[]) {
    return {
      type: setAllMethod,
      payload: {
        methods: objectIds,
      },
    };
  },
  setAllCategories(type: string, objectIds: string[]) {
    return {
      type: setAllCategories,
      payload: {
        type,
        categories: objectIds,
      },
    };
  },
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case setDates: {
      const { startDate, endDate } = action.payload.dates;

      return {
        ...state,
        dates: {
          startDate,
          endDate,
        },
      };
    }
    case setMethod: {
      const { method } = action.payload;
      const exist = state.methods.some((item: string) => item === method);
      if (exist) {
        return {
          ...state,
          methods: state.methods.filter((x: string) => x !== method),
        };
      }
      return {
        ...state,
        methods: [...state.methods, method],
      };
    }
    case setCategory: {
      const { type, category } = action.payload;
      const target = state.categories[type];
      if (!target) return state;
      const exist = target.list.some((item: string) => item === category);
      if (exist) {
        return {
          ...state,
          categories: {
            ...state.categories,
            [type]: {
              ...target,
              list: target.list.filter((x: string) => x !== category),
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
            list: [...target.list, category],
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
    case setAllMethod: {
      const { methods } = action.payload;
      return {
        ...state,
        methods,
      };
    }
    case setAllCategories: {
      const { type, categories } = action.payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          [type]: {
            ...state.categories[type],
            list: categories,
          },
        },
      };
    }
    default:
      return state;
  }
};
