const performanceMode = document.getElementById('performance');

performanceMode.addEventListener('change', () => {
    document.body.classList.toggle('light-performance')
})


const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode')
})