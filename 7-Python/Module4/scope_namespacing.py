def d():
    animal = "elephant"
    def e():
        nonlocal animal #Le dice a python que va a usar la variable enclosed y no la local
        animal = "giraffe"
        print("Iniside nested function: " + animal)
    
    print("Before calling function: " + animal)
    e()
    print("After nested function: " + animal)

animal = "camel"
d()
print("Global animal: " + animal)