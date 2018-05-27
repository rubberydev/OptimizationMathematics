var num = [];
var i = 3;

num.push(2);

//Novato
/*while(i < 100)
{
  var cousin = true;  
  
  for(var z = 0; z<num.length;z++)
  {
     aux = num[z];
     if(i % aux  === 0)
     {
      cousin = false; 
      break; //sirve para terminar de forma abrupta el bucle for       
     }
    
  }     

if(cousin)
{
  num.push(i);               
}   
  console.log(num);
 i++ 
}*/

//este algoritmo es mucho mas rapido ya que una vez encontrado que no es primo
//controlo la salida del ciclo
while(i < 100)
{
	var cousin = true;
  
  for (var x in num)
  {     
       aux = num[x];
       if(i % aux  === 0)
       {
        this.cousin = false; 
        break; //sirve para terminar de forma abrupta el bucle for       
       }
    
   }     

if(cousin)
{
  num.push(i);               
}   
  console.log(num);
 i++ 
}

//este algoritmo tambien funciona pero es poco optimo porque asi ya este determinado que el numero
//no es primo el sigue iterando hasta encontrar todos los numeros del array
/*function validateNumber()
{
  var num = [];
  var i = 3;

  num.push(2);
  while(i < 100)
  {
    var cousin = true;   
    
      num.forEach(function(x){
       var aux = parseInt(x);
       
         if(i % aux  === 0)
         {
          cousin = false;
          return cousin;  //solo se puede usar en forEach statement                
          throw "not cousin"; //si manejo excepciones se me para el programa cuando va la catch
         }
      })    
  if(cousin)
   {
    num.push(i);               
   }           
    
    console.log(num);
   i++    
  }
}

try
{
  validateNumber();
}
catch(e)
{  
   console.error("there was an error: ",e);
}*/

//intentando con otras maneras mas eficientes para iterar
//igual que foreach no hay una manera eficiente de controlarlo
/*while(i < 100)
{
  var cousin = true;
  
  num.filter(function(x){

       if(i % x  === 0)
       {
        cousin = false; 
        return cousin;
        //break; //sirve para terminar de forma abrupta el bucle for       
       }
  });   

  if(cousin)
  {
    num.push(i);               
  }   
  console.log(num);
 i++ 
}*/


//intentando con el metodo mas optimo de recorrer el array
//igual que foreach no hay una manera eficiente de controlarlo
/*while(i < 100)
{
  var cousin = true;
  
  var validate = num.map(function(x){

       if(i % x  === 0)
       {
        cousin = false; 
        return cousin;
        //break; //sirve para terminar de forma abrupta el bucle for       
       }
  });   

  console.log(validate); //esto me devuelve un array por tanto no me sirve para esta validacion
  if(cousin)
  {
    num.push(i);               
  }   
  console.log(num);
 i++ 
}*/