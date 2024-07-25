const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-x'
  : 'fa-solid fa-bars'
}



/* Animation hidden */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');

    }else{
      entry.target.classList.remove('show');
    }
  })
})



const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

/* Animation hidden 1 */
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show1');

    }else{
      entry.target.classList.remove('show1');
    }
  })
})

const hiddenElement1 = document.querySelectorAll('.hidden1');
hiddenElement1.forEach((el) => observer1.observe(el));

/* Animation hidden 2 */
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show2');

    }else{
      entry.target.classList.remove('show2');
    }
  })
})

const hiddenElement2 = document.querySelectorAll('.hidden2');
hiddenElement2.forEach((el) => observer2.observe(el));