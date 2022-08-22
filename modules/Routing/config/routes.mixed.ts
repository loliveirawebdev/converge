export const MixedRoutes: Routing.Route[] = [
  {
    url: "/",
    index: true,
    name: "Bootstrap",
    componentPath: "@/modules/Bootstrap/pages/Trigger",
  },
  {
    url: "/home",
    name: "Home",
    mobileTab: true,
    componentPath: "@/modules/Home",
  },
];
