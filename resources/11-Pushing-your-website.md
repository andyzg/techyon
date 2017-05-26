# Pushing index.html to your website

Add all of the files with `git add .`. Then take a commit, also known
as a snapshot. Lastly, push the changes to Github.

```bash
$ git status
On branch master
Untracked files:
        index.html
$ git add .
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   index.html

$ git commit -m "Initial commit"
$ git push origin master
```
