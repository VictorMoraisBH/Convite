// Defina a data do evento
const eventDate = new Date('September 1, 2024 19:00:00').getTime();

// Atualize a contagem regressiva a cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Calcule o tempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exiba o resultado no elemento com id="timer"
    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Se a contagem regressiva acabar, exiba uma mensagem
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('timer').innerHTML = 'O evento começou!';
    }
}, 1000);
