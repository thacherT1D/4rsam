[Atom](https://atom.io/) is a hackable text editor for the 21st century.

### Install Atom

To get started, [download Atom](https://atom.io/download/mac), unzip the archive file, and drag the app icon into your `/Applications` folder.

Once installed, use Spotlight to launch Atom by pressing the `Command` + `Spacebar` keys at the same time, typing the word "atom" into the search field, and then pressing the `Enter` key.

![](https://i.imgur.com/fuVq4T5.jpg)

You can close all the open tabs by typing `Command` + `W`.

### Configure Atom

Next, navigate to the `Atom > Preferences` menu item by pressing the `Command` + `,` keys at the same time.

Under the **Settings** tab, in the **Editor Settings** section, change the following:

| Name                               | Value   |
|------------------------------------|---------|
| Font Family                        | Menlo   |
| Font Size                          | 18      |
| Show Indent Guide                  | ✅      |
| Soft Wrap                          | ✅      |
| Soft Wrap At Preferred Line Length | ✅      |

Under the **Packages** tab, search for the core package called **autosave**. Then, click the **Settings** button and change the following:

| Name    | Value   |
|---------|---------|
| Enabled | ✅      |

Under the **Install** tab, with the **Package** button highlighted, install the following:

| Name       | Type    |
|------------|---------|
| file-icons | Package |

Under the **Themes** tab, choose the following:

| Name           | Type         |
|----------------|--------------|
| Solarized Dark | Syntax Theme |

When you're done, close the preferences tab by pressing the `Command` + `W` keys at the same time.

### Install the Shell Commands

You'll find it insanely useful to open files and directories into Atom from the Terminal.

To get started, select the `Atom > Install Shell Commands` menu item.

To verify Atom is wired up correctly, run the following command.

```
atom ~/Downloads
```

And the contents of your `Downloads` directory will be displayed in Atom's left sidebar.

### Atom Packages

There are two ways to install a package, using Atom or using the Terminal.

**To install** a package via Atom:

1. Open up the settings panel with the shortcut `Command` + `,`.
2. On the left sidebar, click the `Install` tab.
3. Search for the package you would like and click the `Install` button.

**To install** a package via the Terminal, use the `Atom Package Manager` command:

```shell
apm install <package-name>
```

**NOTE:** depending on how you previously installed Atom, you may need to add the `apm` command to your path in order to use it.

You can quickly search for packages [here](https://atom.io/packages).

**Step One:** Install the following plugins:

- [atom-beautify](https://atom.io/packages/atom-beautify) - this package allows us to rapidly format our code using the shortcut `cmd` + `option` + `b`.
- [linter-jshint](https://atom.io/packages/linter-jshint) - **NOT**`linter-jslint`. Lints all `.js` files.
- [linter-htmlhint](https://atom.io/packages/linter-htmlhint) - Lints all `.html` files.
- [linter-csslint](https://atom.io/packages/linter-csslint) - Lints all `.css` files and css in `.html` files.
- [linter-jsonlint](https://atom.io/packages/linter-jsonlint) - Lints all `.json` files.

**Step Two:** Some of our linters need configuration as well.

`linter-jshint` and `linter-htmlhint` rely on having configuration files to define rules for what the linter considers good or bad. Let's save some configs in our home directory:

Open your terminal and type the following (**Note** The lines with a # are comments to explain the command on the following line. Don't type the comments.):
```bash
#navigate to home directory
cd

#download and save .jshintrc
curl https://gist.githubusercontent.com/JordanMajd/9452f438cb48def55a647f7e48e1bdf9/raw/1fd88bd866e359a369ad61cbbcffbcec22c4c22c/.jshintrc > .jshintrc

#download and save .htmlhintrc
curl https://gist.githubusercontent.com/JordanMajd/122409a4e130f7e45c34a59cfc668dd7/raw/00ff634c3c66204056ee448d0ee85b3c6072e6e6/.htmlhintrc > .htmlhintrc
```

**Step Three:** In order for the linter to read the config files, Atom must be restarted : `ctrl` + `option` + `cmd` + `l`.

### Next Step

Configure the [Terminal](Terminal.md)
