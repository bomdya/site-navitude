
                // abrir modal Zero
                let imgZero = document.querySelector(".container-personagens .personagens #imgZero");
                let overlayModal = document.querySelector (".container-personagens .overlay-modal-zero");
                imgZero.addEventListener("click", function(){
                    overlayModal.classList.add("active");
                })
                //Abrir modal Zara
                let imgZara = document.querySelector(".container-personagens .personagens #imgZara");
                let overlayModalZ = document.querySelector (".container-personagens .overlay-modal-zara");
                imgZara.addEventListener("click", function(){
                    overlayModalZ.classList.add("active");
                })
               
                //Abrir modal Sero
                let imgSero = document.querySelector(".container-personagens .personagens #imgSero");
                let overlayModalS = document.querySelector (".container-personagens .overlay-modal-sero");
                imgSero.addEventListener("click", function(){
                    overlayModalS.classList.add("active");
                })
                
                //Abrir modal Margo
                let imgMargo = document.querySelector(".container-personagens .personagens #imgMargo");
                let overlayModalM = document.querySelector (".container-personagens .overlay-modal-margo");
                imgMargo.addEventListener("click", function(){
                    overlayModalM.classList.add("active");
                })
                
                //Abrir modal Aquiles
                let imgAquiles = document.querySelector(".container-personagens .personagens #imgAquiles");
                let overlayModalA = document.querySelector (".container-personagens .overlay-modal-aquiles");
                imgAquiles.addEventListener("click", function(){
                    overlayModalA.classList.add("active");
                })
               






                // fechar modal com o X Zero
                let buttonClose = document.querySelector(".modal-container .modal-close");
                imgZero.addEventListener("click", function(){
                    overlayModal.classList.add("active");
                })
                buttonClose.addEventListener("click", function(){
                    overlayModal.classList.remove("active")
                })

                 // fechar modal com o X Zara
                let buttonCloseZara = document.querySelector(".modal-container .modal-close1");
                imgZara.addEventListener("click", function(){
                    overlayModalZ.classList.add("active");
                })
                buttonCloseZara.addEventListener("click", function(){
                    overlayModalZ.classList.remove("active")
                })

                 // fechar modal com o X Sero
                 let buttonCloseSero = document.querySelector(".modal-container .modal-close2");
                imgSero.addEventListener("click", function(){
                    overlayModalS.classList.add("active");
                })
                buttonCloseSero.addEventListener("click", function(){
                    overlayModalS.classList.remove("active")
                })

                 // fechar modal com o X Margo
                 let buttonCloseMargo = document.querySelector(".modal-container .modal-close3");
                imgMargo.addEventListener("click", function(){
                    overlayModalM.classList.add("active");
                })
                buttonCloseMargo.addEventListener("click", function(){
                    overlayModalM.classList.remove("active")
                })

                 // fechar modal com o X Aquiles
                 let buttonCloseAquiles = document.querySelector(".modal-container .modal-close4");
                imgAquiles.addEventListener("click", function(){
                    overlayModalA.classList.add("active");
                })
                buttonCloseAquiles.addEventListener("click", function(){
                    overlayModalA.classList.remove("active")
                })

                


                // fechar clicando fora 
                window.addEventListener("click", function (event){
                    if(event.target == overlayModal){
                        overlayModal.classList.remove("active");
                    }
                    if(event.target == overlayModalZ){
                    overlayModalZ.classList.remove("active");
                 }
                    if(event.target == overlayModalS){
                    overlayModalS.classList.remove("active");
                 }
                    if(event.target == overlayModalM){
                        overlayModalM.classList.remove("active");
                    }
                    if(event.target == overlayModalA){
                        overlayModalA.classList.remove("active");
                    }
                });
                

                //menu retratil 
                
                let button = document.querySelector(".navegador .cabecalho-navegador button");
                let menu_retratil = document.querySelector(".navegador .menu-retratil");
     
                 button.addEventListener("click", function(){
                     menu_retratil.classList.toggle("active");
                 });

              

                 // carrossel
                                
                    let seta_esquerda = document.querySelector(".slideshow .voltar");
                    let seta_direita = document.querySelector(".slideshow .avancar");

                    let imagens_slide = document.querySelectorAll (".slideshow img");

                    let imagem_ativa = 0;
                    
                    seta_direita.addEventListener("click", function(){
                        imagens_slide [imagem_ativa].classList.remove("active");
                        imagem_ativa = imagem_ativa + 1;   
                        if(imagem_ativa >= imagens_slide.length){
                            imagem_ativa = 0;
                        }
                        imagens_slide[imagem_ativa].classList.add("active"); 
                    });

                    seta_esquerda.addEventListener("click", function(){
                        imagens_slide[imagem_ativa].classList.remove("active");
                        imagem_ativa = imagem_ativa - 1;
                        console.log(imagem_ativa);
                        
                        if(imagem_ativa < 0){
                            imagem_ativa = imagens_slide.length -1;
                        }
                        imagens_slide[imagem_ativa].classList.add("active"); 

                    });
    
     