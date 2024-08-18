import { getCount, increaseCountByOne } from "./counter.js";
import {
  getCount as getCount2,
  increaseCountByOne as increaseCountByOne2,
} from "./counter.js";

let count = getCount();
console.log({ firstCount: count });
console.log("\n------------------------------");

console.log("\nincrease count by 1 with first imported function");
increaseCountByOne();
console.log("get count with first imported function");
count = getCount();
console.log({ count });

console.log("\nincrease count by 1 with second imported function");
increaseCountByOne2();
console.log("get count with first imported function");
count = getCount();
console.log({ count });

console.log("\nincrease count by 1 with first imported function");
increaseCountByOne();
console.log("get count with second imported function");
count = getCount2();
console.log({ count });
