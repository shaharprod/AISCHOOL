@echo off
cd /d "C:\Users\User\Downloads\AISCHOOL\ai-school-platform"
echo === GIT STATUS ===
git status
echo.
echo === LAST 3 COMMITS ===
git log --oneline -3
echo.
echo === CREATING COMMIT 002 ===
git add .
git commit -m "002"
git push origin main
echo.
echo === FINAL LOG ===
git log --oneline -3
