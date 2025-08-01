bill_total = 210

discount1 = 10
discount2 = 20

if bill_total > 100 and bill_total < 200:
    print("Bill is greater than 100!")
    bill_total -= discount1
elif bill_total > 200:
    print("Bill is greater than 200!")
    bill_total -= discount2
else :
    print("Bill is less thas 100!")

print("Total bill: " + str(bill_total))

current = False

if current:
    current = False
    print("Turning light off")
else:
    current = True
    print("Turning ligts on")