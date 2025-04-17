let glavnaSlika = document.getElementById('the-pic');
let header = document.getElementById('header');

let index = 1;

const cityNames = [
  'Belgrade',
  'Skopje',
  'Sarajevo',
  'Sofia',
  'Tirana',
  'Podgorica',
  'Zagreb',
  'Athens'
];

function imgChange(x){
  glavnaSlika.src = `images/img${x}.jpg`;
  index = x;

  header.innerHTML = cityNames[index-1];
}

function next(){
  index++;
  if(index > 8){
    index = 1;
  }
  glavnaSlika.src = `images/img${index}.jpg`;
  header.innerHTML = cityNames[index-1];
}

function back(){
  index--;
  if(index < 1){
    index = 8;
  }
  glavnaSlika.src = `images/img${index}.jpg`;
  header.innerHTML = cityNames[index-1];
}

