class Recipe():
    #Como iniciar un objeto. Primer método __new__
    #def __new__(cls: type[Self]) -> Self:
        #pass

    # Segundo método con __init__
    def __init__(self, dish, items, time)  -> None:
        self.dish = dish
        self.items = items
        self.time = time

    def contents(self):
        print("The " + self.dish + " has " + str(self.items) + \
              " and takes " + str(self.time) + " min to prepare.")
    
pizza = Recipe("Pizza", ["cheese", "bread", "tomato"], 45)
pasta = Recipe("Pasta", ["penne", "sauce"], 55)

print(pizza.contents())
print(pasta.contents())

# Ejercicio de instantiate de objetos

class MyFirstClass():
    index = "Author-Book"

    def __init__(self, philosopher, book) -> None:
        print("Who wrote this?")
        self.philosopher = philosopher
        self.book = book
        
    def hand_list(self):
        print(MyFirstClass.index)
        print(self.philosopher + " wrote the book: " + self.book)

whodunnit = MyFirstClass("Sun Tzu", "The Art of War")
whodunnit.hand_list()