#!/bin/bash

cd "$( dirname "$(readlink -f "$0" )" )" || exit 1

npx handlebars example.handlebars -f example.precompiled.js