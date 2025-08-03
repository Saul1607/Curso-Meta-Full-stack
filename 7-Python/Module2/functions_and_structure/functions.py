# Las funciones se declaran con def
# Despues el nombre de la funcion y los parametros
def sum(x, y):
    #Despues del : se codifica lo que va a hacer la funcion y retorna algun dato
    return print(x + y)

#Llamamos la funcion
sum(10, 20)

# Otro ejemplo, si dejamos asi, tenemos que cambiar manualmente el tax rate cada que cambie
bill = 175.00
tax_rate = 15

total_tax = (bill * tax_rate) / 100.00
print('Total tax is: $', total_tax)

#En cambio, definimos una funcion reutilizable
def calculate_tax(bill, tax_rate):
    return round(((bill * tax_rate) / 100.00), 2)

print('Total tax is: $', calculate_tax(175.00, 10))
print('Total tax is: $', calculate_tax(164.33, 22))