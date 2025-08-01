# Basics

## Variables

Variables store values that can be reused throughout your BAML code. Use `let` to declare variables:

```baml
// A global variable
let poem_subject = "Math";

// Another global variable
let default_poem = ClaudePoem(poem_subject);
```

Variables can store any value type and can reference function calls or other variables.

They can not be changed after they are defined.

---

## Mutable Variables

Use `let mut` to declare mutable variables:

```baml
// A global variable
let mut signups: string[] = [];

function AddBert() {
    signups.push("Bert")
}
```

---

## Comments

Comments explain your code and are ignored during execution:

```baml
// Single line comment
```

# Data Types

## Basic data types

BAML supports several fundamental data types:

```baml
let msg: string = "Hello world";     // String
let answer: int = 42;                // Integer
let pi: float = 3.14;                // Float (not shown in example but supported)
let exists: bool = true;             // Boolean
```

Strings are enclosed in double quotes, integers are whole numbers, and booleans are `true` or `false`.


## Arrays

Arrays store ordered collections of elements of the same type:

```baml
let numbers: int[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let empty: float[] = [];

// Access elements by index
let first = numbers[0];        // 1
let second = names[1];         // "Bob"
```

Arrays use square brackets and are zero-indexed.

---

## Maps

Maps store key-value pairs with string keys:

```baml
let scores: map<string, int> = {
  "math": 95,
  "science": 87,
  "english": 92
};

// Access values by key
let mathScore = scores["math"]; // 95
```

Maps use curly braces with quoted string keys.

---

## Optional types

Optional types represent values that may or may not be present:

```baml
let maybe_name: string? = "Alice";
let maybe_age: int? = null;

// Check if optional has a value
if (maybe_name != null) {
  print("Name is: " + maybe_name);
}
```

Optional types are denoted with `?` after the type name and can hold either a value or `null`.

---

## Tuples

Tuples store fixed-size collections of values with different types:

```baml
let point: (int, int) = (10, 20);
let person: (string, int, bool) = ("Alice", 30, true);

// Access tuple elements
let x = point.0;              // 10
let y = point.1;              // 20
let name = person.0;          // "Alice"
let age = person.1;           // 30
```

Tuples use parentheses and access elements with dot notation and index numbers.

---

## Nested structures

You can combine different compound types to create complex data structures:

```baml
let team: string[][] = [
  ["Alice", "Engineer"],
  ["Bob", "Designer"],
  ["Charlie", "Manager"]
];

let user_scores: map<string, int[]> = {
  "alice": [95, 87, 92],
  "bob": [88, 90, 85],
  "charlie": [92, 94, 89]
};

// Mixed compound types
let complex: (string, int[], map<string, bool>) = (
  "project",
  [1, 2, 3],
  {"active": true, "published": false}
);
```

# Classes

## Class definitions

Classes allow you to define your own structured data types with named fields:

```baml
class Todo {
  id int
  todo string
  completed bool
  userId int
}

class Comparison {
  poem_1_score int @description("1-10 rating of the first poem's quality")
  poem_2_score int @description("1-10 rating of the second poem's quality")
  reasoning string @description("Reasons for the above scores, explicitly contrasting the poems.")
}
```

Classes can include:
- Field names and types
- `@description` annotations for documentation

---

## Class usage

Use classes as parameter and return types in functions:

```baml
class Todo {
  id int
  todo string
  completed bool
  userId int
}

function Completed(
  t: Todo
) -> Todo {
    Todo {
        completed: true,
        ..t
    }
}
```

# Functions

## Defining functions

Define a function with the `function` keyword, a list of typed
parameters, a return type, and a function body.

```baml
function Ten() -> int {
  10
}

function Pair(i: int) -> int[] {
    [i, i]
}
```

## Function calls

Call functions by name with arguments in parentheses:

```baml
function RunPoemFaceoff(
  subject: string,
  length: int
) -> Comparison {
  let poem1 = ClaudePoem(subject, length);
  let poem2 = OpenAIPoem(subject, length);
  ComparePoems(subject, poem1, poem2)
}
```

Functions can call other functions and use variables within their scope.

---

## Built-in functions

BAML provides built-in functions for common operations:

```baml
function GetTodo() -> Todo {
  std::fetch_value<Todo>(std::Request {
    base_url: "https://dummyjson.com/todos/1",
    headers: {},
    query_params: {},
  })
}
```

The `std::fetch_value` function makes HTTP requests to external APIs.

# Flow Control

## For loops

For loops iterate over a range of values using C-style syntax:

```baml
let mut counter = 0;

for (int i = 0; i < 10; i++) {
  counter = counter + 1; 
}

for (int x = 1; x <= 5; x++) {
  let result = x * 2;
  print(result)
}
```

The for loop header has three parts:
- Initialization: `int i = 0`
- Condition: `i < 10`
- Update: `i++`

---

## While loops

While loops continue executing as long as a condition is true:

```baml
let mut count = 0;
while (count < 5) {
  print(count);
  count = count + 1;
}

let mut running = true;
while (running) {
  let input = getUserInput();
  if (input == "quit") {
    running = false;
  }
}
```

While loops check the condition before each iteration.

---

## If statements

If statements execute code conditionally:

```baml
if (age >= 18) {
  print("Adult");
}

if (score >= 90) {
  print("A grade");
} else if (score >= 80) {
  print("B grade");
} else if (score >= 70) {
  print("C grade");
} else {
  print("Below C");
}
```

---

## Nested control flow

You can combine different control flow statements:

```baml
for (int i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    print("Even: " + i);
  } else {
    print("Odd: " + i);
  }
}

let mut x = 0;
while (x < 100) {
  if (x % 10 == 0) {
    print("Milestone: " + x);
  }
  x = x + 1;
}
```