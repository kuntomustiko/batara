const init = {
  datared: {},
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case 'DETAIL_SUKA':
      return {
        ...state,
        datared: payload,
      };
    default:
      return state;
  }
};
