// this routine must be placed always in the end of the flow
// this is a "system" routine, do not change the name or add any
// complex behavior, create another routine instead
const routine: Bootstrap.Routine = {
  name: "moveForward",
  action: (context) => {
    const { navigation } = context;
    navigation.navigate({ to: "Home", reset: true });
  },
};

export default routine;
