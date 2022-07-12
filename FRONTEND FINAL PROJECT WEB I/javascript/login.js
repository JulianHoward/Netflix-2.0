
(function(){
    
    const userInSession = getUserInSession();
    if(userInSession){
        window.location.href('pagina-inicial.html');
    }else{
        window.location.href('registro.html');
    }
})();