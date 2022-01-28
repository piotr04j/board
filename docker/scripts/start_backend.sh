#!/bin/bash

[ ! -d "./backend/node_modules" ] && npm --prefix ./backend i;

npm --prefix ./backend run start:debug;
rm -rf ./frontend/node_modules
