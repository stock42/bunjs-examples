#!/bin/bash
autocannon -c 500 -w 8 -d 60 -p 10 -R 2000 -W '[ -c 50 -d 10 ]' -l http://localhost:8080
