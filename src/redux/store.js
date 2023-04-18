// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { usersReducer } from "./userSlice";
// import { filtersReducer } from "./filterSlice";

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, usersReducer)

// export const store = configureStore({
//   reducer: {
//     users: persistedReducer,
//     filter: filtersReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./userSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filtersReducer,
  },
});
