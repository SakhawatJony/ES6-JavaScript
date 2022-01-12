document.getElementById('add-border').addEventListener('click',function(){

    const frinedContainar = document.getElementById('frined-contrainer');
    frinedContainar.style.border = '5px solid green';

});

function addBackground(){
    const frineds = document.getElementsByClassName('friend');
for(frined of frineds){
  frined.style.backgroundColor= 'yellow';


}



}

document.getElementById('add-elements').addEventListener('click',function(){
const Containar=document.getElementById('frined-contrainer');
const frinedDiv = document.createElement('div');
frinedDiv.classList.add('friend');
frinedDiv.innerHTML = `
          <h1>New Friend</h1>
         <p>Lorem, ipsum.</p>

`;
Containar.appendChild(frinedDiv);





});