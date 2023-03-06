import axios from "axios";

class Util {
  static handleMultiDelete(val) {
    console.log(val);
  }

  // This function is used for selecting value with checkbox
  handleCheckboxChange(
    selectedIds,
    user,
    setSelectedIds,
    setRatingUser
  ) {
    let newSelectedIds = [...selectedIds];
    if (newSelectedIds.includes(user.id)) {
      newSelectedIds = newSelectedIds.filter((i) => i !== user.id);
    } else {
      newSelectedIds.push(user.id);
    }
    setSelectedIds(newSelectedIds);
    // setRatingUser(user);
    console.log('hhhhhhhhhhh')
  }

  // This function is used to delete single user data from an api and send it to past members
  deleteSingle = (
    user,
    api,
    api2,
    getDataFunc,
    getDataFunc2,
    setSelectedIds
  ) => {
    const confirm = window.confirm(
      `Are you sure you want to delete ${user.firstName || user.name}?`
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
  deleteSelectedItems = (
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
  restoreSingle = (
    user,
    api,
    api2,
    getDataFunc,
    getDataFunc2,
    setSelectedIds
  ) => {
    const confirm = window.confirm(
      `Are you sure you want to restore ${user.firstName || user.name}?`
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
  restorePastMembers = (
    selectedIds,
    data,
    apiTo,
    apiFrom,
    getDataFunc,
    getDataFunc2,
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
      });
    }
    setSelectedIds([]);
  };

  activeRatings = (api, id, getDataFunc, setClicked) => {
    axios
      .put(`${api}/${id}`, { rating: true })
      .then((response) => {
        getDataFunc();
        setClicked(true);
        // console.log("successs rating to true");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deactiveRatings = (api, id, getDataFunc) => {
    axios
      .put(`${api}/${id}`, { rating: false })
      .then((response) => {
        getDataFunc();
        // console.log("successs rating to false");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  static handleChange = (event, setData) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setData((prevInputs) => ({ ...prevInputs, [name]: value }));
  };



  hello = () => {
    console.log('Print Hello')
  }


}

export default Util;
