#print acepta varios argumentos

#comma separated
print(1, 2, 3) #1 2 3

#arithmetic
print(1 + 3) # 4

#string concatenation
name = 'John'
print('Hello ' + name) #Hello John

#Python tiene argumentos reservados para print
#sep le indicas la separacion entre los strings
print('Hello', 'you', sep=', ')

#Direct format
a, b = 10, 5
ans = a + b
print('Adding the value of {} and {} = {}'.format(a, b, ans))

#Output formatting
print('I like {0} more than {1} becasuse {0} are delicious'.format('oranges', 'grapes'))

#Ejemplos
x = input('Cuantos años tienes?: ')
try:
    x = int(x)
    print('Tienes ' + str(x) + ' años sin bañarte jajajaja')
except ValueError:
    print("ERROR: Por favor proporciona un número")

num1 = input('Please enter the first number: ')
num2 = input('Please enter a second number: ')

print(type(num1))

print(int(num1) + int(num2))

str1 = input('Please enter your first name: ')
str2 = input('Please enter your second name: ')

print('Hello', str1, str2, sep=(" "))
print('Hello {} {}'.format(str1, str2))