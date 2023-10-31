        let vcorfundo, vcortexto, vnome;

        function defineCor(op, cor){
            if(op==1){
                document.body.style.backgroundColor=cor;
                vcorfundo=cor;
            }else{
                document.body.style.color=cor;
                vcortexto=cor;
            }
        }
        function gravar(){
            var form=document.getElementById("fconf");
            vnome=document.getElementById("fnome").value;
            localStorage.setItem(vnome + "_corfundo",vcorfundo);
            localStorage.setItem(vnome + "_cortexto",vcortexto);
            localStorage.setItem(vnome + "_nome",vnome);
            form.style.display="none";
        }
        function mostrarOpções(){
            let form=document.getElementById("fconf");
            form.style.display="block";
        }
        function carregarPreferencias(){
            vnome=document.getElementById("inputNome").value;
            if (localStorage.getItem(vnome + "_nome")){
                vcorfundo = localStorage.getItem(vnome + "_corfundo");
                vcortexto = localStorage.getItem(vnome + "_cortexto");
                
                defineCor(1,vcorfundo);
                defineCor(2,vcortexto);
                
                document.getElementById("painel").innerHTML = "Bem vindo " + vnome + "<hr>";
                document.getElementById("nomeDialog").style.display="none"
            } else {
                alert("Perfil não encontrado");
            }
        }

       // window.addEventListener("load", inicia)
