function handleChoice(choice) {
    document.getElementById('initialMessage').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    const messageElement = document.getElementById('message');
    const gifElement = document.getElementById('gif');
    const nextOptions = document.getElementById('nextOptions');
    const endButton = document.getElementById('endButton');

    if (choice === 'meValePito') {
        messageElement.textContent = 'A bueno, hetere';
        endButton.classList.remove('hidden');
    } else {
        messageElement.textContent = 'No, ya no quiero';
        nextOptions.classList.remove('hidden');
    }
}

function handleNextStep() {
    const messageElement = document.getElementById('message');
    const gifElement = document.getElementById('gif');
    const nextOptions = document.getElementById('nextOptions');
    const catOptions = document.getElementById('catOptions');

    messageElement.textContent = 'Mentiris ajajaj';
    gifElement.src = 'https://media.tenor.com/Y4AzOUrW5GQAAAAM/gato-moviendo-la-cabeza-al-ritmo-de-la-musica.gif';  // GIF de un gato bailando
    gifElement.classList.remove('hidden');
    nextOptions.classList.add('hidden');
    catOptions.classList.remove('hidden');
}

function showCat() {
    const messageElement = document.getElementById('message');
    const gifElement = document.getElementById('gif');
    const catOptions = document.getElementById('catOptions');
    const finalOptions = document.getElementById('finalOptions');

    messageElement.textContent = '¿Quieres establecer esta relación como oficial?';
    gifElement.src = 'https://i.pinimg.com/originals/6f/be/b3/6fbeb391d97455ead64a1e6a78e8a90b.gif';  // GIF de Hatsune Miku
    catOptions.classList.add('hidden');
    finalOptions.classList.remove('hidden');
}

function handleFinalChoice(choice) {
    const messageElement = document.getElementById('message');
    const gifElement = document.getElementById('gif');
    const endButton = document.getElementById('endButton');

    document.getElementById('finalOptions').classList.add('hidden');
    gifElement.classList.add('hidden');
    if (choice === 'ti') {
        messageElement.textContent = 'Mírame y pon el cuello chiquita';
    } else {
        messageElement.textContent = 'A bueno, coma pito';
    }
    endButton.classList.remove('hidden');
    endButton.textContent = 'Uy, bueno';
}

function endProgram() {
    document.body.innerHTML = '<h1>LESBIANAAAAAAS</h1>';
    gifElement.src = 'hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRurmsn8iilN8W2MPhIA8h3TR-VLCvvBAm7Q&s';
}
