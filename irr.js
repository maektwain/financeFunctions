    function IRR(loan,tenor,advanceEmi,flatRate){

  //set all the values 0 first 

  //loan = 0;
  //tenor = 0;
  //emi = 0;
  //advanceEmi = 0;
  //flatRate = 0;

  //finding the interest first on the loan which has to be flat 
  interest = loan * flatRate / 100 / 12 * tenor;
  //debug(interest);
  //finding the monthly emi

  emi = (interest + loan) / tenor ;
  //debug(emi)
  
  // intialising few loop variables 

  I = 0;
  npv = null;

  // Deriving Outstanding Loan Amount  

  loan_outstanding = loan - (advanceEmi * emi);
  //debug(loan_outstanding);

  //Deriving Tenor 

  tenor = tenor - advanceEmi;
  //debug(tenor);

  //Documentation on IRR

  /*
  /*
      
  The below codes do the following
  first it needs to give the guessing range where it has to guess the IRR and then it has to loop through every period given 

      */

  loan = loan -(advanceEmi * emi);
  for (irr = 1; irr < 100; irr = irr + 0.01){
    npv = 0.00;

    for (I = 1; I <= tenor; I++){
        //npv = npv + (emi /Math.pow(1+ irr/12,I));
        npv = npv + (emi/Math.pow((1+(irr/100/12)),I))

    //    debug(irr);
     //   debug(npv);
      //  debug(emi);
      //  debug(I);

    }
    if (npv <= loan){
      found = true;
      //debug(found);
      //debug(loan);
      //debug(npv);
      //break;
      return irr;
    }


    
    //debug("this is " + irr);
  }


}
