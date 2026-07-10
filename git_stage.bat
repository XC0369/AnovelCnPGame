@echo off
cd /d C:\Games\CnPgame\AnovelCnPGame
git update-index --add --cacheinfo 100644,%~1 style.css
git update-index --add --cacheinfo 100644,%~2 script.js
