


let count=0;



// selected button add evnet Listener 

let buttons=document.getElementsByClassName('a');



for (let button of buttons){

    button.addEventListener('click',function(event){

        

        let name=(event.target.parentNode.parentNode.childNodes[1].innerText)
      
        
    //    nameArray(name)
       

        count ++;
        console.log(count)

        if(count>0 && count <6){

          

            event.target.setAttribute('disabled',true);

            let playerAdded=document.getElementById('player-added');

            let div=document.createElement('div');

             div.innerHTML=`<p><span>${count}</span> . <span>${name}</span></p>`;

             playerAdded.appendChild(div);

        }

      
    })

   


}



// function nameArray(name){

//        let nameCount=[];
//        nameCount.push(name)
//        let ab=nameCount.length;
//        return ab;
// }


// let length=nameArray(a);
// console.log(length)




let playerCost=document.getElementById('player-express');


// total player cost calculated
function total_player_cost(){

    let per_playerString=document.getElementById('per-player').value;
    let perPlayerCost=parseFloat(per_playerString);

    let totalCost;
    
    if(isNaN(perPlayerCost)){

        alert('Pleae input per player Cost');

    }


    else {

         totalCost=count*perPlayerCost;

        playerCost.innerText=totalCost;


    }

    return totalCost;
      

}

// calculation-btn

document.getElementById('calculate').addEventListener('click',function(){

    total_player_cost();
    

})


// total calculation

document.getElementById('calculate-total').addEventListener('click',function(){



    // manager cost
    let managerString=document.getElementById('manager').value;
    let managerCost=parseFloat(managerString);

    // coach cost
    let coachString=document.getElementById('coach').value;
    let coachCost=parseFloat(coachString);

    // player cosr
    let updatePlayerCostString= document.getElementById('player-express').innerText;
    let updatePlayerCost=parseFloat(updatePlayerCostString);
    console.log(updatePlayerCost);

    if(isNaN(managerCost && coachCost && updatePlayerCost)){

           alert('please fill all input fill')

    }


    else {

        let allTotal= updatePlayerCost + managerCost +coachCost;

        document.getElementById('all-total').innerText=allTotal;

    }





})











