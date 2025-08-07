#Ejemplo de algoritmo

#Palindromo

def is_palindrome(str):
    start_index = 0
    end_index = len(str) - 1

    while start_index < end_index:
        if str[start_index] != str[end_index]:
            return False
        start_index += 1
        end_index -= 1
    return True

print(is_palindrome('racecar'))

#Ejercicio Make a cup of coffee

#Los inputs que va a tener, en este caso
#Agua, coffee; leche y azucar opcionales
def cup_coffee(water, coffee):
    # water acepta strings 'cold' o 'hot'
    # coffee acepta un int del numero de cucharadas que quiere
    # milk acepta un boolean de True o False
    # sugar tambien un True o False

    # Si agua no es cold o hot entonces return
    if water not in ['cold', 'hot']:
        print('Por favor añada agua.')
        return
    
    print('Calentando el agua...' if water == 'cold' else 'Sirviendo el agua')
    
    if coffee <= 0:
        print('Añada una cantidad de cucharadas de café válida')
        return
    print(f'Agregando {coffee} cucharadas de café...')

    wants_milk = input('Quieres agregar leche? (Yes or No)').strip().lower()
    if wants_milk == 'yes':
        print('Agregando un poco de leche...')
    elif wants_milk == 'no':
        print('Perfecto, sin leche...')
    else:
        print('Introduce una respuesta válida por favor')
        return
        
    wants_sugar = input("Quieres azucar? (Yes or No)").strip().lower()
    if wants_sugar == 'yes':
        how_much = input('Cuantas cucharadas quieres?')
        print(f'Agregando {how_much} cucharadas de azucar')
    elif wants_sugar != 'no':
        print('Añada una respuesta válida')
        return
    
    print('Su café está listo, vuelva pronto!')
        
cup_coffee('cold', 2)