#!/bin/bash
source .env
export EASEE_USERNAME EASEE_PASSWORD EASEE_EQUALIZER
npx ts-node ./src/index.ts
