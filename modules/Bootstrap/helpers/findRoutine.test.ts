import { findRoutine } from "./findRoutine";
const routine: Routine = { name: "test1", action: () => null };
const routines: Routine[] = [routine];

test("if it throws an error when a routine is not found", () => {
  const test = () => findRoutine(routines, "WRONG_NAME");
  expect(test).toThrowError();
});

test("if it is returning the correct routine", () => {
  const test = () => findRoutine(routines, "test1");
  expect(test).not.toThrowError();

  const returnedValue = test();
  expect(returnedValue).toMatchObject(routine);
});
