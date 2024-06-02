import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: null,
  data: null,
  error: null,
};

// export const getProducts = createAsyncThunk("getProducts", async () => {
//   try {
//     const response = await axios({
//       method: "GET",
//       url: "https://fakestoreapi.com/products",
//     });
//   } catch (error) {
//     return error.response.data;
//   }
// });

export const getProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
      dispatch(setLoading(false));
      dispatch(setData(response.data));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.response.data));
    }
  };
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
//   extraReducers: (res) => {
//     res.addCase(getProducts.pending, (state) => {
//       state.loading = true;
//     })
//     .addCase(getProducts.fulfilled, (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     })
//     .addCase(getProducts.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })
//   },
});

export const { setLoading, setData, setError } = ProductSlice.actions;

export default ProductSlice.reducer;
