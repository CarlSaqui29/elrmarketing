## How to push code on github

After you apply changes on the code do this step:

create a new branch
```bash
git checkout {new_branch_name}
```

add all changes
```bash
git add .
```

commit all changes
```bash
git commit -m "informative message here"
```

push commits
```bash
git push
```

On github create a pull request and tag me as a reviewer I will merge the code on to master branch. after I merged the code on master branch go to your vscode then do this steps:

change branch to master branch
```bash
git checkout master
```

update code by pulling out the updated codes
```bash
git pull
```