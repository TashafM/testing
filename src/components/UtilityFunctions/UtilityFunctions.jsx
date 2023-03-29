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
  teamMemberSingleDelete = (
    user,
    getDataFunc,
    setLoading,
    setMsg,
    setPastData,
    datum,
    setData,
    pastData,
  ) => {
    setLoading(true);
    setMsg(`Deleting ${user.displayFirstName} from current team members`);
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
          // getDataFunc(1).then((res) => {
          //   setLoading(false);
          // });
          // onUpdate(res);
          const updatedData = datum.filter(
            (u) => u.teamMemberId !== user.teamMemberId
          ); // filter out the deleted user
          setData(updatedData); // update the state with the updated data
          setPastData((prevData) => [user, ...prevData]); // add updated data to state
          // setPastData([user, ...pastData]); // add updated data to state

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
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
    func1,
    setSelectedIds,
    setLoading,
    setMsg
  ) => {
    setLoading(true);
    setMsg(`Deleting ${selectedIds.length} team members`);

    const confirm = window.confirm(
      `Are you sure you want to delete ${selectedIds.length} users?`
    );
    if (confirm) {
      const companyUserCode = localStorage.getItem("usercode");
      const accessToken = localStorage.getItem("accessToken");
      axios
        .post(
          API.DELETE_TEAM_MEMBERS,
          { companyUserCode: companyUserCode, teamMemberIds: selectedIds },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          setLoading(false);
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

  restoreSingle = (user, api, getDataFunc, setLoading, setMsg) => {
    setLoading(true);
    setMsg(`Restoring ${user.displayFirstName} `);
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
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  // This function is used to restore multiple past members/deleted members to current table
  restorePastMembers = (
    selectedIds,
    api,
    func,
    setSelectedIds,
    setLoading,
    setMsg
  ) => {
    setLoading(true);
    setMsg(`Restoring ${selectedIds.length} past team members`);
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
          setLoading(false);
          setSelectedIds([]);
        })
        .catch((err) => {
          setLoading(false);
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

  multipleRatingsDisable = (
    selectedIds,
    setSelectedIds,
    setMsg,
    setLoading,
    currMemberData,
    setData
  ) => {
    setLoading(true);
    setMsg(`Disabling ratings for ${selectedIds.length} team members`);
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
      .then((res) => {
        const updatedData = currMemberData.map((user) => {
          if (selectedIds.includes(user.teamMemberId)) {
            return { ...user, showRatings: false };
          } else {
            return user;
          }
        });
        setData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    setSelectedIds("");
  };

  //--------------------------------------------------
  // tashaf = (selectedIds, currMemberData, setData) => {
  //   console.log(selectedIds, currMemberData, setData,'rrrrrrrrrrrrr')

  //   const updatedData = currMemberData.map(user=>{
  //     if(selectedIds.includes(user.teamMemberId)){
  //       return {...user, showRatings: true};
  //     }else{
  //       return user;
  //     }
  //   })
  //   setData(updatedData)
  // }

  //----------------------------------------------------
  multipleRatingsEnable = (
    selectedIds,
    setSelectedIds,
    setMsg,
    setLoading,
    currMemberData,
    setData
  ) => {
    setLoading(true);
    setMsg(`Enabling ratings for ${selectedIds.length} team members`);
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
        // getCurrMembers(1);
        const updatedData = currMemberData.map((user) => {
          if (selectedIds.includes(user.teamMemberId)) {
            return { ...user, showRatings: true };
          } else {
            return user;
          }
        });
        setData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    setSelectedIds("");
  };

  activeRatings = (user, setLoading, setMsg, datum, setData) => {
    setLoading(true);
    setMsg(`Activating rating for ${user.displayFirstName}`);

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
      .then((res) => {
        const updatedData = datum.map((itm) => {
          if (itm.teamMemberId == user.teamMemberId) {
            return { ...itm, showRatings: true };
          }
          return itm;
        });
        setData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  deactiveRatings = (user, setLoading, setMsg, datum, setData) => {
    setLoading(true);
    setMsg(`Activating rating for ${user.displayFirstName}`);

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
      .then((res) => {
        const updatedData = datum.map((itm) => {
          if (itm.teamMemberId == user.teamMemberId) {
            return { ...itm, showRatings: false };
          }
          return itm;
        });
        setData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  // deactiveRatings = (user, getDataFunc, setLoading, setMsg) => {
  //   setLoading(true);
  //   setMsg(`Deactivating rating for ${user.displayFirstName}`);

  //   const { teamMemberId, companyUserCode } = user;
  //   const accessToken = localStorage.getItem("accessToken");
  //   axios
  //     .post(
  //       API.EDIT_TEAM_MEMBERS_RATINGS,
  //       {
  //         companyUserCode: companyUserCode,
  //         teamMemberIds: [teamMemberId],
  //         enableRatings: false,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       getDataFunc(1);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //     });
  // };

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
