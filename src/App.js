import React, { useReducer } from "react";
import "./App.css";


const initialState = {
  firstName: {
    value: "",
    error: null,
  },
  lastName: {
    value: "",
    error: null,
  },
  email: {
    value: "",
    error: null,
  },
};



const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME_VALUE":
      return {
        ...state,
        firstName: {
          ...state.firstName,
          value: action.payload,
        },
      };
    case "SET_FIRSTNAME_ERROR":
      return {
        ...state,
        firstName: {
          ...state.firstName,
          error: action.payload,
        },
      };
    case "SET_LASTNAME_VALUE":
      return {
        ...state,
        lastName: {
          ...state.lastName,
          value: action.payload,
        },
      };
    case "SET_LASTNAME_ERROR":
      return {
        ...state,
        lastName: {
          ...state.lastName,
          error: action.payload,
        },
      };
    case "SET_EMAIL_VALUE":
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
        },
      };
    case "SET_EMAIL_ERROR":
      return {
        ...state,
        email: {
          ...state.email,
          error: action.payload,
        },
      };
    case "SET_SUBMITTED_BOOLEAN":
      return {
        ...state,
        hasBeenSubmitted: action.payload,
      };
    default:
      return state;
  }
};

export default () => {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFirstNameChange = (e) => {
    if (e.target.value.length < 5) {
      dispatch({
        type: "SET_FIRSTNAME_ERROR",
        payload: "First Name must be at least 5 characters",
      });
    } else {
      dispatch({
        type: "SET_FIRSTNAME_ERROR",
        payload: "",
      });
    }
    dispatch({
      type: "SET_FIRSTNAME_VALUE",
      payload: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    if (e.target.value.length < 5) {
      dispatch({
        type: "SET_LASTNAME_ERROR",
        payload: "Last Name must be at least 5 characters",
      });
    } else {
      dispatch({
        type: "SET_LASTNAME_ERROR",
        payload: "",
      });
    }
    dispatch({
      type: "SET_LASTNAME_VALUE",
      payload: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    if (e.target.value.length < 5) {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "Email must be at least 5 characters",
      });
    } else {
      dispatch({
        type: "SET_EMAIL_ERROR",
        payload: "",
      });
    }
    dispatch({
      type: "SET_EMAIL_VALUE",
      payload: e.target.value,
    });
    console.log(state.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_SUBMITTED_BOOLEAN",
      payload: true,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            value={state.firstName.value}
            onChange={(e) => handleFirstNameChange(e)}
            type="text"
          />
        </div>
        {state.firstName.error !== null && (
            <p style={{color: 'red'}} className="error">{state.firstName.error}</p>
         )}
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            value={state.lastName.value}
            onChange={(e) => handleLastNameChange(e)}
            type="text"
          />
        </div>
        {state.lastName.error !== null && (
            <p style={{color: 'red'}} className="error">{state.lastName.error}</p>
         )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={state.email.value}
            onChange={(e) => handleEmailChange(e)}
            type="email"
          />
        </div>
        {state.email.error !== null && (
            <p style={{color: 'red'}} className="error">{state.email.error}</p>
         )}
      </form>
    </div>
  );
};
