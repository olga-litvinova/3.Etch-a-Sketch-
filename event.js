// Table

//default number of rows/columns
const rows =4;

function createTable(){
    const rows =document.getElementById("scale").value;
    const row=Number(rows);
    const board=document.querySelector('.board');
    const box  = document.createElement('table');
    box.classList.add('table');
    box.style.width  = '340px';
    // let td;
    for(let i = 0; i < row; i++){
        let tr = box.insertRow();
        for(let j = 0; j < row; j++){
                let td = tr.insertCell();
                let width=340/row;
                td.style.outline = '1px solid white';
                td.style.width=width + "px";
                td.style.height=width + "px";
                td.style.padding='0';            
                td.addEventListener('mouseleave', () =>{
                    td.style.backgroundColor=getRandomColor();
                    // td.style.backgroundColor=getRandomGrey();
                    // td.style.backgroundColor="black";
                    // if()
                    }    
                 );
                 td.addEventListener('mousemove', () =>{
                    td.style.backgroundColor="red";
                 });

            };     
    };
    // Check if table exists and remove it
    const existingTable = document.querySelector('.table');
    if (existingTable) {
        existingTable.parentNode.removeChild(existingTable);
    }
    board.appendChild(box); 
};

createTable();

document.getElementById("scale").addEventListener("click", function() {
    createTable(); 
});

//Erase Button
function erase() {
    document.querySelectorAll("td").forEach(td => {
      td.addEventListener("mouseleave", () => {
        td.style.backgroundColor = "transparent";
      });
    });
  };


document.getElementById("eraser").addEventListener("click", function() {
    erase(); 
});



// Colour

    // Colour generators 
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function getRandomGrey() {
    var v = (Math.random() * 256 | 0).toString(16); 
    var color = '#';
    color += v + v + v;
    return color;
  }

//Color Random
function colorRandom() {
    document.querySelectorAll("td").forEach(td => {
      td.addEventListener("mouseleave", () => {
        td.style.backgroundColor = getRandomColor();
      });
    });
  };


document.getElementById("colorRandom").addEventListener("click", function() {
    colorRandom(); 
});

//Color Black
function colorBlack() {
    document.querySelectorAll("td").forEach(td => {
      td.addEventListener("mouseleave", () => {
        td.style.backgroundColor = "black";
      });
    });
  };


document.getElementById("colorBlack").addEventListener("click", function() {
    colorBlack(); 
});



