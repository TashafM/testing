export const prepareAddressString = (add) => {
  let address =
    addOrRemoveComma(add.fullName) +
    addOrRemoveComma(add.floorNumber) +
    addOrRemoveComma(add.block) +
    addOrRemoveComma(add.street) +
    addOrRemoveComma(add.city) +
    addOrRemoveComma(add.state) +
    addOrRemoveComma(add.country) +
    addOrRemoveComma(add.country);

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
