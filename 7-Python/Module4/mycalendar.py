#Necesitamos importar la libreria sys antes de usar sus métodos
import sys

locations = sys.path
for i in locations:
    print(i)

#Las librerías se pueden importar donde sea, pero es buena práctica importarlas desde el comienzo
import calendar

leapdays = calendar.leapdays(2000, 2050)
print(leapdays)
isleap = calendar.isleap(2036)
print(isleap)