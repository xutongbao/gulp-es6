var bar = require('./foo')
console.log(bar);  // Object
console.log(bar.variable); // 8
console.log(bar.sum(1)); // 7
console.log(bar.square(5)); // 25
$(function() {
	console.log('jquery');
})
$(function () {
    $('#open').click(function () {
        show();
    });
    $('#close').click(function() {
        hide();
    })
    var dialog = $('#dialog');  
    function show()  
    {  
        dialog.css({'display': 'block'});
    }  
    function hide()  
    {  
        dialog.css({'display': 'none'});
    }  
});
