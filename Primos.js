var num = [];
var i = 3;

num.push(2);

while(i < 100)
{
	var cousin = true;
  
  for (var x in num)
  {
  
  //num.forEach(function(x){
     //var aux = parseInt(x);

     //for(var z = 0; z<num.length;z++)
     //{
       aux = num[x];
       if(i % aux  === 0)
       {
        cousin = false; 
        break; //sirve para terminar de forma abrupta el bucle for
        //return; //solo se puede usar en forEach statement
       }
   }
     

     if(cousin)
     {
        num.push(i);               
      }  
  //})         
  //} 
  console.log(num);
 i++ 
}