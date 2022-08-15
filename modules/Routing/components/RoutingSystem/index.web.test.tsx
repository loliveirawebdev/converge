import routingSystem from "./index.web";

test("if RoutingSystem is returning null for web", () => {
  const system = routingSystem();
  expect(system).toBe(null);
});
