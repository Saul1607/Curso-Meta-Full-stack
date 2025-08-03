#Ejemplos de listas
list1 = [1, 2, 3, 4, 5]
list2 = ['A', 'B', 'C']
list3 = ['Hello', 1, True, 40.22]
list4 = [1, [2,3,4], 5, 6]

#El index empieza en cero
print(list1[2])

#Imprimir todos los valores de la lista
print(*list1)

#Se puede poner un separador entre cada valor
print(*list1, sep=":")

#Agregar valores a la lista, con insert se debe de aclarar el indice donde se agrega
list1.insert(len(list1), 6)
print(*list1, sep=" ")

#Agregar valores con append, aqui no se tiene que aclarar el indice, se agrega al final
list1.append(7)
print(*list1, sep=" ")

#Agregar uno o más valores a la lista con extend
list1.extend([8, 9, 10, 11])
print(*list1, sep=" ")

#Mezclar listas con el extend tambien
list1.extend(list2)
print(*list1, sep=" ")

#pop para remover algo de la lista con un indice, a comparacion de JS
list1.pop(4)
print(*list1, sep=" ")

#del especificando el index tambien
del list1[10]
print(*list1, sep=" ")

#Iterar el list
for x in list1:
    print('Value:', x)