import health from "./healthRoutine";
import moveForward from "./moveForward";
import onError from "./onErrorRoutine";

// the order does not matter here
// to configure the flow, take a look at config/flow.json
export default [health, moveForward, onError];
