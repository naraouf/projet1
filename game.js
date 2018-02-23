


 
           const formulaire = document.querySelector('#formulaire');
           let player01 = "";
           let player02 = new Personnage ("pc");
           localStorage.setItem('player02',JSON.stringify(player02));

           formulaire.addEventListener('submit', function(event){
               event.preventDefault();
           
               let name = document.querySelector('#name').value;
               
                player01 = new Personnage(name);

                localStorage.setItem('player01',JSON.stringify(player01));

                player02 = new Personnage (name);   
                
                console.log(player01);
                localStorage.setItem('player02',JSON.stringify(player02));

                
                let NiveauG1 = document.querySelector("#niveauG1");
                NiveauG1.style.backgroundColor="red";
                NiveauG1.style.width=`100%`;

                let cachercommande = document.querySelector("#control");
                cachercommande.style.display="flex";
                let bouton = document.querySelector("#sub");
                bouton.style.backgroundColor="";

                let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";


           });

          

           let gauche = document.querySelector('#gauche');
           let droite = document.querySelector('#droite');
           
           gauche.addEventListener("click", function (event) {
            // let p1= JSON.parse( localStorage.getItem('player01'));
            // let p2= JSON.parse( localStorage.getItem('player02'));
            // console.log(player01);

            attackG();
           


});
droite.addEventListener("click", function (event) {
    // let p1= JSON.parse( localStorage.getItem('player01'));
    // let p2= JSON.parse( localStorage.getItem('player02'));
    // console.log(player01);
if(JSON.parse( localStorage.getItem('player02'))){
    attackD();
}
   
   
 

});

           function attackG(){

            let p2= JSON.parse( localStorage.getItem('player02'));
            p2.sante-=5;
            localStorage.setItem('player02',JSON.stringify(p2));
            console.log(p2);
            let p1= JSON.parse( localStorage.getItem('player01'));            
                        p1.force-=5;
                        localStorage.setItem('player01',JSON.stringify(p1));
                        console.log(p1);
           }
                
           function attackD(){
               console.log(encours);
            if(typeof encours=='undefined'){

            let combatant_G = document.querySelector("#combatant_G").src="img/persG/encaisse1.gif";
             
            // pm = document.getElementById("combatant_G");
           // pm.style.blockSize = "300px";
                encours = 1;
            setTimeout(function(){
              //  pm = document.getElementById("combatant_G");
              //  pm.style.blockSize = "253px";
             combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
                 encours = undefined;
            },1000);
                        
                        let p1= JSON.parse( localStorage.getItem('player01'));
            
                        p1.sante-=5;
                        localStorage.setItem('player01',JSON.stringify(p1));
                        console.log(p1.sante);

                        let p2= JSON.parse( localStorage.getItem('player02'));
                        
                        p2.force-=5;
                        localStorage.setItem('player02',JSON.stringify(p2));
                                    console.log(p2);


                                
                                    var powerG = p1.sante ;
                                    let NiveauG1 = document.querySelector("#niveauG1");
                                    NiveauG1.style.backgroundColor="red";
                                    NiveauG1.style.width=`${powerG}%`;
                                    if(powerG==0){

                                        let combatant_G = document.querySelector("#combatant_G").src="img/persG/ko.gif";
                                        setTimeout(function(){
                                         combatant_G = document.querySelector("#combatant_G").src="img/persG/ko1.gif";
                                        alert('GAME OVER');
                                        },2000);
                                        
                                        
                                        let cachercommande = document.querySelector("#control");
                                        cachercommande.style.display="none";
                                        let bouton = document.querySelector("#sub");
                                        bouton.style.backgroundColor="green";     
                                        

                                        storage.clear();
                                        p2.force= 100;
                                        localStorage.setItem('player01',JSON.stringify(player01));
                                        localStorage.setItem('player02',JSON.stringify(p2));
                                        
                                        
                                    }       

                                };
                         }


      //-----------------------cote droit actions---------------------------                  

                       var action1 = document.querySelector("#droite");                     
                    //    var niveauG1 = document.querySelector("#niveauG1");
                       action1.addEventListener( 'click', function() {
                        
                        let block_D = document.querySelector("#blockD");
                        block_D.style.width="0px";                        
                        block_D.style.top="475px";
                       // block_D.style.backgroundColor="red";
                       // block_D.style.paddingLeft = "90px";
                        
                        let combatant_D = document.querySelector("#combatant_D").src="img/kim-hover.gif";

                        console.log('ok');

                        // let NiveauG1 = document.querySelector("#niveauG1");
                        // NiveauG1.style.backgroundColor="red";
                        // NiveauG1.style.width=powerG;


                        setTimeout(function(){
                            let block_D = document.querySelector("#blockD");
                            block_D.style.width="0px";
                            block_D.style.top="480px";
                            //block_D.style.paddingLeft = "200px";
                        let combatant_D = document.querySelector("#combatant_D").src="img/persR/stance.gif";
                        console.log("ont ok"); }, 1000);

                           
                           
                       }              
                    );



                    var action2 = document.querySelector("#attaqueD2");
                    action2.addEventListener( 'click', function() {
                        let block_D = document.querySelector("#blockD");
                        block_D.style.width="0px";                        
                        block_D.style.top="475px";
                       // block_D.style.backgroundColor="red";
                        block_D.style.paddingLeft = "90px";
                        
                        let combatant_D = document.querySelector("#combatant_D").src="img/kim-hover2.gif";

                        console.log('ok');

                        setTimeout(function(){
                            let block_D = document.querySelector("#blockD");
                            block_D.style.width="0px";
                            block_D.style.top="480px";
                            //block_D.style.paddingLeft = "200px";
                            
                           // block_D.style.paddingLeft = "90px";
                        let combatant_D = document.querySelector("#combatant_D").src="img/persR/stance.gif";
                        console.log("ont ok"); }, 1000);
                        attackD();
                           
                           
                       }              
                    );



                                            
                                           
//------------------------cote droite avancer/reculer----------------------

var x = 1300;
var z = 1315;

 
var action3 = document.querySelector("#avancerD");
action3.addEventListener( 'click', function() {
    if(s < s+200){     //il s'arrete par rapport a la position de lautre joueur 
    if(typeof encours=='undefined'){
    //console.log('ok');
    var elemt = document.getElementById("blockD");   
    var pos = x;  //
    var id = setInterval(frame, 5);// vitesse du deplacement par nombre de frame creer
    function frame() {
        console.log("zaim");
      if (pos == z) {
        clearInterval(id);
      } else {
        pos--; 
        //elem.style.top = pos + 'px'; 
        elemt.style.left = pos+"px"; 
        x=pos;
        //console.log(`avancer pos ${tos}`);
      }
    }
    z=z-90;
    
    let block_G = document.querySelector("#blockD");  
    let combatant_G = document.querySelector("#combatant_D").src="img/persR/walkf.gif";
    //console.log('ok');
    encours=1;
    setTimeout(function(){
    let block_D = document.querySelector("#blockD");        
    encours=undefined;  
    let combatant_D = document.querySelector("#combatant_D").src="img/persR/stance.gif";
    //console.log("ont ok"); 
},450);
    
       
    } 
} 
   }             
);






















                           
//-------------------------------cote gauche----------------------------------------------------------------------
let encours = undefined;


var actiongl = document.querySelector("#gauche");                     
//    var niveauG1 = document.querySelector("#niveauG1");
   actiongl.addEventListener( 'click', function() {
    if(typeof encours=='undefined'){
    
    let block_G = document.querySelector("#blockG");
    block_G.style.width="0px";                        
    block_G.style.top="480";
    block_G.style.zIndex="2";
   // block_D.style.backgroundColor="red";
    //block_D.style.paddingLeft = "90px";
    
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/mp.gif";

    console.log('ok');
    encours= 1;

    // let NiveauG1 = document.querySelector("#niveauG1");
    // NiveauG1.style.backgroundColor="red";
    // NiveauG1.style.width=powerG;


    setTimeout(function(){
        let block_G = document.querySelector("#blockG");
        block_G.style.width="0px";
        block_G.style.top="480px";
        block_G.style.zIndex="1";
        //block_G.style.paddingLeft = "200px";
        encours= undefined;
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
    console.log("ont ok"); }, 500);      
    } ; 
   }              
);





var actiongl2 = document.querySelector("#attaqueG2");
actiongl2.addEventListener( 'click', function() {
    if(typeof encours=='undefined'){
    
    let block_G = document.querySelector("#blockG");
    block_G.style.width="0px";                        
    block_G.style.top="480px";
    block_G.style.zIndex="2";

    
   // block_D.style.backgroundColor="red";
    //block_G.style.paddingLeft = "90px";
    
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/lk.gif";

    console.log('ok')
     encours= 1;
     
        //console.log(encours);
    setTimeout(function(){
        let block_G = document.querySelector("#blockG");
        block_G.style.width="0px";
        block_G.style.top="480px";
        block_G.style.zIndex="1";
        console.log(encours);
        encours= undefined;
        //block_G.style.paddingLeft = "200px";
        //console.log(encours);
       // block_D.style.paddingLeft = "90px";
       
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
    console.log("ont ok"); }, 190);
    
    
    
    attackG();
       
       
   };
 }             
);


var jumpG = document.querySelector("#jumpG");
jumpG.addEventListener( 'click', function() {
    let block_G = document.querySelector("#blockG");
    block_G.style.width="0px";                        
    block_G.style.top="480px";
   // block_D.style.backgroundColor="red";
    //block_G.style.paddingLeft = "90px";
    
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/jump.gif";
    combatant_G.style.blockSize="500px";


    console.log('ok');

    setTimeout(function(){
        let block_G = document.querySelector("#blockG");
        block_G.style.width="0px";
        block_G.style.top="480px";
        //block_G.style.paddingLeft = "200px";
        
       // block_D.style.paddingLeft = "90px";
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
    console.log("ont ok"); }, 99400);
    attackG();
       
       
   }              
);










//--------------------gauche avancer/ reculer------------------------
var s = 145;
var r = 145;

 
var action4 = document.querySelector("#avancerG");
action4.addEventListener( 'click', function() {
    if(s < x-200){     //il s'arrete par rapport a la position de lautre joueur 
    if(typeof encours=='undefined'){
    //console.log('ok');
    var elemt = document.getElementById("blockG");   
    var tos = s;  //
    var id = setInterval(frame, 5);// vitesse du deplacement par nombre de frame creer
    function frame() {
        //console.log("zaim");
      if (tos == r) {
        clearInterval(id);
      } else {
        tos++; 
        //elem.style.top = pos + 'px'; 
        elemt.style.left = tos+"px"; 
        s=tos;
        //console.log(`avancer pos ${tos}`);
      }
    }
    r=r+90;
    
    let block_G = document.querySelector("#blockG");  
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/wlakf.gif";
    //console.log('ok');
    encours=1;
    setTimeout(function(){
    let block_G = document.querySelector("#blockG");        
    encours=undefined;  
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
    //console.log("ont ok"); 
},450);
    
       
    } 
} 
   }             
);

var action4 = document.querySelector("#reculerG");
action4.addEventListener( 'click', function() {
    if(s > 0){
    if(typeof encours=='undefined'){
    //console.log('ok');
    var elemt = document.getElementById("blockG");   
    var tos = s;  //
    var id = setInterval(frame, 5);// vitesse du deplacement par nombre de frame creer
    function frame() {
        console.log("zaim");
      if (tos == r) {
        clearInterval(id);
      } else {
        tos--; 
        //elem.style.top = pos + 'px'; 
        elemt.style.left = tos+"px"; 
        s=tos;
        //console.log(`avancer pos ${tos}`);
      }
    }
    r=r-90;
    let block_G = document.querySelector("#blockG");  
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/walkb.gif";
    //console.log('ok');
    encours=1;
    setTimeout(function(){
    let block_G = document.querySelector("#blockG");        
    encours=undefined;  
    let combatant_G = document.querySelector("#combatant_G").src="img/persG/stance.gif";
    //console.log("ont ok"); 
      },450);
      }
    }
      });

