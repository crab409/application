document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingText = document.getElementById('greetingText');
    if (name) {
        greetingText.textContent = `안녕하세요, ${name}님!`;
    } else {
        greetingText.textContent = '이름을 입력하세요.';
    }
});
