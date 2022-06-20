const alunos = [
    {
        nome: 'João',
        nota: 5,
        tumra: '18',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18',
    },
    {
        nome:'Paulo',
        nota: 6, 
        turma: '28'
    },
    {
        nome:'Miguel',
        nota: 3, 
        turma: '28'
    }
]    
    
    
    function alunosAprovados(alunos, media) {
    let aprovados = [];

    for(let i = 0;  i < alunos.length; i++) {
        let { nota, nome} = alunos[i];

        if (nota >= media) { 
            aprovados.push(nome);
        }
         
   
        
    } 
    return aprovados;
    }

   


console.log(alunosAprovados(alunos, 9))