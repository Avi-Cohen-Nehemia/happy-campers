import { findCampsite, findCampsites, updateRegions } from './state';

// import below when we have API routes
// import axios from '../../axios';

import campsites from '../../components/campsites.json';
import campsite from '../../components/campsite.json';
import regions from '../../components/regions.json';

export const getCampsites = (id) => { // pass id into GET url
    return (dispatch) => {
        /** input axios GET request here when we have API routes
         *  GET /regions/<id>
         */
        dispatch(findCampsites(campsites));
    };
};

export const getCampsiteDetails = () => {
    return (dispatch) => {
        /** input axios GET request here when we have API routes
         *  GET /campsites/<id>
         */
        dispatch(findCampsite(campsite));
    };
};

export const getRegions = () => {
    return (dispatch) => {
        /** input axios GET request here when we have API routes
         *  GET /regions
         */
        dispatch(updateRegions(regions));
    };
};