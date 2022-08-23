export const MixedRoutes: Routing.Route[] = [
  {
    url: "/",
    index: true,
    name: "Bootstrap",
    componentPath: "@/modules/Bootstrap/components/Trigger",
  },
  {
    url: "/home",
    name: "Home",
    mobileTab: true,
    componentPath: "@/modules/Home",
  },
];
