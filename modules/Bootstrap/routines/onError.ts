const routine: Bootstrap.Routine = {
  name: "onError",
  action: (context) => {
    const { bootstrapStore } = context;
    bootstrapStore.setError();
  },
};

export default routine;
