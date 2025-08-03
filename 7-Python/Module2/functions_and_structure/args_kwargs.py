def sum_of(a, b):
    return a + b

print(sum_of(4, 5))
#print(sum_of(4, 5, 6)) #Dará error ya que solo se definieron dos argumentos

#Para hacer esto posible se necesita pasar *args como argumento de la funcion
def sum_of2(*args):
    sum = 0
    for x in args:
        sum += x
    return print(sum)

#Aqui ya le podemos pasar los argumentos que queramos
sum_of2(4, 5, 6, 3, 4, 5, 7, 8, 2)

#kwargs permite poner como argumentos el key y el value
def sum_of3(**kwargs):
    sum = 0
    for k, v in kwargs.items():
        sum += v
        print(k, v, sep=": ")
    return print('Total: ', round(sum, 2))

sum_of3(coffee=2.99, cake=4.55, juice=2.99)