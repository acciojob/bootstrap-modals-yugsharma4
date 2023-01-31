//your code here
var myModal = document.getElementById('open-modal')
var myInput = document.getElementById('newton-modal')

myModal.addEventListener('show', function () {
  myInput.focus()
	alert("clicked")
})