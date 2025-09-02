// form/form.load.js

document.addEventListener('DOMContentLoaded', async () => {
    const container = document.querySelector(".services__form-container");
    if (container){
        const reponse = await fetch("/frontend/public/views/components/form.html")
        const html = await reponse.text();
        container.innerHTML = html;
    
        // Cargar la lógica del formulario
        const script = document.createElement('script');
        script.src = "/frontend/public/js/components/form.logic.js";
        document.body.appendChild(script);
    }
});