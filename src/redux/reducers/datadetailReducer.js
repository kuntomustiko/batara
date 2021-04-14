const init = {
  datared: {},
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case 'DETAIL_DATA':
      return {
        ...state,
        datared: payload,
      };
    default:
      return state;
  }
};
