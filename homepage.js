
  
    const categories = ["Cibi", "Mestieri", "Luoghi", "Oggetti"];

    let selected = document.getElementById('selected');
    let arrow = document.getElementById('changer');
    let cat = document.getElementById('cat');
    let i = -1;

    arrow.addEventListener('click', function(){
        i++; 
        if(i == 0){
            cat.innerHTML = categories[0];
        }else if(i == 1){
            cat.innerHTML = categories[1];
        }else if(i == 2){
            cat.innerHTML = categories[2];
        }else{
            cat.innerHTML = categories[3];
            i = -1;
        }
       
    })

    let plusButton = document.getElementById('plus');
    let minusButton = document.getElementById('min');
    let playerCount = document.getElementById('numbDisp');
    let z = 0;

    plusButton.addEventListener('click', function(){
        z++;
        playerCount.innerText = z;
    });

    minusButton.addEventListener('click', function(){
        z--;
        playerCount.innerText = z;
    })

    let check = document.getElementById('checker');

    check.addEventListener('click', function(){
        if(z <= 0){
            alert('Numero player insufficente');
        }else{
            window.location.href = 'index.html';
        localStorage.setItem('sharedValue', z);
        window.location.href = 'index.html';
        localStorage.setItem('Category', i);
        window.location.href = 'index.html';
        };
        
    });

  
  




    