# Basic Calculator

A web-based calculator with full keyboard support and a custom expression evaluator — no `eval()`. Built with vanilla JavaScript, HTML and CSS.

## Features

- Arithmetic: `+ − × ÷`, exponentiation (`^`) and parentheses
- Custom parser instead of `eval()`: tokenizes the expression and resolves operator precedence with a stack
- Full keyboard input (numbers, operators, Enter to evaluate, Esc to clear, Backspace to delete)
- Responsive layout for desktop and mobile

## Running it

Open `index.html` in your browser. No dependencies, no build step.

## How the evaluator works

Calling `eval()` on user input is a security risk, so instead the calculator:

1. Tokenizes the input into numbers and operators
2. Applies operator precedence — parentheses, then `^`, then `× ÷`, then `+ −`
3. Evaluates with a stack-based algorithm

## Files

```
index.html   # structure
style.css    # styling and responsive layout
script.js    # parser and event handling
```
