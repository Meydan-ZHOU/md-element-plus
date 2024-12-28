#!/bin/bash
dirs=(components core docs hooks theme utils)
cd packages
for dir in "${dirs[@]}"
do
mkdir -p $dir
cd $dir
pnpm init
cd ..
done
