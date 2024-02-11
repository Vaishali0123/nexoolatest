import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    email: "",
    organization: "",
  },
  reducers: {
    userData: (state, action) => {
      const { id, email, organization } = action.payload;
      state.id = id;
      state.email = email;
      state.organization = organization;
    },
  },
});
export const { userData } = userSlice.actions;
export default userSlice.reducer;
