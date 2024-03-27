# Setup inicial de um repositório do Github no VS Code local: 

1. Limpar credenciais do sistema (windows);
2. Limpar os dados do navegador; 
3. Abrir o repositório no GitHub;
4. Copiar a URL do repositório (HTTPS);
5. Abrir o VS Code; 
6. Se houver algum projeto aberto no VS Code, fechar a pasta (CTRL + K F);
7. Se houver algum usuário logado no VS Code, clique em "sair";
8. Verificar se existem variáveis `user.name` e `user.email` globais:
~~~bash
git config --global user.name 
git config --global user.email
~~~
9. Se as variáveis retornarem algum valor, redefina ambas: 
~~~bash
git config --global --unset user.name 
git config --global --unset user.email
~~~
10. Faça a clonagem do repositório no computador local: 
~~~bash
git clone https://github.com/usuario/nomedorepositório.git
~~~
11. Abra o projeto clonado no VS Code:
~~~bash
code -r nomedorepositoriolocal 
~~~
12. Faça login no VS Code local para sincronizar suas extensões e temas;
13. Ative o salvamento automático _(Auto Save)_
14. Para clonar um repositório e abrir automáticamente a pasta, se usa: 
~~~bash
git clone https://github.com/usuario/nomedorepoitório.git | code -r nomedorepositório 
~~~

