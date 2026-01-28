cd "C:\Users\User\Downloads\AISCHOOL\ai-school-platform"
git add .
git commit -m "002" 2>&1 | Out-File -FilePath "commit_output.txt"
git push origin main 2>&1 | Out-File -FilePath "push_output.txt" -Append
git log --oneline -3 2>&1 | Out-File -FilePath "log_output.txt"
