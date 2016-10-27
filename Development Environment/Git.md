[Git](https://git-scm.com/) is a version control system which is a tool that allows you to track the changes you make to a project.

### Install Git

To get started, run the following command.

```
brew install git
```

Once it finishes, run the following command.

```
git --version
```

And you'll see something like this.

![](https://i.imgur.com/Gwx0LOn.png)

### Configure Git

Like artists, programmers sign their work. Let's configure Git to sign your commits with your name and email address.

**WARNING:** Before running the following commands, replace `YOUR FULL NAME` and `YOUR EMAIL ADDRESS` with the name and email from [your GitHub account](https://github.com/settings/profile).

```
git config --global user.name 'YOUR FULL NAME'
git config --global user.email 'YOUR EMAIL ADDRESS'
```

### Create SSH Keys

SSH Keys are a pair of public and private keys. These keys can be used to cryptographically sign and encrypt data. You can use it as a way to identify and authorize yourself with other people and computers. You will be using SSH to authorize yourself with Github.

**NOTE:** You may have set this up during your prework, if you have skip to Step Two to ensure it works.

**Step One:**

Follow [these instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) to:
- Generate a new SSH Keys
- Add it to the `ssh-agent`
- Add the keys to your github account

**Step Two:** Verify everything is set up correctly:

- [Test the SSH connection.](https://help.github.com/articles/testing-your-ssh-connection/)

Now when you clone repositories you can use SSH instead of HTTPS by using `git@` instead of `https://`

Example (Do not run):

```bash
git clone git@github.com:USERNAME/OTHERREPOSITORY.git
```

instead of

```bash
git clone https://github.com:USERNAME/OTHERREPOSITORY.git
```

### Optional: Git Extras

Next, run this command to download and install some awesome Git colors, handy aliases for common Git subcommands, and extra Git configuration that'll make your life easier when connecting to GitHub from the command line.

```
curl -fsSL https://git.io/vKZJ8 | sh
```

We'll go over these later. For now, relish in your victory of making it this far. 🎉

### Next Step

Install and play with [Node](Node.md)
