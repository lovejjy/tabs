class Tab{
    constructor(){
        this.init();
    }
    init(){
        this.click()
    }
    click(){
        let uli=document.querySelectorAll('ul li');
        let oli=document.querySelectorAll('ol li');
        for(let i=0;i<uli.length;i++){
            uli[i].onclick=function(){
                for(let j=0;j<oli.length;j++){
                   oli[j].style.display="none";
                }
                oli[i].style.display="block";
            }
        }
    }
}
new Tab();