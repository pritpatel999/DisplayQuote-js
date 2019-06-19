(function(){
    const quotes = [
        {
            quote : "Life is too short and sweet to be spent by cribbing and complaining about things, here are some random quotes about the most wonderful gift that we've got.",
            author : '-life'

        },
        {
            quote : " 1. human is richly rewarding to the person who employs it. It has some value in gaining and holding attention.But it has no persuasive value at all.",
            author : '-john kenneth galbraith'
        },
        {
            quote : " 2. human is richly rewarding to the person who employs it. It has some value in gaining and holding attention.But it has no persuasive value at all.",
            author : '-Naruto uzumaki'
        },
        {
            quote : " 3. human is richly rewarding to the person who employs it. It has some value in gaining and holding attention.But it has no persuasive value at all.",
            author : '-Sasuke uchiha'
        },
        {
            quote : " 4. human is richly rewarding to the person who employs it. It has some value in gaining and holding attention.But it has no persuasive value at all.",
            author : '-Kakashi Hatake'
        },
        {
            quote : " 5. human is richly rewarding to the person who employs it. It has some value in gaining and holding attention.But it has no persuasive value at all.",
            author : '-Itachi uchiha'
        },

    ];

    const btn = document.getElementById('generate-btn');

    btn.addEventListener('click',function(){
        const random = Math.floor(Math.random() * quotes.length);
       // console.log(random);
        document.getElementById('quote').textContent = quotes[random].quote;
        document.querySelector('.quote-author').textContent = quotes[random].author;
    })
})();

