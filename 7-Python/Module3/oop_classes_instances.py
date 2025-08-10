# Adentro de las clases, las variables son conocidas como atributos
# las funciones son conocidas como behavior

class MyClass:
    a = 5
    def hello(self):
        print("Hello World")

myc = MyClass()
print(myc.hello())