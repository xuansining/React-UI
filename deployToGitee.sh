#!/bin/env bash
yarn doc
cd doc
git init
git add .
git commit -m "updated"
git remote add origin git@gitee.com:xuanxuan_coding/react-mui-website.git
git push -u origin master
cd ..

