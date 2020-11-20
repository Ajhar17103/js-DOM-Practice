 document.getElementById('demo').innerText='Hello My js DOM';
let x=document.getElementsByTagName('p');
document.getElementById('demo1').innerHTML=x[0].innerHTML
 document.querySelector('#hh').innerHTML='Allah';

 function myapp(){
    var x = document.forms["frm1"];
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
     }
     document.getElementById('gg').innerHTML=text;
 }

function myImgApp(){
document.getElementById('myImg').src="./image/p2.jpg" 
let x=document.getElementById('myImg');
x.style.width='50%';
x.style.borderRadius='10%'

}

function myAnimation(){
  let elem = document.getElementById("animate");   
 let pos = 0;
  let id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

function chanageText(id){
  id.innerHTML='Hello, header One'
  id.style.color='red';
  id.style.fontSize='50px'
}

document.querySelector('#mybtn').onclick=displayDate;
function displayDate(){
  document.getElementById('show').innerHTML=Date();
}

 function myapp(){
  let getText=document.querySelector('.ctn');
  let setText=document.querySelector('#head');
  setText.innerHTML='Checked!';
  getText.style.background='green';
}  
function myapps(){
 let st=document.querySelector('.ctn');
 st.style.background='orangered';
  document.getElementById('head').innerText='Thank you, for your checking.'
}
document.getElementById('showdate').addEventListener('click',mydates);
function mydates(){
  let getId=document.getElementById('date');
  getId.innerHTML=Date();
}

let getButton=document.querySelector('#btn');
getButton.addEventListener('mouseover', function(){
  document.getElementById('output').innerHTML += 'Mouse Over!' + '<br/>';
  document.getElementById('output').style.color='red'
});
getButton.addEventListener('mouseout', function(){
  document.getElementById('output').innerHTML += 'mouse out!' + '<br/>'
  document.getElementById('output').style.color= 'orange'
});
getButton.addEventListener('click', function(){
  document.getElementById('output').innerHTML += 'Clicked' + '<br/>'
  document.getElementById('output').style.color= 'blue'
});
 
document.getElementById('id2').innerHTML=document.getElementById('id1').childNodes[0].nodeValue;


let newPara=document.createElement("p");
let newNode=document.createTextNode('This is first paragraph');

newPara.appendChild(newNode);

let put=document.getElementById('div1');
put.appendChild(newPara);
 

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para); 

let newPara=document.createElement('p');
let newNode=document.createTextNode('Hello, Im new node text');
newPara.appendChild(newNode);
let setNodeValue=document.getElementById('11');
let aa=document.getElementById('bInsert');
let parent = document.getElementById("div1");
setNodeValue.appendChild(newPara);
parent.replaceChlid(newPara, aa)
 setNodeValue.insertBefore(newPara,aa)
 aa.remove();
 
let myCollection=document.getElementsByTagName('h1');
  let txt=myCollection[1].innerHTML
let newhead=document.createElement('p');
let newNode=document.createTextNode(txt);
newhead.appendChild(newNode);
let out=document.getElementById('div21');
out.appendChild(newhead);
document.write('Total Length:' +' '+ myCollection.length)
 

function checkfont(){
  let getText=document.getElementById('text');
  getText.style.color='red';
  getText.style.fontSize='25px'
}
 
function getFormvalue(){
  let getValue=document.getElementById('form');
  for(let i=0; i<getValue.length;i++){
    if(getValue.elements[i].value!='Submit'){
     document.getElementById('output').innerHTML += getValue.elements[i].value +'<br/>';
      
    }
    
  }
  

}

let input=document.getElementById('check');
input.addEventListener('click', function(){
  document.getElementById('peraText').style.backgroundColor='red';
})
input.addEventListener('click', function(){
  document.getElementById('peraText1').style.backgroundColor='yellow';
})
input.addEventListener('dblclick', function(){
  document.getElementById('peraText1').style.backgroundColor.removeProperty('backgroundColor');
})

let getButtonValue=document.getElementById('clickbtn');

 

getButtonValue.addEventListener('click', function(){
   let aa=document.querySelector('#show').innerText= document.getElementById('btn').rel;
   alert(aa);
});
 
 function insertRow(){
  let getTable=document.getElementById('sampleTable').insertRow(0);
   let fName=document.getElementById('fName').value;
   let lName=document.getElementById('lName').value;
  let x=getTable.insertCell(0);
  let y=getTable.insertCell(1);
  x.innerHTML=fName;
  y.innerHTML=lName;

   
} 
 

 function insertCells(){
  let getTable=document.getElementById('sampleTable').insertCell(0);
   
  let x=getTable.insertRow(0);
  let y=getTable.insertRow(1);
  x.innerHTML='New Row 01';
  y.innerHTML='New Row 02';

}

 function insertRow(){
   let getRow=parseInt(prompt('Enter the Row Number(0,1,2)'));
   let getCell=parseInt(prompt('enter Cell Number'));
   let setContent=prompt('enter your Content');
   let getTable=document.getElementById('sampleTable').rows[getRow].cells;
   getTable[getCell].innerHTML=setContent;
 }
 