#!/bin/bash
source .env
export EASEE_USERNAME EASEE_PASSWORD
npx ts-node ./src/index.ts
