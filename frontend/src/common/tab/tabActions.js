import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api'

export function selectTab(tabId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}