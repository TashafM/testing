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
