@echo off
cd /d "C:\Users\User\Downloads\AISCHOOL\ai-school-platform"

echo Cleaning git cache...
git rm -r --cached . > nul 2>&1

echo Adding files...
git add .gitignore
git add src/App.tsx

echo Creating commit 002...
git commit -m "002"

echo Pushing to GitHub...
git push origin main

echo.
echo Done! Check your Git graph now.
pause
