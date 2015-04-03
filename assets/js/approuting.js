var app = document.querySelector('#app');

//routes

page('/', home);
page('/portfolio', portfolio);
page('/contact', contact);

//configure

page({ hashbang: true });

function home() {
    app.route = 'home';
}
function portfolio() {
    app.route = 'portfolio';
}
function contact() {
    app.route = 'contact';
}
