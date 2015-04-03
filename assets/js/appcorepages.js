var tmpl = document.querySelector('#tmpl');
tmpl.heading = 'Header';
tmpl.selected = 0;

tmpl.addEventListener('template-bound', function() {
    console.log(document.querySelector('core-menu'));
});