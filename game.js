let score = 0;

document.getElementById('tapButton').addEventListener('click', function () {
    score++;
    document.getElementById('scoreValue').textContent = score;
});
