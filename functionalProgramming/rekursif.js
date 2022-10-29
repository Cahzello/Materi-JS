// sebelum di rekursif

const countDown = start => {
    do {
      console.log(start);
      start -=1;
    }
    while(start > 0);
  };
   
  countDown(10);

// Di bawah ini setelah di rekursif

const hitungMundur = start => {
    console.log(start);
    if(start > 0) hitungMundur(start-1);
  };
  
  hitungMundur(10);