(function(){
    function incrementCounter()
    {
        counter=counter+1;
    }

    function updateUI()
    {
        const colors = [
            { name: 'Alizarin' , value: '#e74c3c' },
            { name: 'Belize Hole' , value: '#2980b9' },
            { name: 'Emerald' , value: '#2ecc71' },
            { name: 'Midnight Blue' , value: '#2c3e50' },
            { name: 'Sun Flower' , value: '#f1c40f' },
            { name: 'Pumpkin' , value: '#d35400' },      
        ];

        let result=document.getElementById('resultDiv');

        result.innerText=counter;
        if(counter>0)
        {
            result.style.fontSize=counter+'em';
        }
        
        let reminder=counter%colors.length;
        result.style.color=colors[reminder].value;

        let colorDiv=document.getElementById('colorDiv');
        colorDiv.innerHTML='';

        for(i=0;i<colors.length;i++)
        {
            var node=document.createElement('div');
            var textnode=document.createTextNode(colors[i].name);

            node.appendChild(textnode);
            node.style.backgroundColor=colors[i].value;

            node.style.width= '150px';
            node.style.height= '50px';
            node.style.cssFloat='left';
            node.style.paddingLeft='10px';
            node.style.paddingTop='10px';

            if(i==reminder)
            {
                node.style.height='45px';
                node.classList.add('selected');
            }

            colorDiv.appendChild(node);
        }
    }

    function handleClick()
    {
        incrementCounter();
        updateUI();
    }

    let counter=0;

    let myButton=document.getElementById('myButton');
    myButton.addEventListener('click',function(){incrementCounter();updateUI();});
    
    updateUI();

})();