set commit=%1
set webURL=%2
git init
git add *
git commit -m %commit%
git remote add origion %webURL%
git push -u origion master
