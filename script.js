const performanceMode = document.getElementById('performance');

performanceMode.addEventListener('change', () => {
    document.body.classList.toggle('light-performance')
})