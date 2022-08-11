const routine: Routine = {
  name: "onError",
  action: (context) => {
    const { navigation } = context;
    navigation.navigate({ to: "Sorry", reset: true });
  },
};

export default routine;
