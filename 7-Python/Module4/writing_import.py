# En vez de importar toda la librería math, solo podrías importar la funcion que necesitas
# from math import sqrt
# root = sqrt(9)
# print(root)

#Puedes importar la librería como un alias
import math as m

cousine = m.cos(0)
print(cousine)

#Tambien puedes importar las funciones de librerias con un alias
from math import factorial as f

factorial_10 = f(10)
print(factorial_10)

#Tambien puedes importar varias funciones de una libreria
from math import factorial, log10, sqrt
x = log10(50)
print(x)

#Para importar todas las funciones de la libreria se usa el *
#Sin embargo no es la mejor práctica
from math import *