const buttons = document.querySelectorAll('.button');
const bod = document.querySelector('body');
console.log(buttons);
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    bod.style.backgroundColor = e.target.id;
  });
});
