import React from "react";




class Home extends React.Component{
    render(){
        return(
        <div>
            



<div class="topnav">


  <img src="public/logo_.png" alt="logo" width="250" height="50"/>

   
  <button class="button2">Get Started</button>
  <a href="#More">More</a>
  <a href="#Howitworks">How it works</a>
  <a href="#Aboutus">About us</a>
  <a href="#Home">Home</a>

  
</div>



<div class="sidenav">


 <p align="center" style={{color: "white"}}> <b>Flight tickets at </b></p>
 <p align="center" style={{color: "white"}}> <b>Lowest possible rates !</b></p>





<table align="center" class="roundtable" width="300"  height="390">
    <tbody>
 

 <tr>
   <td>
    <input type="radio" name="1"/> <label  id="radio">One-Way</label>
   

  
    <input type="radio" name="2"/> <label  id="radio">Round-trip</label>
   

   
    <input type="radio" name="3"/> <label  id="radio">Multi-city</label>
   </td>

 </tr>
  

  <tr>
    <td>
      <input type="text"  align="center" id="ip1" name="" placeholder="Departing From ?"/>
    </td>
   </tr>
   <tr> 
    <td>
      <input type="text" id="ip1" name="" placeholder="Going to ?"/>
    </td>
    </tr>

    <tr>
    <td>
      <input type="text" id="ip1" name="" placeholder="Departing- Returning"/>
    </td>
    </tr>

    <tr>
    <td>
      <input type="text" id="ip1" name="" placeholder="1 Adult"/>
    </td>
    </tr>

    <tr>
    <td>
      <button class="button">Find your Flight</button>
    </td>
    </tr>

    <tr>
    <td>
      <p  style={{color: "red", fontSize: "12px"}} align="center">Terms and condition apply</p>
    </td>
  </tr>
  

  </tbody>

</table>

    
   

  
</div>





 
<div id="subbar">
  
  
</div>
<div class="main">
  


  <div class="row">
  <div class="column">
    <img src="public/img_snow.jpg" alt="Snow" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>
    <p>vacationme...</p>
  </div>
  <div class="column">
    <img src="public/img_forest.jpg" alt="Forest" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>
     <p>vacationme...</p>
  </div>
  <div class="column">
    <img src="public/img_mountains.jpg" alt="Mountains" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>
     <p>vacationme...</p>

  </div>

 <div class="column">
    <img src="public/img_snow.jpg" alt="Snow" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>
     <p>vacationme...</p>
  </div>

 
  </div>







  <div class="row">
  <div class="column">
    <img src="public/img_snow.jpg" alt="Snow" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>

     <p>vacationme...</p>
  </div>
  <div class="column">
    <img src="public/img_forest.jpg" alt="Forest" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>
     <p>vacationme...</p>
  </div>
  <div class="column">
    <img src="public/img_mountains.jpg" alt="Mountains" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>
     <p>vacationme...</p>
  </div>

   <div class="column">
    <img src="public/img_snow.jpg" alt="Snow" style={{width: "100%"}}/>
    <img src="public/person.png" alt="propic" id="person"/>
     <p>vacationme...</p>
  </div>
 
  </div>

  <img src="ad.png" alt="ad" width="100%" height="30%"/>



</div> 
</div>


        
       
    
    
        );
    
    }
}

export default Home;