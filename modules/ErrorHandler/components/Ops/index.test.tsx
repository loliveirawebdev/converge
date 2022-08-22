import Ops from "./index";
import React from "react";
import { create } from "react-test-renderer";

test("if Ops screen still the same", async () => {
  const ops = await create(<Ops />);
  expect(ops).toMatchSnapshot();
});
