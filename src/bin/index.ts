#!/usr/bin/env node

import { instance as main } from '../index';

async function run() {
  console.log("Hello World!");
  main.run();
}

run().catch((e) => {
  console.log('Error', e);
});