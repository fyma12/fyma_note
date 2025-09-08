#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# fyma12/fyma_note 为自己的用户名和对应的仓库名
# 意思为将main构建后的代码合并到gh-pages分支上，然后在my-pages分支上部署~
git push -f git@github.com:fyma12/fyma_note.git master:my-pages

cd -
