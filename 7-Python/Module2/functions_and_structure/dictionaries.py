# Los dictionaries son los objetos, tienen un key y un value
sample_dict = {1: 'Coffee', 2: 'Tea', 3: 'Juice'}
#Para acceder al dict se necesita poner como index el key
print(sample_dict[1])

# Se puede cambiar el valor de una propiedad
sample_dict[2] = 'Mint Tea'
print(sample_dict[2])

#Borrar un elemento del dict ocn del
del sample_dict[3]
print(sample_dict)

# Iterar en dictionaries
#Standard
my_d = {'key': 1, 'Name': 'Jim', 'last_name': 'Stones'}
print(my_d['last_name'])

#Agregar propiedades al dict
my_d['key2'] = 2; my_d['Name2'] = 'Mark'; my_d['last_name2'] = 'Hnery'
print(my_d)

del my_d['key2']
print(my_d)

#Iterar en el dict, esto solo devuelve el key pero no el valor
for x in my_d:
    print(x)

#Para acceder a los valores del key se necesita hacer esto
for key, value in my_d.items():
    print(key, value, sep=": ")