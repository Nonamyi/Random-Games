document.addEventListener('DOMContentLoaded', function() {
    const itens = [
        { nome: "Roblox", imagem: "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht" },
        { nome: "Minecraft", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbWOL6AqgFI9M4eblTENTH_X5OYkzBMpvZA&s" },
        { nome: "Terraria", imagem: "https://sm.ign.com/ign_br/cover/t/terraria/terraria_j231.jpg" },
        { nome: "Genshin", imagem: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/04/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399.jpg" },
        { nome: "Valorant", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjK5GygFdK-sCzl6HsQKy_iLMPwk6bdCdgw&s" }
    ];

    const roletaContainer = document.querySelector('.roleta');
    const duracaoAnimacao = 10000; // Duração da animação em milissegundos

    function adicionarItens() {
        roletaContainer.innerHTML = ''; // Limpa o conteúdo atual
        // Embaralha os itens e os duplica para uma roleta infinita
        const itensDuplicados = itens.concat(itens).sort(() => Math.random() - 0.5);
        itensDuplicados.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('item');
            div.textContent = item.nome;
            div.dataset.nome = item.nome; // Adiciona o nome como atributo data
            roletaContainer.appendChild(div);
        });
    }

    window.sortear = function() {
        // Esconde a imagem e o resultado
        document.getElementById('imagem-jogo').style.display = 'none';
        document.getElementById('resultado').style.display = 'none';
    
        adicionarItens();
    
        // Remove qualquer animação existente
        roletaContainer.style.animation = 'none';
    
        // Força uma re-renderização
        roletaContainer.offsetHeight;
    
        // Adiciona a animação
        roletaContainer.style.animation = `girar ${duracaoAnimacao}ms linear`;
    
        // Define um tempo para o resultado aparecer depois da animação
        setTimeout(function() {
            // Obtém o item visível no meio da roleta
            const itensVisiveis = Array.from(document.querySelectorAll('.roleta .item'));
            const meio = Math.floor(itensVisiveis.length / 2);
            const itemSelecionado = itensVisiveis[meio];
            
            // Obtém o nome do item selecionado
            const nomeSelecionado = itemSelecionado.dataset.nome;
            
            // Encontra o item escolhido na lista de itens
            const itemEscolhido = itens.find(item => item.nome === nomeSelecionado);
            
            if (itemEscolhido) {
                document.getElementById('nome-jogo').textContent = itemEscolhido.nome;
                document.getElementById('imagem-jogo').src = itemEscolhido.imagem;
                document.getElementById('imagem-jogo').style.display = 'block'; // Mostra a imagem
                document.getElementById('resultado').style.display = 'block'; // Garante que o resultado e a imagem sejam visíveis
            } else {
                console.error("Item selecionado não encontrado");
            }
    
            // Remove a animação para permitir novos cliques
            roletaContainer.style.animation = 'none';
        }, duracaoAnimacao);
    }

    adicionarItens();
});









    var menuItem = document.querySelectorAll('.item-menu');
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    var btnExp = document.querySelector('#btn-exp');
    var menuSide = document.querySelector('.menu-lateral');

    function selectLink() {
        menuItem.forEach((item) =>
            item.classList.remove('ativo')
        )
        this.classList.add('ativo')
    }

    function fecharDropdowns() {
        document.querySelectorAll('.dropdown').forEach((item) => {
            item.classList.remove('open');
        });
    }

    function toggleMenu() {
        menuSide.classList.toggle('expandir');
        if (!menuSide.classList.contains('expandir')) {
            fecharDropdowns();
        }
    }

    menuItem.forEach((item) =>
        item.addEventListener('click', selectLink)
    )

    btnExp.addEventListener('click', toggleMenu);

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentElement;

            // Fecha todos os dropdowns antes de abrir o atual
            document.querySelectorAll('.dropdown').forEach((item) => {
                if (item !== parent) {
                    item.classList.remove('open');
                }
            });

            parent.classList.toggle('open');
        });
    });

    var colorLinks = document.querySelectorAll('.dropdown-menu a.padrao, .dropdown-menu a.quente, .dropdown-menu a.fria');
    
    colorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            document.querySelector('.bolhas').classList.remove('padrão', 'quente', 'fria');
            
            var colorClass = this.className;
            document.querySelector('.bolhas').classList.add(colorClass);
        });
    });