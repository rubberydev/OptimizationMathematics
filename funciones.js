

var optimizationMath = function(Xl,Xu){
    this.REG_AUREA = 0.6180; 
    this.Xl = Xl;
    this.Xu = Xu;  

}

optimizationMath.prototype.CalculateX = function(typefunction){

   if(typefunction === 1){
		var a = this.Xl+this.REG_AUREA*(this.Xu-this.Xl);
	    return a;
	}else{
		var b = this.Xu-this.REG_AUREA*(this.Xu-this.Xl);
	    return b;
	}	  			
} 

optimizationMath.prototype.CalculateMistake = function(X_opt){
		     
	var ErrorRelative = (1-this.REG_AUREA)*((this.Xu-this.Xl)/X_opt)*100;		     
	return ErrorRelative;		
}

function algorithmGoldRegion(){
	$("#bodyTable").empty();
    var choiceFn = parseInt(document.getElementById("choose").value);
    var actionFn = document.getElementById("operation").value;    

    switch(choiceFn){
        case 1: 
            var ObjOptimization = new optimizationMath(0,4);			
        break;

        case 2: 
            var ObjOptimization = new optimizationMath(0.1,5);			
        break;

        case 3: 
            var ObjOptimization = new optimizationMath(-2,4);		
        break;
    }

    var EvaluarX = function(x, choice){	

        if(choice == 1){
            var funcionEval = (2*Math.sin(x)-(Math.pow(x,2)/10)).toFixed(4);
			return funcionEval;
        }else if (choice == 2){
        	var funcionEval = (2*x+(3/x)).toFixed(4);
			return funcionEval;
        }else if(choice == 3){
	        var funcionEval = (4*x-(1.8*x**2)+(1.2*x**3)-(0.3*x**4)).toFixed(4);
		    return funcionEval;	 	
        }  		   
    }
   
    
    var X1 = ObjOptimization.CalculateX(1);
    var X2 = ObjOptimization.CalculateX(2); 
                 
    var F_X1 = EvaluarX(X1,choiceFn);
    var F_X2 = EvaluarX(X2,choiceFn);
    
    if(F_X2 < F_X1 && actionFn == "min")
        var Mistake = ObjOptimization.CalculateMistake(X2)
    else if (F_X2 > F_X1 && actionFn == "min")
        var Mistake = ObjOptimization.CalculateMistake(X1)
    else if(F_X2 > F_X1 && actionFn == "max")
        var Mistake = ObjOptimization.CalculateMistake(X2)
    else if (F_X2 < F_X1 && actionFn == "max")
        var Mistake = ObjOptimization.CalculateMistake(X1)
     
    console.log(Mistake)   
    var count = 0;
    var stopSentence = true;	

    while(stopSentence){

    
    $("#bodyTable").append('<tr>');
	    $("#bodyTable").append('<td>'+count+'</td>');
	    $("#bodyTable").append('<td>'+ObjOptimization.Xl.toFixed(4)+'</td>');
	    $("#bodyTable").append('<td>'+ObjOptimization.Xu.toFixed(4)+'</td>');
	    $("#bodyTable").append('<td>'+X1.toFixed(4)+'</td>');
	    $("#bodyTable").append('<td>'+X2.toFixed(4)+'</td>');
	    $("#bodyTable").append('<td>'+F_X1+'</td>');
	    $("#bodyTable").append('<td>'+F_X2+'</td>');
	    $("#bodyTable").append('<td>'+Mistake.toFixed(4)+' <strong>%</strong></td>');
    $("#bodyTable").append('</tr>');


    
    if(F_X2 > F_X1 && actionFn == "max"){
				 
				 ObjOptimization.Xu = X1;						 
                 X1 = X2;                         
                 F_X1 = F_X2;	                     
                 
                 console.log(ObjOptimization.Xu.toFixed(4),actionFn);
                 console.log(X1);

                 var aux = ObjOptimization.CalculateX(2);
                 X2 = aux;

                 console.log(ObjOptimization.Xl);
                 console.log(ObjOptimization.Xu);

                 F_X2 = EvaluarX(X2,choiceFn);
                 
                 //calculo el error
                 if(F_X2 > F_X1)
                   var Mistake = ObjOptimization.CalculateMistake(X2)
                 else
                   var Mistake = ObjOptimization.CalculateMistake(X1)
                 
			}else if(F_X2 < F_X1 && actionFn == "max"){
				 
				 ObjOptimization.Xl = X2;						 
                 X2 = X1;	                     
                 F_X2 = F_X1;

                 var aux = ObjOptimization.CalculateX(1);
                 X1 = aux;

                 F_X1 = EvaluarX(X1,choiceFn);
                 
                 //calculo el error
                 if(F_X2 > F_X1)
                   var Mistake = ObjOptimization.CalculateMistake(X2)
                 else
                   var Mistake = ObjOptimization.CalculateMistake(X1)
			}

			//cuando voy hallar un minimo
            if(F_X2 < F_X1 && actionFn == "min"){
				 
				 ObjOptimization.Xu = X1;						 
                 X1 = X2;                         
                 F_X1 = F_X2;            

                 var aux = ObjOptimization.CalculateX(2);
                 X2 = aux;
                 
                 F_X2 = EvaluarX(X2,choiceFn);
                 

                 //calculo el error
                 if(F_X2 < F_X1)
                   var Mistake = ObjOptimization.CalculateMistake(X2);
                 else
                   var Mistake = ObjOptimization.CalculateMistake(X1);

			}else if(F_X2 > F_X1 && actionFn == "min"){
				 
				 ObjOptimization.Xl = X2;						 
                 X2 = X1;	                     
                 F_X2 = F_X1;

                 var aux = ObjOptimization.CalculateX(1);
                 X1 = aux;

                 F_X1 = EvaluarX(X1,choiceFn);

                 //calculo el error
                 if(F_X2 < F_X1)
                   var Mistake = ObjOptimization.CalculateMistake(X2);
                 else
                   var Mistake = ObjOptimization.CalculateMistake(X1);

			}

			var auxMistake;
            if(Mistake < 0.5 || auxMistake == Mistake)
            	stopSentence = false

            console.log(Mistake)                    
            console.log(auxMistake)
            auxMistake = Mistake;
            count++;
		}
}