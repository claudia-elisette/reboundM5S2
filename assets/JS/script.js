/*Funcionalidad tabs*/

    //definir elemento padre
    const tabMenu = document.getElementById("profiles")
    
    //escuchar cambio de perfil
    tabMenu.addEventListener('click', (event)=>{
        let tabContent, tabLink

        if(event.target.className == 'tab__link'){

            //display none para ambos contenidos
            tabContent = document.getElementsByClassName('tabContent')
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = 'none'   
            }

            //quitar estilo a ambos link
            tabLink = document.getElementsByClassName('tab__link')
            for (let i = 0; i < tabLink.length; i++){
                tabLink[i].className = tabLink[i].className.replace(` active${i}`, '')
            }

            //mostrar contenido elegido con estilo en el link correspondiente
            if(event.target.id == 'regularProfile'){
                document.getElementById('regularContent').style.display = 'grid'
                event.target.className +=' active0'

            }else{
                document.getElementById('vipContent').style.display = 'grid'
                event.target.className +=' active1'
            }
        }
    })

    document.getElementById('regularProfile').click()


/*Ingreso datos formulario*/
    //declarar clases para Usuario y UsuarioVip
    class User{
        constructor(email, password){
            this.email = email
            this.password = password
            this.name = `Usuario${Math.floor(Math.random() * 1000)}`
        }

        bienvenida(){
            alert(`Bienvenido: ${this.name}
    Correo: ${this.email} 
    Contraseña: ${this.password} 
    Usuario: ${this.name}`)
        }

    }

    class VipUser extends User{
        constructor(email,password,name){
            super(email, password)
            this.name = name
        }
    }

    //encontrar y agarrar datos desde HTML

    let regularSignup = document.getElementById('regular')

    regularSignup.addEventListener('submit', (event)=>{
        event.preventDefault()
        let correo = document.getElementById('emailR').value
        let password = document.getElementById('passwordR').value

        let regularUser = new User(correo, password)
        regularUser.bienvenida() 
    })

    let vipSignup = document.getElementById('vip')

    vipSignup.addEventListener('submit', (event)=>{

        event.preventDefault()
        let correo = document.getElementById('emailV').value
        let password = document.getElementById('passwordV').value
        let name = document.getElementById('nameV').value

        let vipUser = new VipUser(correo, password, name)
        vipUser.bienvenida()  
    })
