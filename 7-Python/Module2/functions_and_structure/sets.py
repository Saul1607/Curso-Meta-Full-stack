# Los sets almacenan valores diferentes pero solo retornan los valores unicos
set_a = {1, 2, 3, 4, 5, 5} #Ignora el segundo 5
set_b = {4, 5, 6, 7, 8}
print(set_a)

#Método add, se agrega al final
set_a.add(6)
print(set_a)

#Método remove, le pasas el valor que quieres remover
set_a.remove(2)
print(set_a)

#Método discard que es practicamente lo mismo que remove
set_a.discard(3)
print(set_a)

#Método union, une dos sets
print(set_a.union(set_b))

#Unir mediante el operador or |
print(set_a | set_b)

#Método intersection, retorna los valores que hacen match en ambos sets
print(set_a.intersection(set_b))
#Puede representarse con el operador and &
print(set_a & set_b)

#Método difference, retorna los valores que están solo en set_a y no en set_b
print(set_a.difference(set_b))
#Tambien se representa con el signo -
print(set_a - set_b)

#Método symetric difference, lo opuesto a intersection
#retorna los valores unicos en cada set pero no los que estan en ambos
print(set_a.symmetric_difference(set_b))
# Tambien se representa con ^
print(set_a ^ set_b)

#Set no es sequence por lo que no se puede recorrer su valor por medio del index