import axios from "axios";

export const API = {
    LOGIN_API : 'https://dev.elred.io/portalVerifyCompanyEmail',
    VERIFY_OTP : 'https://dev.elred.io/portalVerifyCompanyOtp',
    // TEAM MEMBERS API
    VIEW_CURRENT_TEAM_MEMBERS : 'portalViewCompanyCurrentTeamMembers?start=1&offset=10',
    VIEW_PAST_TEAM_MEMBERS: 'https://dev.elred.io/portalViewCompanyPastTeamMembers?start=1&offset=10',
    EDIT_TEAM_MEMBERS_RATINGS: 'https://dev.elred.io/portalEditCompanyTeamMembersRatings',
    DELETE_TEAM_MEMBERS: 'https://dev.elred.io/portalDeleteCompanyTeamMember',
    RESTORE_TEAM_MEMBERS: 'https://dev.elred.io/portalRestoreCompanyTeamMember',
    ADD_TEAM_MEMBER_DETAILS: 'https://dev.elred.io/portalAddCompanyTeamMember',
    EDIT_TEAM_MEMBER_DETAILS: 'https://dev.elred.io/portalEditCompanyTeamMemberDetails',
    DESIGNATION_LIST: 'https://dev.elred.io/getDesignations',
    DEPARTMENTS_LIST: 'https://dev.elred.io/getDepartments',
    PRODUCT_SERVICES_LIST: 'https://dev.elred.io/getProductOrServices'
    // -------------------------------------
};
