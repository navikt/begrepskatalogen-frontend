export const initialState = {
  loading: false,
  items: [],
  search: '',
  hideNotApproved: false,
  filters: [
    {
      category: 'status',
      value: 'Godkjent begrep',
    }],
  isHiddenTable: true,
  item: undefined,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA_BEGIN':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_DATA_COMPLETE':
      return Object.assign({}, state, {loading: false, items: action.items});
    case 'FETCH_ITEM_BEGIN':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_ITEM_COMPLETE':
      return Object.assign({}, state, {loading: false, item: action.item});
    case 'UPDATE_SEARCH':
      return Object.assign({}, state, {search: action.payload.search, seeAllTerms: false, hideNotApproved: false});
    case 'TOGGLE_SEE_ALL_TERMS':
      return Object.assign({}, state, {seeAllTerms: true, hideNotApproved: false, isHiddenTable: false});
    case 'NUM_APPROVED_TERMS':
      return Object.assign({}, state, {approvedTerms: action.payload.approvedTerms});
    case 'NOT_APPROVED_TERMS':
      return Object.assign({}, state, {hideNotApproved: !state.hideNotApproved});
    case 'NUM_NOT_APPROVED_TERMS':
      return Object.assign({}, state, {numNotApprovedTerms: action.payload.numNotApprovedTerms});
    case 'ADD_FILTER':
      return addFilter(state, action.payload.category, action.payload.value);
    case 'REMOVE_FILTER':
      return removeFilter(state, action.payload.category, action.payload.value);
    case 'ORDER_BY_ALPH':
      return Object.assign({}, state, {sort: action.payload.sort});
    case 'ORDER_BY_BEGREPSEIER':
      return Object.assign({}, state, {sort: action.payload.sort});
    default:
      return state;
  }
}

export default appReducer;

function addFilter(state, category, value) {
  return {
    ...state,
    filters: [
      ...state.filters, {
        'category': category,
        'value': value,
      }],
  };
}

function removeFilter(state, category, value) {
  const newFilters = state.filters.filter(filter => {
    if (filter.category === category && filter.value === value) {
      return false;
    } else {
      return true;
    }
  });
  return Object.assign({}, state, {filters: newFilters});
}
