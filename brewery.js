function booktable(firstname,lastname,number,date) {
    this.firstname = firstname;
    this.lastname =lastname;
    this.number=number;
    this.date=date;
    this.validatebookatable = function() {
        
        if (this.firstname=== "") 
        {
            alert('First name is required!');
            return false;
           
        }   
       
        if (this.lastname==="") 
        {
            alert('Last name is required!');
            return false;
        }
        if (this.number==="")
         {
            alert('Phone is required!');
            return false;
        }
        if (this.date==="") 
        {
            alert('Arrival date is required!');
            return false;
        }
        return true;
    }
}
    function check() {
        var firstname = document.getElementById('data_2').value.trim();
        var lastname = document.getElementById('data_3').value.trim();
        var Phone= document.getElementById('data_4').value.trim();
        var date=document.getElementById('data_6').value.trim();
    var submit = new booktable(firstname,lastname,Phone,date) ;
    var status = submit.validatebookatable();
    if(status == true)
    {
        alert("Your table is booked");
    }
    else{
        alert("Fill in all the inputs");
    }

}
  

