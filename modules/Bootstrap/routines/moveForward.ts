// this routine must be placed always in the end of the flow
const routine: Routine = {
  name: "moveForward",
  action: (context) => {
    const { navigation } = context;
    navigation.navigate({ to: "Home", reset: true });
  },
};

export default routine;
