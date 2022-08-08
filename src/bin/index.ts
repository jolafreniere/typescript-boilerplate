#!/usr/bin/env node

import { instance as main } from "../index";

async function run() {
  main.run();
}

run().catch((e) => {
  console.log("Error", e);
});