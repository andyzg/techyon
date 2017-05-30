# Github repository

The first thing we want to do is to link the Github repository to a local repository on our laptop. In order to do this, we need to clone the repository to our computer. This will allow us to make local changes, save them, and then publish them to Github.

## Cloning the repository locally

When you first create the `<username>.github.io` repository, you'll get a link
to the repository in the Quick Setup section. 

If you can't find the link, you can take the repository's URL and add `.git` to the end.

Here are the steps to clone your repository through the link. 
```bash
$ cd SOME_PATH_TO_STORE_REPO

// Clone your Github repository named <username>.github.io
$ git clone https://github.com/andytechyon/andytechyon.github.io.git

// If you have SSH set up with your Github account
$ git clone git@github.com:andytechyon/andytechyon.github.io.git
```

[Next section: HTML and CSS](https://github.com/andytechyon/andytechyon.github.io/blob/master/resources/02-HTML-and-CSS.md)
