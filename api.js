
fetch('https://api.github.com/users/WictorPereira')
.then(response => response.json())
.then(data => {
    // Atualiza o conteúdo HTML com as informações do usuário
    document.getElementById('name').innerHTML = ` ${data.name}`;
    document.getElementById('seguidores').innerHTML = `<img src="assets/followers.svg"> Seguidores: ${data.followers}`;
    document.getElementById('seguindo').innerHTML = `<img src="assets/following.svg"> Seguindo: ${data.following}`;
    document.getElementById('repositorios').innerHTML = `<img src="assets/repository.svg"> Repositórios: ${data.public_repos}`;
    document.getElementById('compania').innerHTML = `<img src="assets/company.svg"> Companhia: ${data.company || 'N/A'}`;
    document.getElementById('localizacao').innerHTML = `<img src="assets/location.svg"> Localização: ${data.location}`;
})
.catch(error => {
    console.error('Erro ao buscar informações do usuário:', error);
});