function logPerson(s, name, age) {
    if (age < 0) {
        age = "Еще не родился";
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Владилен";
const personName2 = "Максим";
const personAge = 26;
const personAge2 = -10;

const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`;
const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`;

console.log(output);
console.log(output2);