const languages = ["JavaScript", "Python", "Java", "C#", "Go", "PHP", "Ruby", "TypeScript"];

// Print the first item.
console.log(languages[0]);

// Print the last item.
console.log(languages[7]);

// Print the item at index 3.
console.log(languages[3]);

// Print the array length
console.log(languages.length);

// Change one item
languages[1] = "C++"
console.log(languages);

// Add a new language
languages.push("Python")
console.log(languages);

// Remove one language
languages.pop("Python")
console.log(languages);

console.log(languages[10]);


// Why do array indexes start at 0?
// ans: it is a default memory storage of array indexing


// What happens when you access an index that does not exist
// Ans: It will return undefined because the value was not declared in the array
