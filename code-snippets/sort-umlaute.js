['A', 'b', 'u', 'z', 'ü'].reverse().sort();
// Array(5) [ "A", "b", "u", "z", "ü" ]

['A', 'b', 'u', 'z', 'ü'].reverse().sort((a, b) => a.localeCompare(b));
//Array(5) [ "A", "b", "u", "ü", "z" ]