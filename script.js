// Navigation with DOM Manipulation

const navigation = document.querySelectorAll('ul li a');

for (let i = 0; i < navigation.length; i++) {

  navigation[0].addEventListener('click', function() {
    navigation[i].classList.remove('active', 'm-active');
    navigation[0].classList.add('active', 'm-active');
  });

  navigation[1].addEventListener('click', function() {
    navigation[i].classList.remove('active', 'm-active');
    navigation[1].classList.add('active', 'm-active');
  });

  navigation[2].addEventListener('click', function() {
    navigation[i].classList.remove('active', 'm-active');
    navigation[2].classList.add('active', 'm-active');
  });

  navigation[3].addEventListener('click', function() {
    navigation[i].classList.remove('active', 'm-active');
    navigation[3].classList.add('active', 'm-active');
  });

}