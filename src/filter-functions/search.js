export const searchHandler = (data, state) => {
    if (state.search) {
      return data.filter(
        (item) =>
          item.title.toLowerCase().includes(state.search) ||
          item.category.toLowerCase().includes(state.search)
      );
    }
    return data;
  };
  