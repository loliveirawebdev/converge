import bootsrapService from "./index.web";

test("if BootstrapService is doing nothing for web", () => {
  const system = bootsrapService({ children: null });
  expect(system).toBe(null);
});
