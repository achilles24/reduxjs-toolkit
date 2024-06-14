# reduxjs-toolkit

## Multiple Slice

```javascript
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, title: "Redux Toolkit" },
  reducers: {
    increment(state, action) {
      state.count = state.count + action.payload;
    },
    decrement(state) {
      state.count--;
    }
  }
});

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { toggle: true },
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, toggle: toggleSlice.reducer }
});

export const counterActions = counterSlice.actions;

export const toggleActions = toggleSlice.actions;

export default store;
```
