# Coality

Command-line tool for quickly and succinctly measuring the quality of your code, specifically HTML, CSS, and JavaScript.

## Installation

Coality relies on [Coala](https://github.com/coala/coala) and [HTML Tidy](http://www.html-tidy.org/).

Install Coala:

```sh
brew install python3
sudo -H pip3 install coala-bears
```

Install HTML Tidy:

```sh
brew install tidy-html5
```

Install Coality:

```sh
npm install --save-dev coality
```

## Usage

Add a coality script to your `package.json`

```json
{
  ...
  "scripts": {
    "coality": "coality"
  }
  ...
}

```

Then run:

```sh
npm run coality
```

