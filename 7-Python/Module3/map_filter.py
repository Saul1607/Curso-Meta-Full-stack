menu = ["espresso", "mocha", "latte", "cappuccino", "cortado", "americano"]

# map(actual_func, articles)
# map pasa una funcion a todos los elementos de la lista
def find_coffee(coffee):
    if coffee[0] == 'c':
        return coffee
    
map_coffee = map(find_coffee, menu)
for x in map_coffee:
    print(x)

# En cambio filter hace lo mismo, pero crea una lista con los elementos que fueron true
filter_coffee = filter(find_coffee, menu)
for x in filter_coffee:
    print(x)