import _ from 'lodash';
export default {
    getActiveTab: state => (tabval) => _.find(state.tabs, tab => tab.value === tabval)
}