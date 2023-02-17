import axios from "axios";

class Util {
  static handleMultiDelete(val) {
    console.log(val);
  }

  // This function is used for selecting value with checkbox
  static handleCheckboxChange(selectedIds, id, setSelectedIds) {
    let newSelectedIds = [...selectedIds];
    if (newSelectedIds.includes(id)) {
      newSelectedIds = newSelectedIds.filter((i) => i !== id);
    } else {
      newSelectedIds.push(id);
    }
    setSelectedIds(newSelectedIds);
  }

  // This function is used to delete single user data from an api and send it to past members
  static deleteSingle = (
    user,
    api,
    api2,
    getDataFunc,
    getDataFunc2,
    setSelectedIds
  ) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${user.firstName}?`
    );
    if (confirm) {
      axios
        .delete(`${api}/${user.id}`)
        .then((response) => {
          axios
            .post(api2, user)
            .then((response) => {
              // Handle success
              getDataFunc();
              getDataFunc2();
              setSelectedIds([]);
            })
            .catch((error) => {
              // Handle error
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // This function is used to delete multiple checkbox values and sent it to past members api
  static deleteSelectedItems = (
    selectedIds,
    data,
    apiTo,
    apiFrom,
    func1,
    func2,
    setSelectedIds
  ) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${selectedIds.length} users?`
    );

    if (confirm) {
      const filteredUsers = data.filter((user) =>
        selectedIds.includes(user.id)
      );
      filteredUsers.forEach((user) => {
        // Delete the user from the first API
        axios
          .delete(`${apiTo}/${user.id}`)
          .then((response) => {
            axios
              .post(apiFrom, user)
              .then((response) => {
                // Handle success
                func1();
                func2();
                setSelectedIds([]);
              })
              .catch((error) => {
                // Handle error
              });
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
    setSelectedIds([]);
  };


  // This function is use to restore the value on a click of single user
  static restoreSingle = (
    user,
    api,
    api2,
    getDataFunc,
    getDataFunc2,
    setSelectedIds
  ) => {
    const confirm = window.confirm(
      `Are you sure you want to restore ${user.firstName}?`
    );
    if (confirm) {
      axios
        .delete(`${api}/${user.id}`)
        .then((response) => {
          axios
            .post(api2, user)
            .then((response) => {
              // Handle success
              getDataFunc();
              getDataFunc2();
              setSelectedIds([]);
            })
            .catch((error) => {
              // Handle error
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };


  // This function is used to restore multiple past members/deleted members to current table
  static restorePastMembers = (
    selectedIds,
    data,
    apiTo,
    apiFrom,
    func1,
    func2,
    setSelectedIds
  ) => {
    const confirm = window.confirm(
      `Are you sure you want to restore ${selectedIds.length} users?`
    );
    if (confirm) {
      const filteredUsers = data.filter((user) =>
        selectedIds.includes(user.id)
      );
      filteredUsers.forEach((user) => {
        // Delete the user from the first API
        axios
          .delete(`${apiTo}/${user.id}`)
          .then((response) => {
            axios
              .post(apiFrom, user)
              .then((response) => {
                // Handle success
                func1();
                func2();
                setSelectedIds([]);
              })
              .catch((error) => {
                // Handle error
              });
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
    setSelectedIds([]);
  };
}

export default Util;
