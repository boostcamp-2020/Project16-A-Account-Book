const setDates = 'SET_DATES';
const setMethod = 'SET_METHOD';
const setCategory = 'SET_CATEGORY';
const setCategoryDisable = 'SET_CATEGORY_DISABLE';

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
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case setMethod: {
      const { method } = action.payload;
      const exist = state.methods.find((item: string) => item === method);
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
      const exist = target.list.find((item: string) => item === category);
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
    default:
      return state;
  }
};
