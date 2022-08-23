export const MixedRoutes: Routing.Route[] = [
  {
    url: "/",
    index: true,
    name: "Bootstrap",
    componentPath: "@/modules/Bootstrap/components/BootstrapService",
  },
  {
    url: "/home",
    name: "Home",
    mobileTab: true,
    componentPath: "@/modules/Home",
  },
];
