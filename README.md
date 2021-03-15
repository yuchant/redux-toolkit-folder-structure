Redux toolkit comes with some amazing officially supported boilerplate reducing helpers.

The problem is that I've had trouble creating a pattern to handle future complex `thunks` which call `createSlice().actions` but need to be imported back into the `createSlice` file to be passed into `extraReducers`
