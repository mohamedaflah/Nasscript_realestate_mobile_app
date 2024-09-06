import { createSlice } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";
import { IUser, IUserInitial } from "../../types/user.types";
import {
  getAlluserAction,
  getUser,
  logoutUser,
  updateUserStatusAction,
  userLogin,
  userSignup,
  validateUser,
} from "../actions/user.action";
const initialState: IUserInitial = {
  loading: false,
  err: false,
  verificationCheck: false,
  isVerified: false,
  user: null,
  users: null,
};

const userReducer = createSlice({
  initialState,
  reducers: {
    setConfirmationResult: (state, { payload }) => {
      state.verificationCheck = payload;
    },
    setUserLocally: (state, { payload }) => {
      state.user = payload;
      state.isVerified = false;
    },
    setUserEmpty: (state) => {
      state.user = null;
    },
  },
  name: "userReducer",
  extraReducers: (builder) => {
    builder
      .addCase(userSignup.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignup.fulfilled, (state, { payload }) => {
        state.loading = false;
        // toast.success("Signup success");
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Signup Successful",
        });
        state.err = false;
        state.isVerified = true;
        state.user = payload.user;
      })
      .addCase(userSignup.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
        // toast.error(state.err);
        Toast.show({
          type: "error",
          text2: state.err,
        });
      })
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.isVerified = true;
        // toast.success("Login success");
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Login Successful",
        });
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
        // toast.error(state.err);
        Toast.show({
          type: "error",
          text2: state.err,
          text1Style: { fontSize: 18 },
        });
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.err = false;
        state.isVerified = true;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isVerified = false;

        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Logout Successful",
          text1Style: { fontSize: 18 },
        });
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.err = String(payload);
        state.loading = false;
        // toast.error(state.err);
        Toast.show({
          type: "error",
          text2: state.err,
          text1Style: { fontSize: 18 },
        });
      })
      .addCase(validateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(validateUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(validateUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
        // toast.error(state.err);
        Toast.show({
          type: "error",
          text1: state.err,
          text1Style: { fontSize: 18 },
        });
      })
      .addCase(getAlluserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAlluserAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.err = false;
        state.users = payload.users;
      })
      .addCase(getAlluserAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = String(payload);
      })
      .addCase(updateUserStatusAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserStatusAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.err = false;
        state.users = state.users?.map((user) => {
          if (user?._id == payload.userId) {
            return { ...user, status: payload.userStatus };
          } else {
            return user;
          }
        }) as IUser[];
      });
  },
});

export default userReducer.reducer;
export const { setConfirmationResult, setUserLocally, setUserEmpty } =
  userReducer.actions;
