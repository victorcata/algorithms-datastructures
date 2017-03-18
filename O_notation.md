# Big-O Notation 

- Constant
Notation: **O(1)**
```javascript
arr.push()
arr.pop()
3 + 4
```

- Logarithmic
Notation: **O(logn)**
```javascript

```

- Linear
Notation: **O(n)**

```
for (var i...) {
    1+1
} 
Time complexity: O(n) * O(1) === O(n^2)
```

- Quadratic
Notation: **O(n^2)**
```
for (var i...){
    for (var j...) {
        1 + 1;
        2 + 2;
    }
} 
Time complexity: [O(n) * O(n)] * [O(1) + O(1)] === O(n^2)
```

- Exponential
Notation: **O(K^n)**

```
for (var i...) {
    for (var j...) {
        for (var k...) { }
    }
}
Time complexity: O(n) * O(n) * O(n) === O(n^3)
```
