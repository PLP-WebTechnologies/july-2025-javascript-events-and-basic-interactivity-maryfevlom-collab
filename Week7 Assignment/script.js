// PART 2: JavaScript Functions

// Global variable for scope demo
let globalVar = "I'm global!";

// Variable Scope Function
function testScope() {
    let localVar = "I'm local!";
    const output = document.getElementById('jsOutput');
    
    function innerFunction() {
        let innerVar = "I'm inside a function!";
        return `Inner function sees: ${globalVar}, ${localVar}, ${innerVar}`;
    }
    
    output.textContent = `SCOPE DEMO:
Global variable: ${globalVar}
Local variable: ${localVar}
${innerFunction()}

Note: Local variables only exist inside their function!`;
}

// Parameters Function
function testParameters() {
    const output = document.getElementById('jsOutput');
    
    // Function with default parameters
    function greet(name = "Anonymous", age = 0) {
        return `Hello ${name}, you are ${age} years old!`;
    }
    
    // Function with multiple parameters
    function calculate(a, b, operation = "add") {
        if (operation === "add") return a + b;
        if (operation === "multiply") return a * b;
        return "Unknown operation";
    }
    
    output.textContent = `PARAMETERS DEMO:
${greet("Alice", 25)}
${greet("Bob")} (using defaults)
${greet()}

Math examples:
calculate(5, 3) = ${calculate(5, 3)}
calculate(4, 7, "multiply") = ${calculate(4, 7, "multiply")}`;
}

// Return Values Function
function testReturnValues() {
    const output = document.getElementById('jsOutput');
    
    // Function returning number
    function getRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
    
    // Function returning object
    function createPerson(name, age) {
        return {
            name: name,
            age: age,
            isAdult: age >= 18,
            introduce() {
                return `Hi, I'm ${this.name}!`;
            }
        };
    }
    
    // Function returning array
    function getColors() {
        return ["red", "blue", "green", "yellow"];
    }
    
    const person = createPerson("Emma", 22);
    const colors = getColors();
    
    output.textContent = `RETURN VALUES DEMO:
Random number: ${getRandomNumber()}

Person object: ${JSON.stringify(person, null, 2)}

Person introduction: ${person.introduce()}

Colors array: [${colors.join(", ")}]

Functions can return: numbers, strings, objects, arrays, booleans!`;
}

// Clear output
function clearOutput() {
    document.getElementById('jsOutput').textContent = 'Click buttons above to see JavaScript concepts!';
}

// PART 3: Interactive Animation Functions

// Animate Box
function animateBox() {
    const box = document.getElementById('animatedBox');
    box.classList.add('move');
    box.textContent = '🚀 Moving!';
}

// Reset Box
function resetBox() {
    const box = document.getElementById('animatedBox');
    box.classList.remove('move');
    box.textContent = '📦 Box';
}

// Flip Card
function flipCard() {
    const card = document.getElementById('flipCard');
    card.classList.toggle('flipped');
}

// Show Modal
function showModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Page loaded message
console.log('🎉 Assignment loaded successfully!');
console.log('Try hovering over cards and clicking buttons!');