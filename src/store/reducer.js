const initialState = {
  data: [
    {
      name: "list1",
      show: false,
      showContext: false,
      showaddinput: false,
      type: "parent",
      shopeditinput: false,
      data: [
        {
          name: "list2_1",
          show: false,
          showContext: false,
          showaddinput: false,
          shopeditinput: false,

          data: [],
        },
        {
          name: "list2_2",
          show: false,
          showaddinput: false,
          shopeditinput: false,
          showContext: false,
          data: [
            {
              name: "list2_2_3_1",
              show: false,
              showaddinput: false,
              shopeditinput: false,
              showContext: false,
              data: [
                {
                  name: "list2_2_3_1_4_1",
                  show: false,
                  showaddinput: false,
                  shopeditinput: false,
                  showContext: false,
                  data: [],
                },
                {
                  name: "list2_2_3_1_4_2",
                  show: false,
                  showaddinput: false,
                  shopeditinput: false,
                  showContext: false,
                  data: [],
                },
              ],
            },
            {
              name: "list2_2_3_2",
              show: false,
              showaddinput: false,
              shopeditinput: false,
              showContext: false,
              data: [],
            },
          ],
        },
      ],
    },
    {
      name: "list2",
      type: "parent",
      show: false,
      showaddinput: false,
      shopeditinput: false,
      showContext: false,
      data: [],
    },
  ],
};
const reducer = (state = initialState, action) => {
  if (action.type === "SHOWMENU") {
    const lookup = (obj, val, val2) => {
      for (var key in obj) {
        var value = obj[key];
        if (obj[key] === val) {
          obj["show"] = val2;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          lookup(value, val, val2);
        }
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; ++i) {
            lookup(value[i], val, val2);
          }
        }
      }

      return obj;
    };

    var temp_data = JSON.parse(
      JSON.stringify(lookup(state.data, action.data.arg1, action.data.arg2))
    );
    return {
      data: temp_data,
    };
  }
  if (action.type === "SHOWCONTEXTMENU") {
    const lookup = (obj, val, val2) => {
      for (var key in obj) {
        var value = obj[key];
        if (obj[key] === val) {
          obj["showContext"] = val2;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          value["showContext"] = false;
          lookup(value, val, val2);
        }
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; ++i) {
            value[i]["showContext"] = false;
            lookup(value[i], val, val2);
          }
        }
      }

      return obj;
    };

    temp_data = JSON.parse(
      JSON.stringify(lookup(state.data, action.data.arg1, action.data.arg2))
    );
    return {
      data: temp_data,
    };
  }
  if (action.type === "ADD_ELEMENT") {
    console.log("ADD! invoked", action.data.arg1, action.data.arg2);
    const lookup = (obj, val, val2) => {
      for (var key in obj) {
        var value = obj[key];
        if (obj[key] === val) {
          obj["data"].push({
            name: val2,
            show: false,
            showContext: false,
            data: [],
          });
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          lookup(value, val, val2);
        }
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; ++i) {
            lookup(value[i], val, val2);
          }
        }
      }
      return obj;
    };
    temp_data = JSON.parse(
      JSON.stringify(lookup(state.data, action.data.arg1, action.data.arg2))
    );
    return {
      data: temp_data,
    };
  }
  if (action.type === "EDIT_ELEMENT") {
    const lookup = (obj, val, val2) => {
      for (var key in obj) {
        var value = obj[key];
        if (obj[key] === val) {
          obj[key] = val2;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          lookup(value, val, val2);
        }
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; ++i) {
            lookup(value[i], val, val2);
          }
        }
      }
      return obj;
    };
    temp_data = JSON.parse(
      JSON.stringify(lookup(state.data, action.data.arg1, action.data.arg2))
    );
    console.log(temp_data);
    return {
      data: temp_data,
    };
  }
  if (action.type === "DEL_ELEMENT") {
    const lookup = (obj, val) => {
      for (var key in obj) {
        var value = obj[key];

        if (typeof value === "object" && !Array.isArray(value)) {
          lookup(value, val);
        }
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; ++i) {
            if (value[i]["name"] === val) {
              value[i]["showContext"] = false;
              value.splice(value[i], 1);
              console.log(value);
            }
            lookup(value[i], val);
          }
        }
      }
      return obj;
    };
    temp_data = JSON.parse(
      JSON.stringify(lookup(state.data, action.data.arg1, action.data.arg2))
    );
    return {
      data: temp_data,
    };
  }
  if (action.type === "SHOW_ADD_INPUT") {
    const lookup = (obj, val, val2) => {
      for (var key in obj) {
        var value = obj[key];
        if (obj[key] === val) {
          obj["showaddinput"] = val2;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          lookup(value, val, val2);
        }
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; ++i) {
            lookup(value[i], val, val2);
          }
        }
      }

      return obj;
    };

    temp_data = JSON.parse(
      JSON.stringify(lookup(state.data, action.data.arg1, action.data.arg2))
    );
    return {
      data: temp_data,
    };
  }

  if (action.type === "SHOW_EDIT_INPUT") {
    const lookup = (obj, val, val2) => {
      for (var key in obj) {
        var value = obj[key];
        if (obj[key] === val) {
          obj["shopeditinput"] = val2;
        }
        if (typeof value === "object" && !Array.isArray(value)) {
          lookup(value, val, val2);
        }
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; ++i) {
            lookup(value[i], val, val2);
          }
        }
      }

      return obj;
    };

    temp_data = JSON.parse(
      JSON.stringify(lookup(state.data, action.data.arg1, action.data.arg2))
    );
    return {
      data: temp_data,
    };
  } else {
    return state;
  }
};

export default reducer;
