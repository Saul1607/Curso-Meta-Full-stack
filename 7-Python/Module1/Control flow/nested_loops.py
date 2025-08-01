import time

list1 = [1,2,3,4,5,6,7,8,9]
list2 = [1,2,3,4,5,6,7,8,9]

count = 0

for x in list1:
    count += 1
    for y in list2:
        count += 1

print(count) #del 0 hasta 90 (valor del count)

start_time = time.time()
for i in range(100):
    for y in range(10000):
        print(0, end=" ")
    print()

print(round((time.time() - start_time), 2))

#Los nested loops pueden consumir mucha memoria y bajan el rendimiento