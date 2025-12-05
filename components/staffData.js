// components/staffData.js

// Remote JSON source for initial staff data
export const STAFF_JSON_URL =
  "https://gist.githubusercontent.com/DeseCodes99/ea0a13a2e2b2e7f0dd0e4d6af01b5b36/raw/bcefc9172efaa548b12224344179f72485a14092/staff.json";

// Template for the add/edit form (no hard-coded staff data here)
export const emptyForm = {
  name: "",
  phone: "",
  departmentId: "",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },
};
