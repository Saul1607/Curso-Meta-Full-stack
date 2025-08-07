#Ejemplo de recursividad

#Aqui se usa el looping para solucionarlo
def find_factorial_by_looping(n):
    if n < 0:
        return 0
    else:
        factorial = 1
        for i in range(1, n + 1):
            factorial = factorial * i
        return factorial

print(find_factorial_by_looping(5))

#Pero con recursividad se puede lograr esto mas facil
def find_factorial_recursive(n):
    if n == 1:
        return 1
    else:
        return n * find_factorial_recursive(n - 1)
    
print(find_factorial_recursive(5))

# Ejemplo de hanoi
# Recursive function for Tower of Hanoi
def hanoi(disks, source, helper, destination):
    # Base Condition
    if (disks == 1):
        print('Disk {} moves from tower {} to tower {}.'.format(disks, source, destination))
        return

    # Recursive calls in which function calls itself.
    hanoi(disks - 1, source, destination, helper)
    print('Disk {} moves from tower {} to tower {}.'.format(disks, source, destination))
    hanoi(disks - 1, helper, source, destination)

# Driver code: Initializing and calling the function
disks = int(input('Number of disks to be displaced: '))
'''
Tower names passed as arguments:
Source: A
Helper: B
Destination: C
'''
# Actual function call
hanoi(disks, 'A', 'B', 'C')