

//both method is ringht but eusy method id create obj not two localstorege like note head and notcontent 
//then change my notapp into array into object
//only change mynote app here first create object into  local storage all opretion done with MYOBJ in localStorage


console.log('this is our project');
showNotes();

//if user want to add a note then add into localstorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {

    let addHeading = document.getElementById('addHeading');
    let addTxt = document.getElementById('addTxt');

    //let noteHead = localStorage.getItem('noteHead');
    let noteLocal = localStorage.getItem('notes');

    //check local storage 
    if (noteLocal == null ) {
        //HeadObj = [];
        notesObj = [];
    }
    else {
       // HeadObj = JSON.parse(noteHead)
        notesObj = JSON.parse(noteLocal);
    }
    let MYOBJ={
        title:addHeading.value,
        note:addTxt.value
    }
    // HeadObj.push(addHeading.value);
    // localStorage.setItem('noteHead', JSON.stringify(HeadObj));
    notesObj.push(MYOBJ);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addHeading.value = addTxt.value = '';
    console.log(MYOBJ);

    //show the note function call
    showNotes();
});

//function to show element from local storage
function showNotes() {

    // let noteHead = localStorage.getItem('noteHead');
    let noteLocal = localStorage.getItem('notes');

    if (noteLocal == null ) {
        // HeadObj = [];
        notesObj = [];
    }
    else {
        //HeadObj = JSON.parse(noteHead)
        notesObj = JSON.parse(noteLocal);
    }

    let html = ``;

    // HeadObj.forEach(function (element, index) {

    //     notesObj.forEach(function (element1, index1) {

    //         //console.log(index,index1);
    //         if (index1 == index) {


    //             html += `
    //             <div class="card noteCard mx-2 my-2" style="width: 18rem;">
    //             <div class="card-body">
    //                 <h5 class="card-title">${element}</h5>
    //                 <p class="card-text">${element1}</p>
    //                 <button id="${index}" onclick='deleteNote(this.id)' class="btn btn-primary">delete Note</button>
    //             </div>
    //             </div>`;

    //         }
    //     })
    // });

    
    notesObj.forEach(function (element1, index1) {

        //console.log(index,index1);
        

            html += `
            <div class="card noteCard mx-2 my-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element1.title}</h5>
                <p class="card-text">${element1.note}</p>
                <button id="${index1}" onclick='deleteNote(this.id)' class="btn btn-primary">delete Note</button>
            </div>
            </div>`;

        
    })


    let noteEle = document.getElementById('notes');    //note div tag
    if (notesObj.length != 0) {
        noteEle.innerHTML = html;
    } else {
        noteEle.innerHTML = `Nothing HERE!!!! Add a note`;
    }
}

function deleteNote(index) {

    console.log('i am deleting ', index);

    // let noteHead = localStorage.getItem('noteHead');
    let noteLocal = localStorage.getItem('notes');

    if (noteLocal == null ) {
        // HeadObj = [];    
        notesObj = [];
    }
    else {
        // HeadObj = JSON.parse(noteHead)
        notesObj = JSON.parse(noteLocal);
    }

    // HeadObj.splice(index, 1);  //remove note
    notesObj.splice(index, 1);

    // localStorage.setItem('noteHead', JSON.stringify(HeadObj)); //Update in local storage
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

//seach ny title 
searchTitle=document.getElementById('titleSearch');
searchTitle.addEventListener('input',function(){

    let inputValue=searchTitle.value.toLowerCase();
    console.log("input fired!",inputValue);

    let noteCard=document.getElementsByClassName('noteCard');

    Array.from(noteCard).forEach(function(element){
        
        cardText=element.getElementsByTagName('h5')[0].innerText;

        if(cardText.includes(inputValue))
        {
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })   
})


//search by content
search=document.getElementById('noteSearch');
search.addEventListener('input',function(){

    let inputVal=search.value.toLowerCase();
    console.log("input fired!",inputVal);

    let noteCard=document.getElementsByClassName('noteCard');

    Array.from(noteCard).forEach(function(element){
        
        cardText=element.getElementsByTagName('p')[0].innerText;

        if(cardText.includes(inputVal))
        {
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })   
})  

