varA = "Hello World"; print(varA)
varB = "This is too" \
" big to fit" \
" on a single line so" \
" you multi-lined it"
print (varB)

#Las strings tambien pueden cambiar de valor
name = 'John'; print(name)
name = 'Saul'; print(name)

#Se puede acceder a los valores de la string con el indice
print(name[0]) #'S'

#len function retorna la longitud
print(len(name)) # 4 porque son 4 letras Saul

a = 'Hello'; print(a) #Single cuotes
b = "Hello"; print(b) #Double cuotes

a = 'This is a single line!'
print(a)

b = 'This is a multi' \
    ' line string example'
print(b)

#Concatenando strings
a = 'Hello '
b = 'There!'
print(a+b)