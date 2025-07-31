#Los numeros pueden ser integers(10), float (decimales) o complex (10j)
x = 10
y = 10.5
z = 10+ 10j
print(type(x), type(y), type(z)) #int, float, complex

#El tipo de dato Sequence, puede ser Strings, lists o tuples
x = "Hola. Mi nombre es Saúl"
y = [1, "Hola", 10.5, 10j]
z = (1, "Hola", 10.5, 10j) #No se pueden mutar ni modificar
print(type(x), type(y), type(z)) #str, list, tuple

# El tipo dictionary (objeto) puede contener cualquier data type dentro
x = {
    'a':22, 
    'b':44.4, 
    'c':"John", 
    'd': 10j, 
    'e': [1, 2, 3]}

print(type(x)); print(x['d']) # Se accede a la propiedad del diccionario con su jey 'd'

#Boolean solo tiene true o false
x = True; y = False
print(type(x), type(y)) #bool

# Set es una coleccion
example_set = {1, 'hello', 4.5, "A"}
print(type(example_set)) #set