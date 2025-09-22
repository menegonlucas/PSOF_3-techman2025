fetch('http://localhost:3000/equipamentos')
    .then(response => {
        if (!response.ok) throw new Error('Erro ao carregar equipamentos');
        return response.json();
    })
    .then(equipamentos => {
        const lista = document.getElementById('lista-equipamento');
        equipamentos.forEach(eq => {
            lista.innerHTML += `
                <div class="equipamento-box">
                  <img src="assets/${eq.imagem}" alt="${eq.equipamento}" class="equipamento-img" />
                  <div class="equipamento-info">
                    <h2 class="equipamento-titulo"><em>${eq.equipamento}</em></h2>
                    <p class="equipamento-desc">${eq.descricao}</p>
                    <div class="equipamento-actions">
                        <button title="Comentários"><img src="assets/comentario.png" alt="Comentários" /></button>
                        <button title="Excluir"><img src="assets/deletar.png" alt="Excluir" /></button>
                    </div>
                  </div>
                </div>`;
        });
    })
    .catch(error => {
        document.getElementById('lista-equipamento').textContent = "Erro ao carregar equipamentos.";
        console.error(error);
    });