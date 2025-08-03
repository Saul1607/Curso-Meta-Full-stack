#El tuple puede tener cualquier tipo de dato
# Se pueden usar o no los parentesis pero es más práctico usarlos
#Todo lo que esté en el tuple es inmutable
my_tuple = (1, 'strings', 4.5, True)
print(type(my_tuple))

#Acceder al tuple
print(my_tuple[1])

#Método count
print(my_tuple.count('strings')) # return 1 porque solo hay 1 valor = 'strings'

#Método index
print(my_tuple.index(4.5)) # return 2 porque 4.5 está en el index 2

#Iterar en el tuple
for x in my_tuple:
    print(x)