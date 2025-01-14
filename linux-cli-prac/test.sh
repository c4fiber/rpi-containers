#!/bin/zsh

TEST=${$(docker container ls -a -q | grep lets-practice-linux-cli):=NOT_EXIST}
echo $TEST
