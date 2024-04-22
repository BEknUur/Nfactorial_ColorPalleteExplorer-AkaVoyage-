document.addEventListener('DOMContentLoaded', function() {
    const colorPaletteContainer = document.getElementById('generatedColors');
    const generateBtn = document.getElementById('generate-btn');
    const saveBtn = document.getElementById('save-btn');
    const welcomeMessage = document.getElementById('welcome-message'); // добавлено

    
    if (!localStorage.getItem('visited')) {
        // Если страница посещена в первый раз, показываем приветственное сообщение
        welcomeMessage.style.display = 'block';
    }

    
    generateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const bust = document.createElement('iframe');
        bust.src = 'web2/t.html';
        bust.style.width = '100%';
        bust.style.height = '100%';
        document.body.appendChild(bust);
    });

    saveBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const existingIframe = document.querySelector('iframe[name="emailFrame"]');
        if (existingIframe) {
            existingIframe.src = 'web3/email.html';
        } else {
            const look = document.createElement('iframe');
            look.src = 'web3/email.html';
            look.name = 'emailFrame';
            look.style.width = '100%';
            look.style.height = '100%';
            document.body.appendChild(look);
        }
    });

    var backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = ' index.html';
    });

    var colorsBtn = document.querySelector('nav ul li:nth-child(1) a');
    colorsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const gameFrame = document.createElement('iframe');
        gameFrame.src = 'web1/pallete.html';
        gameFrame.style.width = '100%';
        gameFrame.style.height = '100%';
        document.body.appendChild(gameFrame);
    });

    document.getElementById('search').addEventListener('submit', function(event) {
        event.preventDefault();
        const query = document.querySelector('input[name="q"]').value;
        searchColor(query);
    });

    function searchColor(hexCode) {
        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${hexCode}&origin=*`)
            .then(response => response.json())
            .then(data => {
                const firstFiveResults = data.query.search.slice(0, 5);
                displayColorInfo(data.query.search);
            })
            .catch(error => console.error('Error searching Wikipedia:', error));
    }

    function displayColorInfo(results) {
        const main = document.querySelector('main');
        main.innerHTML = '';
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result');
            resultItem.innerHTML = `
                <h2>${result.title}</h2>
                <p>${result.snippet}</p>
                <a href="https://en.wikipedia.org/wiki/${result.title}" target="_blank">Read more</a>
            `;
            main.appendChild(resultItem);
        });
    }
 // Добавляем события клика на ссылки навигации
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Получаем элемент с текстом
        var mainText = document.getElementById('main-text');
        // Удаляем текст или скрываем его
        mainText.remove(); // или mainText.style.display = 'none';
    });
});

// Дополнительно: добавляем обработчик клика на кнопку "Back"
document.getElementById('back-btn').addEventListener('click', function(event) {
    var mainText = document.getElementById('main-text');
    mainText.style.display = 'block'; // Показываем текст, если он был скрыт
});




    


    
});
