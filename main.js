const carta = [
	{ nom: 'cheddar', ingredientes: 'Pan con queso, cheddarx3, medallon,salsa especial',precio:'$7500' },
	{ nom: 'bacon', ingredientes: 'Pan con queso, cheddar, medallon,bacon,cebolla caramelizada,salsa especial', precio:'$8500' },
	{ nom: 'clasica', ingredientes: 'Pan con sesamo, muzarella, medallon,lechuga y tomate, mayo de ajo', precio:'$7500' },
    { nom: 'napo', ingredientes: 'Pan con sesamo, muzarella, medallon,tomate,jamon cocido, mayo de ajo', precio:'$8000' },
    { nom: 'big', ingredientes: 'Pan con sesamo, cheddar, medallon,pepinillos,lechuga, salsa especial', precio:'$9000' },
    { nom: 'spicy', ingredientes: 'Pan con queso, cheddar, medallon, bacon,jalapeños,aji molido,huevo frito', precio:'$9000'},
]   


function mostrarCarta(){
    for (let i=0;i<carta.length;i++){
        alert("Las variedades son: " + carta[i].nom + ": " + carta[i].ingredientes + carta[i].precio) 
    }
}

function agregarHamburguesa(){
    let nomPrompt = prompt('Ingrese el nombre de la hamburguesa')
    let ingredientesPrompt = prompt('Ingrese los ingredientes')
    let precioPrompt = prompt("Ingrese el precio de la hamburguesa")

        if(
            nomPrompt == null ||
            ingredientesPrompt == null ||
            precioPrompt == null ||
            nomPrompt == '' ||
            precioPrompt == '' ||
            ingredientesPrompt == ''

        ) {
            
        alert('Por favor ingrese todos los datos')
    } else {
        const nuevaHamburguesa = {
            nom: nomPrompt,
            ingredientes: ingredientesPrompt,
            precio: precioPrompt,
        }
        carta.push(nuevaHamburguesa)
        alert("Hamburguesa agregada con exito")
    }
}


function menu() {
	let band = true

	while (band) {
		let op = Number(
			prompt('¿Que quiere hacer?\n 1- Ver carta\n 2- Armar hamburguesa personalizada\n 3-Salir ')
		)
		switch (op) {
			case 1:
				mostrarCarta()
				break
			case 2:
                agregarHamburguesa()
				break
            case 3:
                band = !confirm('¿Desea salir?')
                break
			default:
				alert('Opcion inválida')
				break

		}

		
	}
}

menu()