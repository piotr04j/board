#!/bin/bash

[ ! -d "./frontend/node_modules" ] && npm --prefix ./frontend i;

npm --prefix ./frontend run start -- --host 0.0.0.0;
