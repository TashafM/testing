import { API } from "../../helper/API";
import axios from "../../helper/axios";
// import axios from "axios";

class Util {
  
  static handleMultiDelete(val) {
    console.log(val);
  }

  // This function is used for selecting value with checkbox
  handleCheckboxChange(selectedIds, user, setSelectedIds, setRatingUser) {
    let newSelectedIds = [...selectedIds];
    if (newSelectedIds.includes(user.teamMemberId)) {
      newSelectedIds = newSelectedIds.filter((i) => i !== user.teamMemberId);
    } else {
      newSelectedIds.push(user.teamMemberId);
    }
    setSelectedIds(newSelectedIds);
    // setRatingUser(user);
    console.log(selectedIds, "tashaf ids");
  }

  // This function is used to delete single user data from an api and send it to past members
  // deleteSingle = (
  //   user,
  //   api,
  //   api2,
  //   getDataFunc,
  //   getDataFunc2,
  //   setSelectedIds
  // ) => {
  //   console.log(user.teamMemberId, "from del");
  //   const confirm = window.confirm(
  //     `Are you sure you want to delete ${
  //       user.firstName || user.name || user.displayFirstName
  //     }?`
  //   );
  //   if (confirm) {
  //     axios
  //       .delete(`${api}/${user.id}`)
  //       .then((response) => {
  //         axios
  //           .post(api2, user)
  //           .then((response) => {
  //             // Handle success
  //             getDataFunc();
  //             getDataFunc2();
  //             setSelectedIds([]);
  //           })
  //           .catch((error) => {
  //             // Handle error
  //           });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };

  // ------------------ DELETE SINGLE FROM TEAM MEMBER REAL API ------------------------------
  teamMemberSingleDelete = (user, getDataFunc) => {
    const { teamMemberId, displayFirstName } = user;
    const companyUserCode = localStorage.getItem("usercode");
    const accessToken = localStorage.getItem("accessToken");

    const confirm = window.confirm(
      `Are you sure you want to delete ${displayFirstName}?`
    );

    if (confirm) {
      axios
        .post(
          API.DELETE_TEAM_MEMBERS,
          { companyUserCode: companyUserCode, teamMemberIds: [teamMemberId] },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          getDataFunc(1);
          // onUpdate(res);
        });
    }
    return false;
  };
  //-------------------------------------------------------------------------------------------

  // This function is used to delete multiple checkbox values and sent it to past members api
  // deleteSelectedItems = (
  //   selectedIds,
  //   data,
  //   apiTo,
  //   apiFrom,
  //   func1,
  //   func2,
  //   setSelectedIds
  // ) => {
  //   const confirm = window.confirm(
  //     `Are you sure you want to delete ${selectedIds.length} users?`
  //   );

  //   if (confirm) {
  //     const filteredUsers = data.filter((user) =>
  //       selectedIds.includes(user.id)
  //     );
  //     filteredUsers.forEach((user) => {
  //       // Delete the user from the first API
  //       axios
  //         .delete(`${apiTo}/${user.id}`)
  //         .then((response) => {
  //           axios
  //             .post(apiFrom, user)
  //             .then((response) => {
  //               // Handle success
  //               func1();
  //               func2();
  //               setSelectedIds([]);
  //             })
  //             .catch((error) => {
  //               // Handle error
  //             });
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     });
  //   }
  //   setSelectedIds([]);
  // };

  //-------------------------- DELETE MULTIPLE ITEMS -------------------
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
      const companyUserCode = localStorage.getItem("usercode");
      const accessToken = localStorage.getItem("accessToken");
      axios
        .post(
          API.DELETE_TEAM_MEMBERS,
          { companyUserCode: companyUserCode, teamMemberIds: selectedIds},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          func1(1);
          setSelectedIds([]);
        });
    }
    return false;

    // console.log(selectedIds,'selecter ids')

    //   if (confirm) {
    //     const filteredUsers = data.filter((user) =>
    //       selectedIds.includes(user.id)
    //     );
    //     filteredUsers.forEach((user) => {
    //       // Delete the user from the first API
    //       axios
    //         .delete(`${apiTo}/${user.id}`)
    //         .then((response) => {
    //           axios
    //             .post(apiFrom, user)
    //             .then((response) => {
    //               // Handle success
    //               func1();
    //               func2();
    //               setSelectedIds([]);
    //             })
    //             .catch((error) => {
    //               // Handle error
    //             });
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //         });
    //     });
    //   }
    //   setSelectedIds([]);
    // };
  };
  //-----------------------------------------------------------------

  // This function is use to restore the value on a click of single user
  // restoreSingle = (
  //   user,
  //   api,
  //   api2,
  //   getDataFunc,
  //   getDataFunc2,
  //   setSelectedIds
  // ) => {
  //   const confirm = window.confirm(
  //     `Are you sure you want to restore ${user.firstName || user.name}?`
  //   );
  //   if (confirm) {
  //     axios
  //       .delete(`${api}/${user.id}`)
  //       .then((response) => {
  //         axios
  //           .post(api2, user)
  //           .then((response) => {
  //             // Handle success
  //             getDataFunc();
  //             getDataFunc2();
  //             setSelectedIds([]);
  //           })
  //           .catch((error) => {
  //             // Handle error
  //           });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // };

  restoreSingle = (user, api, getDataFunc) => {
    const { teamMemberId } = user;
    const accessToken = localStorage.getItem("accessToken");
    const companyUserCode = localStorage.getItem("usercode");
    axios
      .post(
        api,
        { companyUserCode: companyUserCode, teamMemberIds: [teamMemberId] },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        getDataFunc(1);
      });
  };

  // This function is used to restore multiple past members/deleted members to current table
  restorePastMembers = (
    selectedIds,
    api,
    // data,
    // apiTo,
    // apiFrom,
    // getDataFunc,
    func,
    setSelectedIds
  ) => {
    const confirm = window.confirm(
      `Are you sure you want to restore ${selectedIds.length} users?`
    );
    if (confirm) {
      const accessToken = localStorage.getItem("accessToken");
      const companyUserCode = localStorage.getItem("usercode");
      axios
        .post(
          api,
          { companyUserCode: companyUserCode, teamMemberIds: selectedIds },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          func(1);
          setSelectedIds([]);
        });
    }
  };

  // activeRatings = (api, id, getDataFunc, setClicked) => {
  //   axios
  //     .put(`${api}/${id}`, { rating: true })
  //     .then((response) => {
  //       getDataFunc();
  //       setClicked(true);
  //       // console.log("successs rating to true");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // deactiveRatings = (api, id, getDataFunc) => {
  //   axios
  //     .put(`${api}/${id}`, { rating: false })
  //     .then((response) => {
  //       getDataFunc();
  //       // console.log("successs rating to false");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // ----------------- Team member real Ratings API---------------------

  multipleRatingsDisable = (selectedIds, setSelectedIds, getCurrMembers) => {
    const userCode = localStorage.getItem("usercode");
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        API.EDIT_TEAM_MEMBERS_RATINGS,
        {
          companyUserCode: userCode,
          teamMemberIds: selectedIds,
          enableRatings: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => getCurrMembers(1));
    setSelectedIds("");
  };

  multipleRatingsEnable = (selectedIds, setSelectedIds, getCurrMembers) => {
    const userCode = localStorage.getItem("usercode");
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        API.EDIT_TEAM_MEMBERS_RATINGS,
        {
          companyUserCode: userCode,
          teamMemberIds: selectedIds,
          enableRatings: true,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        getCurrMembers(1);
        setSelectedIds("");
      });
  };

  activeRatings = (user, getDataFunc) => {
    console.log(user, "active ratings");
    const { teamMemberId, companyUserCode } = user;
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        API.EDIT_TEAM_MEMBERS_RATINGS,
        {
          companyUserCode: companyUserCode,
          teamMemberIds: [teamMemberId],
          enableRatings: true,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => getDataFunc());
  };

  deactiveRatings = (user, getDataFunc) => {
    console.log(user, "active ratings");
    const { teamMemberId, companyUserCode } = user;
    const accessToken = localStorage.getItem("accessToken");
    axios
      .post(
        API.EDIT_TEAM_MEMBERS_RATINGS,
        {
          companyUserCode: companyUserCode,
          teamMemberIds: [teamMemberId],
          enableRatings: false,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => getDataFunc());
  };

  overlay  = () => {
    
  }
  // ---------------------------------------------------------------

  static handleSearch = (event, setSearchTerm, items, setFilteredItems) => {
    console.log(event.target, "event");
    setSearchTerm(event.target.value);

    const filteredItems = items.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  static handleChange = (event, setData) => {
    const { name, value } = event.target;
    setData((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  hello = () => {
    console.log("Print Hello");
  };
}

export default Util;
