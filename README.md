# Basic Calculator 🧮

A clean and modern web-based calculator with a responsive design and full keyboard support. Built with vanilla JavaScript, HTML, and CSS.

## Features

- **Basic arithmetic operations**: Addition, subtraction, multiplication, division
- **Advanced operations**: Exponentiation (power), parentheses support
- **Keyboard support**: Use your keyboard for faster input
- **Responsive design**: Works seamlessly on desktop and mobile devices
- **Custom expression evaluator**: Secure calculation without using `eval()`
- **Clean UI**: Modern gradient design with smooth animations

## Demo

Simply open `index.html` in your web browser to start calculating!

## Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start calculating!

No dependencies or build process required.

## Usage

### Mouse/Touch Input

- Click number buttons (0-9) to input numbers
- Click operation buttons (+, −, ×, ÷, ^) to perform operations
- Click **AC** to clear all
- Click **DE** to delete the last character
- Click **=** to calculate the result
- Use parentheses ( ) for complex expressions

### Keyboard Shortcuts

- **Numbers (0-9)**: Input numbers
- **Operators (+, -, \*, /)**: Input operations
- **Enter**: Calculate result
- **Escape**: Clear display
- **Backspace**: Delete last character
- **( )**: Input parentheses

## Supported Operations

| Operation      | Symbol | Example          |
| -------------- | ------ | ---------------- |
| Addition       | +      | 5 + 3 = 8        |
| Subtraction    | −      | 5 - 3 = 2        |
| Multiplication | ×      | 5 × 3 = 15       |
| Division       | ÷      | 6 ÷ 3 = 2        |
| Exponentiation | ^      | 2 ^ 3 = 8        |
| Parentheses    | ( )    | (2 + 3) × 4 = 20 |

## Technical Details

### Custom Expression Evaluator

The calculator implements a custom expression parser that:

- Tokenizes the input expression
- Handles operator precedence correctly
- Processes parentheses using a stack-based algorithm
- Avoids security risks associated with `eval()`

### Operator Precedence

1. Parentheses `( )`
2. Exponentiation `^`
3. Multiplication `×` and Division `÷`
4. Addition `+` and Subtraction `−`

## Technologies

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with Grid layout and gradients
- **Vanilla JavaScript**: No frameworks or libraries required

## Browser Support

Works on all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## File Structure

```
calculator/
├── index.html      # Main HTML structure
├── style.css       # Styles and responsive design
├── script.js       # Calculator logic and event handlers
└── README.md       # Documentation
```

## Color Scheme

- Background gradient: Purple to violet (`#667eea` → `#764ba2`)
- Calculator body: Dark gray (`#2d3748`)
- Display: Deep dark (`#1a202c`)
- Number buttons: Medium gray (`#4a5568`)
- Operators: Green (`#48bb78`)
- Clear buttons: Red (`#f56565`)
- Special buttons: Blue (`#4299e1`)
- Equals button: Orange (`#ed8936`)

## Future Improvements

- [ ] History of calculations
- [ ] Scientific calculator mode
- [ ] Themes/color customization
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Percentage calculations

## Author

Built with ❤️ by Felipe Pereira

## License

Free to use and modify.
