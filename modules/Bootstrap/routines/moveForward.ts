// this routine must be placed always in the end of the flow
// this is a "system" routine, do not change the name or add any
// complex behavior, create another routine instead
const routine: Bootstrap.Routine = {
  name: "moveForward",
  action: (context) => {
    const { globalState } = context;
    const { bootstrapStore } = globalState;
    bootstrapStore.setIsInitialized();
  },
};

export default routine;
