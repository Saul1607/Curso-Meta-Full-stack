#Iterando en los valores de una string
str = "Looping"

# En este caso con declarar la variable item (i) no se le incializa con ningun valor
# Y se usa el in en vez de usar el str.length (for in)
for item in str:
    print(item)

favorites = ['Creme Brulee', 'Apple Pie', 'Churros', 'Tiramisú', 'Chocolate Cake']

for idx, item in enumerate(favorites):
    print(idx + 1, item)

count = 0
while count < len(favorites):
    print('I like this desert: ', favorites[count])
    count += 1

for i in range(5):
    print(i)