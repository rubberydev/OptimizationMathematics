#!/bin/python
import math;
import cmath;

for i in range(1,20):
	print i;


#print("Programa que suma dos numeros");
#a = int(input("Ingresa el primer numero: "));
#b = int(input("Ingresa el segundo numero: "));

#suma = a+b;

#print("este es el resultado de la suma: ",suma)


c = 4.3098;

print(math.floor(c));

print(math.pow(2,5));

#===========================================================
import math
 
def getsin(x):
 
    multiplier = 1
    result = 0
     
    for i in range(1,20,2):
       result += multiplier*pow(x,i)/math.factorial(i)
       multiplier *= -1         
    return result
     
 
print(getsin(math.pi/2)) # returns 1.0
print(getsin(math.pi/4)) # returns 0.7071067811865475

#==========================================================
criba = [] 

for nro in range(2,100): 
    primo = True 
    for i in criba: 
        if nro % i == 0: 
            primo = False 
    if primo: 
        criba.append(nro) 
        print(nro)





