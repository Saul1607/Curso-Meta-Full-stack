#Global scope, accesible donde sea
my_global = 10

def fn1():
    #Variable enclosed
    enclosed_v = 8

    def fn2():
        #Accesible solo dentro del bloque
        loca_v = 5
        print('Access to Global', my_global)
        #Se puede acceder a la variable enclosed
        print('Access to enclosed', enclosed_v)
    fn2()

fn1()

#No se puede acceder a la variable local
#print("Can't access local", local_v)