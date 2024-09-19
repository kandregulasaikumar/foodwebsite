
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {  
      navbar.classList.add("bg-dark");
      navbar.classList.add("text-white"); 
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("text-white");
    }
  });


  const lunch =document.getElementById('lunch');
  lunch.addEventListener('click',()=>{
      const lunch =document.getElementById('row-2');
      lunch.style.display='flex'
      const dinner =document.getElementById('row-1');
      dinner.style.display="none"
       const driks2 =document.getElementById('row-3');
      driks2.style.display='none'
       const starters =document.getElementById('row-4');
      starters.style.display='none'
  })
  
  const drinks =document.getElementById('drinks');
  drinks.addEventListener('click',()=>{
     const lunch =document.getElementById('row-2');
      lunch.style.display='none'
       const driks2 =document.getElementById('row-3');
      driks2.style.display='flex'
       const starters =document.getElementById('row-4');
      starters.style.display='none'
        const dinner =document.getElementById('row-1');
      dinner.style.display="none"
  })
  
  const starters =document.getElementById('starters');
  starters.addEventListener('click',()=>{
     const drinks =document.getElementById('row-3');
      drinks.style.display='none'
      const lunch =document.getElementById('row-2');
      lunch.style.display='none'
      const dinner =document.getElementById('row-1');
      dinner.style.display="none"
       const starters =document.getElementById('row-4');
      starters.style.display='flex'
  })
  
  
  const dinner =document.getElementById('dinner');
  dinner.addEventListener('click',()=>{
     const drinks =document.getElementById('row-3');
      drinks.style.display='none'
       const starters =document.getElementById('row-4');
      starters.style.display='none'
      const lunch =document.getElementById('row-2');
      lunch.style.display='none'
      const dinner =document.getElementById('row-1');
      dinner.style.display='flex'
  })
  
  const alldishes =document.getElementById('alldishes');
  alldishes.addEventListener('click',()=>{
     const drinks =document.getElementById('row-3');
      drinks.style.display='flex'
       const starters =document.getElementById('row-4');
      starters.style.display='flex'
      const lunch =document.getElementById('row-2');
      lunch.style.display='flex'
      const dinner =document.getElementById('row-1');
      dinner.style.display='flex'
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
