function myFunction() {
  var x = document.getElementById("addtocartSelect");
  var option = document.createElement("option");
  option.text = document.getElementById("inputitem").value;
  x.add(option);
  document.getElementById("radiogrp").hidden = false;
   var rd = document.getElementById("radiogrp");
   
   for(var i= 0; i<rd.length;i++)
   {
   		if ((rd[i].type ) == 'radio' && (rd[i].checked == true ))
		{
		       rd[i].checked = false;
		 }
   }

}



function createRadio()
{
	var objDiv = document.getElementById("radiogrp");

	 var radioItem1 = document.createElement("input");
	 radioItem1.type = "radio";
	 radioItem1.name = "radioGrp";
     radioItem1.id    = "rad1";
     radioItem1.value = "myradio1";
    

     var radioItem2 = document.createElement("input");
	 radioItem2.type = "radio";
	 radioItem2.name = "radioGrp";
     radioItem2.id    = "rad2";
     radioItem2.value = "myradio2";
    // radioItem2.onclick = deleteItem();

     var objTextNode1 = document.createTextNode("Purchase");
     var objTextNode2 = document.createTextNode("Delete");

     var objLabel = document.createElement("label");
     objLabel.htmlFor = radioItem1.id;
     objLabel.appendChild(radioItem1);
      objLabel.appendChild(objTextNode1);

      var objLabel2 = document.createElement("label");
      objLabel2.htmlFor = radioItem2.id;
      objLabel2.appendChild(radioItem2);
      objLabel2.appendChild(objTextNode2);
 
 		
 	 objDiv.appendChild(objLabel);
     objDiv.appendChild(objLabel2);
 	  document.getElementById("radiogrp").hidden = true;
   
}

function showRadio()
{
	var rd1 = document.getElementById("rad1");
	 var rd2 = document.getElementById("rad2");

	 var options = document.getElementsByTagName('option');
    var selIndex = document.getElementById("addtocartSelect").selectedIndex

	 if (rd1.checked == true)
	 {
		    for (var i = 0, length = options.length; i < length; i++)
		     {
		         if(i==selIndex)
		         {
		         	options[i].style.setProperty("text-decoration", "line-through")
		           options[i].style.backgroundColor = 'green';
		      	 }
    		}	
     }
     
}