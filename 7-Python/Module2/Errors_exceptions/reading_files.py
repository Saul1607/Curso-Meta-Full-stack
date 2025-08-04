#read() devuelve todo el contenido del archivo como un string que contiene todos los caracteres
with open('newfile.txt', 'r') as file:
    print(file.read(), "\n")
    #Le puedes pasar un numero como argumento para especificar el numero de caracteres que devuelva
    print(file.read(50))

#readline() retorna una sola linea como string
with open('newfile.txt', 'r') as file2:
    print(file2.readline())
    #Tambien se le puede pasar como argumento un numero
    print(file2.readline(10),"\n")

#readlines() retorna en una lista ordenada todas las lineas del documento
with open('newfile.txt', 'r') as file3:
    lines = file3.readlines()
    print(lines)
    print(f"El archivo tiene un total de: {len(lines)} lineas \n")

    for line in lines:
        print(line)