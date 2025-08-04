#Forma normal de abrir un archivo solo lectura
# r is reading, r+ reading only, w writing. Le agregas b para que se abra en binario
file = open('test.txt', mode = 'r')
data = file.readline()
print(data)
file.close()

#Abrir con with, se usa para hacer exceptions automaticamente
with open('test.txt', mode= 'r') as file:
    data = file.readline()
    print(data)