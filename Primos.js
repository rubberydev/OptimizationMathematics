var num = 2;
var i = 0;
var b = 0;
var a = 0;
while(i < 100)
{
	if(i%2 === 0)
	{
       console.error("the number it doesn't cousin "+i);
	}else
	{
	  a++;
      while(a < 100 && a !== b)
      {
          b = i*a;
          console.info("..."+b)
          a++;

      }
	}
   i++  
}