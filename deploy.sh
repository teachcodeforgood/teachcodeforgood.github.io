# Make sure you're on the source branch
git checkout source

# Split dist/ into its own branch called master 
git subtree split --prefix dist -b master

# Force push the new master branch
git push -f origin master:master

# Force delete the local master branch
git branch -D master