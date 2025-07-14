// Esta funcion está hecha para unir strings
function concatStrings(strA, strB) {
    return strA + strB;
}

// Si le pasamos numeros en vez de strings, los sumará y dará la suma de ellos
concatStrings(1, 2)

// Por eso es necesario agregar comentarios para explicar el comportamiento
// de la función. Para dejar en claro la intención de cada argumento

// expect concatStrings to return "abcdef" when I pass it "abc"
// as the first argument and "def" as the second argument
concatStrings("abc", "def");

// Otra forma de evitar confusiones es trabajando con JEST
// Esto nos permite verificar que la funcion se comporta de la manera
// que se pretendía. Además, el codigo se lee y no son necesarios los
// comentarios.
expect(concatStrings("abc", "def")).toBe("abcdef"); // Green

// Se pueden ejecutar varios expect
expect(concatStrings("123", "456")).toBe("123456"); // Green

// Los expects pueden fallar la expectativa
expect(concatStrings(1, 2)).toBe(12);               // Red

// Para que la función cumpla con la expectativa habrá que hacerle una 
// refactorizacion. Actualizar el codigo sin que afecte las otras expectativas
