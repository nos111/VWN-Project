import { combineReducers } from 'redux';
import OrgReducer from './reducer_orgs';
import ActiveOrg from './reducer-active-org';
import ActiveTags from './reducer_active_tags';
import Tags from './reducer-tags';

const rootReducer = combineReducers({
  organizations: OrgReducer,
  activeOrg: ActiveOrg,
  activeTags: ActiveTags,
  tags: Tags
});

export default rootReducer;
