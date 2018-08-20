(function(){

    function ClickHandler(message)
    {
        console.log(message);
    }

    let myButton=document.getElementById('myButton');
    myButton.addEventListener('click',function(){ClickHandler("Button!");});










})();

