import moment from "moment/moment";

export const prepareAddressString = (add) => {
  let address = "";

  if (add && Object.keys(add).length) {
    address =
      addOrRemoveComma(add.fullName) +
      addOrRemoveComma(add.floorNumber) +
      addOrRemoveComma(add.block) +
      addOrRemoveComma(add.street) +
      addOrRemoveComma(add.city) +
      addOrRemoveComma(add.state) +
      addOrRemoveComma(add.country) +
      addOrRemoveComma(add.country);
  }

  return address;
};

const addOrRemoveComma = (value) => {
  if (value) {
    return `${value}, `;
  }
  return "";
};

export function isValidUrl(str) {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
}

export const getDesireDateFormate = (date) => {
  console.log({ date });
  if (date) {
    return moment(date).format("DD/MM/YYYY");
  }
};

export const getLocalStorageData = (key) => {
  const userData = localStorage.getItem(key);
  if (userData) {
    return JSON.parse(userData);
  }

  return null;
};
