function toggleTab(){
    const fullscreenTab = document.querySelector('.tab');
    fullscreenTab.classList.toggle('show');
}

document.getElementById('lang').addEventListener('click', function(){
    toggleTab();
});

document.getElementById('eng').addEventListener('click', function(){
    console.log('English selected');
    toggleTab();
});

document.getElementById('bis').addEventListener('click', function(){
    console.log('Bisaya selected');
    toggleTab();
});

document.getElementById('tag').addEventListener('click', function(){
    console.log('Tagalog selected');
    toggleTab();
});