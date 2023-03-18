var popup = document.querySelector('.popup');
var popupButton = document.querySelector('#popup-button');
var closeButton = document.querySelector('#close-button');

popupButton.addEventListener('click', function() {
  popup.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  popup.style.display = 'none';
});
