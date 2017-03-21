# Coality

Command-line tool for quickly and succinctly measuring the quality of your code, specifically HTML, CSS, and JavaScript.

## Installation

Coality relies on (Coala)[https://github.com/coala/coala] and (HTML Tidy)[http://www.html-tidy.org/].

Install Coala:

```sh
brew install python3
sudo -H pip3 install coala-bears
```

Install HTML Tidy:

```sh
brew install tidy-html5
```

CSS and JS validations use global node packages:

```sh
npm install -g eslint csslint
```

Install Coality:

```sh
npm install -g coality
```

## Configuration

Coality requires a `.coafile` in the root directory of your project.

Example:

```
[Javascript]
bears = ESLintBear, SpaceConsistencyBear
files = js/*.js
use_spaces = True

[CSS]
bears = CSSLintBear, SpaceConsistencyBear
files = styles/*.css
use_spaces = True
```

HTML is validated using HTML Tidy, so you don't need to add and HTML configuration to your `.coafile`. The only thing you will need to tweak is the `files` parameter.

Be sure that you don't lint `node_modules`!

## Usage

In your project, simply run:

```sh
coality
```

