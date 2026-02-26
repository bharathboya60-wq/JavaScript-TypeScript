# AI Coding Agent Instructions

## Project Overview
This is a **JavaScript algorithm practice project** focused on fundamental computational tasks. The current focus is implementing functions to find the largest and smallest numbers in an array.

## Architecture & Data Flow

### Current Implementation Pattern
- **Input**: Array of numbers (`let numbers = [3, 5, 7, 2, 8, 1]`)
- **Output**: Identify and store largest/smallest values
- **Approach**: Initialize with first array element, then iterate through remaining elements for comparison

### Key Variables
- `numbers`: Source array of integers
- `largest`: Tracks maximum value encountered
- `smallest`: Tracks minimum value encountered

## Code Conventions

### Variable Naming
- Use camelCase for variables (`smallest`, `largest`, `currentNumber`)
- Use descriptive names that indicate purpose (avoid `x`, `y` for algorithm-focused code)

### Implementation Style
- Keep logic straightforward and readable
- Initialize variables before loops when tracking state
- Use simple comparison operators (`>`, `<`) for clarity in educational contexts

## Common Patterns to Complete
When extending this file, follow these patterns:

1. **Array Iteration**: Use `for` loops for clarity in learning-focused code
2. **Comparison Logic**: Direct `if/else` statements over ternary for readability
3. **Output**: Console.log() for verification during development

## Testing Approach
- Test edge cases: single-element arrays, negative numbers, duplicates
- Verify behavior with varied data sizes

## Next Steps & Scaffolding
- Complete the array iteration logic in `LargestAndSmallestNumber.js`
- Add loop structure to compare all numbers
- Consider extending to handle multiple data types or array operations
