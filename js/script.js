function pergunta1(escolha) {
    switch (escolha) {
        case 'pmf':
            $("#pmf").css('display', 'block');
            $("#resposta1").css('display', 'none');
            $("#perguntas").html("<h1>Comece com Scratch</h1>");
            $("#subtitulo").html("<h2>Depois siga com Python</h2>");
            break;
        case 'ns':
            $("#ns").css('display', 'block');
            $("#resposta1").css('display', 'none');
            $("#perguntas").html("<h1>Python</h1>");
            break;
        case 'pd':
            $("#pd").css('display', 'block');
            $("#resposta1").css('display', 'none');
            $("#perguntas").html("<h1>Tem uma ótima ideia na cabeça?</h1>");
            break;
        case 'gd':
            $("#resposta1").css('display', 'none');
            $("#gd").css('display', 'block');
            $("#perguntas").html("<h1>Pretende conseguir um emprego ou montar uma startup?</h1>");
            break;
        case 'gd_startup':
            $("#gd").css('display', 'none');
            $("#pd_sim_plataformaarea").css('display', 'block');
            $("#perguntas").html("<h1>Qual plataforma/área?</h1>");
            break;
        case 'gd_emprego':
            $("#gd").css('display', 'none');
            $("#gd_emprego_plataformaarea").css('display', 'block');
            $("#perguntas").html("<h1>Qual plataforma/área deseja conseguir emprego?</h1>");
            break;
        case 'gd_emprego_plataformaarea_grandesempresas':
            $("#gd_emprego_plataformaarea").css('display', 'none');
            $("#gd_emprego_plataformaarea_grandesempresas").css('display', 'block');
            $("#perguntas").html("<h1>Escolha a empresa e veja a linguagem que deve aprender</h1>");
            break;
        case 'gd_emprego_plataformaarea_tantofaz':
            $("#gd_emprego_plataformaarea").css('display', 'none');
            $("#gd_emprego_plataformaarea_tantofaz").css('display', 'block');
            $("#perguntas").html("<h1>Java</h1>");
            break;
        case 'pd_nsoquerocomecar':
            $("#pd").css('display', 'none');
            $("#pd_nsoquerocomecar").css('display', 'block');
            $("#perguntas").html("<h1>Prefiro aprender do jeito...</h1>");
            break;
        case 'pd_sim':
            $("#pd").css('display', 'none');
            $("#pd_sim_plataformaarea").css('display', 'block');
            $("#perguntas").html("<h1>Qual plataforma/área?</h1>");
            break;
        case 'pd_sim_plataformaarea_web':
            $("#gd_emprego_plataformaarea").css('display', 'none');
            $("#pd_sim_plataformaarea").css('display', 'none');
            $("#pd_sim_plataformaarea_web").css('display', 'block');
            $("#perguntas").html("<h1>Seu aplicativo fornecerá dados em tempo real tipo o twitter?</h1>");
            break;
        case 'pd_sim_plataformaarea_web_sim':
            $("#pd_sim_plataformaarea_web").css('display', 'none');
            $("#pd_sim_plataformaarea_web_sim").css('display', 'block');
            $("#perguntas").html("<h1>Javascript</h1>");
            break;
        case 'pd_sim_plataformaarea_web_nao':
            $("#pd_sim_plataformaarea_web").css('display', 'none');
            $("#pd_sim_plataformaarea_web_nao").css('display', 'block');
            $("#perguntas").html("<h1>PHP</h1>");
            break;
        case 'pd_sim_plataformaarea_jogos':
            $("#gd_emprego_plataformaarea").css('display', 'none');
            $("#pd_sim_plataformaarea").css('display', 'none');
            $("#pd_sim_plataformaarea_jogos").css('display', 'block');
            $("#perguntas").html("<h1>C++</h1>");
            break;
        case 'pd_sim_plataformaarea_mobile':
            $("#gd_emprego_plataformaarea").css('display', 'none');
            $("#pd_sim_plataformaarea").css('display', 'none');
            $("#pd_sim_plataformaarea_mobile").css('display', 'block');
            $("#perguntas").html("<h1>Qual sistema?</h1>");
            break;
        case 'pd_sim_plataformaarea_mobile_android':
            $("#pd_sim_plataformaarea_mobile").css('display', 'none');
            $("#pd_sim_plataformaarea_mobile_android").css('display', 'block');
            $("#perguntas").html("<h1>Java</h1>");
            break;
        case 'pd_sim_plataformaarea_mobile_ios':
            $("#pd_sim_plataformaarea_mobile").css('display', 'none');
            $("#pd_sim_plataformaarea_mobile_ios").css('display', 'block');
            $("#perguntas").html("<h1>Objective C</h1>");
            break;
        case 'pd_sim_plataformaarea_mobile_ambos':
            $("#pd_sim_plataformaarea_mobile").css('display', 'none');
            $("#pd_sim_plataformaarea_mobile_ambos").css('display', 'block');
            $("#perguntas").html("<h1>React Native ou IONIC</h1>");
            break;
        case 'pd_nsoquerocomecar_maisfacil':
            $("#pd_nsoquerocomecar").css('display', 'none');
            $("#pd_nsoquerocomecar_maisfacil").css('display', 'block');
            $("#perguntas").html("<h1>Python</h1>");
            break;
        case 'pd_nsoquerocomecar_maisdificil':
            $("#pd_nsoquerocomecar").css('display', 'none');
            $("#pd_nsoquerocomecar_maisdificil").css('display', 'block');
            $("#perguntas").html("<h1>Carro automático ou manual?</h1>");
            break;
        case 'pd_nsoquerocomecar_maisfacil_automatico':
            $("#pd_nsoquerocomecar_maisdificil").css('display', 'none');
            $("#pd_nsoquerocomecar_maisfacil_automatico").css('display', 'block');
            $("#perguntas").html("<h1>Java</h1>");
            break;
        case 'pd_nsoquerocomecar_maisdificil_manual':
            $("#pd_nsoquerocomecar_maisdificil").css('display', 'none');
            $("#pd_nsoquerocomecar_maisdificil_manual").css('display', 'block');
            $("#perguntas").html("<h1>C</h1>");
            break;
    }
}

function voltar() {

}