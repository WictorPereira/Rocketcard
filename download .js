document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadButton');
    const card = document.getElementById('card');

    downloadButton.addEventListener('click', function () {
        html2canvas(card, { 
            scale: 2, //escala para melhor qualidade 
            backgroundColor: null // Remova o plano de fundo 
        }).then(function (canvas) {
            const dataURL = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = dataURL;
            a.download = 'card.png'; // Nome do arquivo a ser baixado
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });
});