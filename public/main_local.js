window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(document).ready(function () {
  //clipboard
  const clipboard = document.querySelector('.do-clipboard')
  clipboard.addEventListener('click', function (e) {
    const copyCode = e.target.getAttribute('data-content')
    let tempInput = document.createElement('input')
    document.body.appendChild(tempInput)
    tempInput.setAttribute('value', copyCode)
    tempInput.select();
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    alert(`Copied the code: ${copyCode}`)
  })
});
