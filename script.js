// --- 1. BASE DE DATOS DEL MENÚ ---
const menuData = [
    // Pizzas Clásicas
    { id: 1, categoria: "Pizzas", nombre: "Margarita", desc: "La esencia de la pizza en su forma más pura y clásica. <br> Salsa de tomate casera, queso mozzarella, albahaca fresca y un toque de queso parmesano.", precio: 190, disponible: true },
    { id: 2, categoria: "Pizzas", nombre: "Don Pepe", desc: "Para los que siempre quieren más peperoni.<br> Salsa de tomate casera, queso mozzarella, queso parmesano y mucho, mucho peperoni.", precio: 220, disponible: true },
    { id: 3, categoria: "Pizzas", nombre: "Porvenir", desc: "Diferente y única pero increíblemente deliciosa.<br> Salsa de tomate casera, queso mozzarella, mezcla de semillas (almendra, girasol y calabaza), ajo, perejil y un toque de arándanos. Elige entre tocino o champiñones.", precio: 210, disponible: true, eleccionGratis: ["Tocino", "Champiñón"] },
    { id: 4, categoria: "Pizzas", nombre: "Vegetaliana", desc: "La armonía perfecta de colores y sabores. <br> Salsa de tomate casera, queso mozzarella, queso provolone y queso parmesano, acompañados de champiñones, aceitunas negras, pimiento morrón, cebolla morada y albahaca fresca.", precio: 210, disponible: true },
    { id: 5, categoria: "Pizzas", nombre: "4 Quesos", desc: "Porque un queso nunca es suficiente.<br> Salsa de tomate casera y una mezcla fundente de mozzarella, provolone, parmesano y queso azul.", precio: 220, disponible: true },
    { id: 6, categoria: "Pizzas", nombre: "Tropical", desc: "Dulce y salado en perfecta armonía. Nuestra versión de la hawaiiana.<br> Salsa de tomate casera, queso mozzarella, piña asada con canela, tocino ahumado y un aderezo mezclado de mango, piña y un toque sutil de habanero.", precio: 220, disponible: true },
    { id: 7, categoria: "Pizzas", nombre: "Pesto", desc: "Sabor mediterráneo en su máxima expresión. Un giro fresco y aromático.<br> Base de pesto de albahaca casero, queso mozzarella y queso de cabra. Elige entre jamón serrano o champiñones.", precio: 240, disponible: true, eleccionGratis: ["Jamón serrano", "Champiñones"] },
    { id: 8, categoria: "Pizzas", nombre: "Poderosa", desc: "Todo el sabor que una pizza puede tener.<br> Salsa de tomate casera, queso mozzarella, queso provolone y queso parmesano, con carne molida especiada, salchicha de res, peperoni, pimiento morrón, cebolla morada y aceitunas negras.", precio: 240, disponible: true },
    { id: 9, categoria: "Pizzas", nombre: "Perona", desc: "Un equilibrio entre lo intenso, lo dulce y lo salado.<br> Salsa de tomate casera, queso mozzarella, pera caramelizada con piloncillo, queso azul, tocino ahumado y nuez pecana.", precio: 235, disponible: true },
    
    // Pizzas Especiales
    { id: 10, categoria: "Pizzas Especiales", nombre: "Barbacoa de Picaña", desc: "Deliciosa barbacoa de picaña, cebolla y cilantro fresco.", precio: 320, disponible: true, especial: true, salsaVerde: true },
    { id: 11, categoria: "Pizzas Especiales", nombre: "Burrata", desc: "Auténtico queso burrata y jamón serrano.", precio: 250, disponible: true, especial: true, permiteMitad: false },
    { id: 12, categoria: "Pizzas Especiales", nombre: "Bianca", desc: "Especialidad con tocino.", precio: 250, disponible: true, especial: true },
    { id: 13, categoria: "Pizzas Especiales", nombre: "Doña Chofis", desc: "Base blanca de garbanzo, Queso provolone, Corazones de alcachofa, Espinacas, Chorizo argentino o champiñones.", precio: 250, disponible: true, especial: true, eleccionGratis: ["Chorizo argentino", "Champiñones"] },
    { id: 14, categoria: "Pizzas Especiales", nombre: "Higo y Panceta", desc: "Base blanca de aceite de oliva, , queso mozzarella, panceta con cebolla caramelizada al vino tinto, queso de cabra, nuez, albahaca fresca ", precio: 250, disponible: true, especial: true},
    { id: 15, categoria: "Pizzas Especiales", nombre: "Huitlacoche", desc: "Huitlacoche", precio: 250, disponible: false, especial: true},

    // Especialidades
    { id: 16, categoria: "Hot Dog y Calzones", nombre: "Hot Dog con Madre", desc: "Nuestro Hot Dog es una experiencia única.<br> Horneado en una base de masa madre con una salchicha de res, carne molida sazonada con especias, queso mozarella y cebolla asada, con opción de tocino, champiñones, migas de chicharrón o un poco de los 3. Tamaño 22 cm. aprox.", precio: 140, disponible: true, eleccionGratis: ["Tocino", "Champiñones", "Migas de chicharron", "Mixto"] },
    { id: 17, categoria: "Hot Dog y Calzones", nombre: "Calzone Veggie", desc: "Frescura horneada al vapor.<br> Salsa de tomate casera, queso mozzarella y provolone, champiñones, pimiento morrón, cebolla morada, aceitunas negras, espinaca, albahaca fresca y parmesano.", precio: 225, disponible: true },
    { id: 18, categoria: "Hot Dog y Calzones", nombre: "Calzone Hot Honey", desc: "Sabor irresistible con un toque muy hot.<br> Salsa de tomate casera, queso mozzarella, peperoni, queso parmesano y miel de piloncillo con chile piquín seco.", precio: 225, disponible: true },
 
    // Postres
    { id: 31, categoria: "Postres", nombre: "Galletitas de Masa Madre", desc: "Deliciosas galletas horneadas con chocolate y nuez de Castilla.", precio: 45, disponible: true },
    { id: 32, categoria: "Postres", nombre: "Cheesecake de Lotus", desc: "Cremoso cheesecake con base y cobertura de galleta Lotus.", precio: 85, disponible: true },
    { id: 33, categoria: "Postres", nombre: "Budín de Blueberries", desc: "Suave budín con frescos blueberries.", precio: 60, disponible: true },
    { id: 34, categoria: "Postres", nombre: "Pastel de Zanahoria", desc: "Clásico pastel de zanahoria con especias y cubierta dulce.", precio: 75, disponible: true },
    { id: 35, categoria: "Postres", nombre: "Mostachón", desc: "Tradicional base crujiente con crema y fruta fresca.", precio: 80, disponible: true },

    // Bebidas Frías
    { id: 19, categoria: "Bebidas Frías", nombre: "Agua de jamaica con romero 350ml", desc: "", precio: 32, disponible: true },
    { id: 20, categoria: "Bebidas Frías", nombre: "Agua de frutas tropicales 350ml", desc: "", precio: 32, disponible: true },
    { id: 21, categoria: "Bebidas Frías", nombre: "Agua mineral de Lourdes 355ml", desc: "", precio: 26, disponible: true },
    { id: 22, categoria: "Bebidas Frías", nombre: "Agua de jamaica c/agua mineral 355ml", desc: "", precio: 48, disponible: true },
    { id: 23, categoria: "Bebidas Frías", nombre: "Agua de jamaica o frutas 1 Litro", desc: "", precio: 75, disponible: true },

    // Bebidas Calientes
    { id: 24, categoria: "Bebidas Calientes", nombre: "Espresso 45ml", desc: "Con café", precio: 45, disponible: true },
    { id: 25, categoria: "Bebidas Calientes", nombre: "Americano 255ml", desc: "Con café", precio: 50, disponible: true },
    { id: 26, categoria: "Bebidas Calientes", nombre: "Cappuccino 195ml", desc: "Con café", precio: 55, disponible: true, personalizable: 'leche' },
    { id: 27, categoria: "Bebidas Calientes", nombre: "Café oaxaqueño 265ml", desc: "Espresso + leche + chocolate oaxaqueño", precio: 68, disponible: true, personalizable: 'base-agua-leche' },
    { id: 28, categoria: "Bebidas Calientes", nombre: "Chocolate semiamargo 280ml", desc: "Leche o agua + chocolate oaxaqueño", precio: 65, disponible: true, personalizable: 'base-agua-leche' },
    { id: 29, categoria: "Bebidas Calientes", nombre: "Tisanas 280ml", desc: "Pregunta por disponibilidad", precio: 40, disponible: true },
    { id: 30, categoria: "Bebidas Calientes", nombre: "Infusiones de té (sobre) 280ml", desc: "", precio: 25, disponible: true }
];

// --- 2. CONFIGURACIÓN DE EXTRAS PIZZAS ---
const CONFIG_EXTRAS = [
    {
        nombreGrupo: "Ingredientes $10 c/u",
        items: ["Pimiento", "Cebolla morada", "Aceituna negra", "Espinaca", "Albahaca Fresca"],
        precioCompleto: 10,
        precioMitad: 5
    },
    {
        nombreGrupo: "Ingredientes $20 c/u",
        items: ["Mezcla de semillas", "Piña asada c/canela", "Salchicha de res", "Queso parmesano"],
        precioCompleto: 20,
        precioMitad: 10
    },
    {
        nombreGrupo: "Ingredientes $25 c/u",
        items: ["Champiñón", "Carne molida c/especias", "Jamón serrano", "Pesto", "Provolone", "Queso mozarella", "Queso Azul", "Queso de cabra", "Tocino", "Peperoni"],
        precioCompleto: 25,
        precioMitad: 12.5
    }
];

let carrito = [];
let productoEnEdicion = null;

// --- 3. RENDERIZAR MENÚ ---
function renderizarMenu() {
    const contenedor = document.getElementById('menu-contenedor');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    
    const ordenCategorias = ["Pizzas", "Pizzas Especiales", "Hot Dog y Calzones", "Postres", "Bebidas Frías", "Bebidas Calientes"];
    
    ordenCategorias.forEach(categoria => {
        const productos = menuData.filter(item => item.categoria === categoria && item.disponible);
        if (productos.length > 0) {
            const titulo = document.createElement('h2');
            titulo.className = 'categoria-titulo';
            titulo.textContent = categoria;
            titulo.id = 'cat-' + categoria.replace(/\s+/g, '-'); 
            contenedor.appendChild(titulo);

            productos.forEach(producto => {
                const card = document.createElement('div');
                card.className = 'producto-card';
                card.innerHTML = `
                    <div class="producto-info">
                        <h4>${producto.nombre}</h4>
                        <p>${producto.desc}</p>
                        <div class="producto-precio">$${producto.precio} MXN</div>
                    </div>
                    <button class="btn-agregar" onclick="abrirModal(${producto.id})">Agregar</button>
                `;
                contenedor.appendChild(card);
            });
        }
    });
}

// --- 4. LÓGICA DEL MODAL ---
function abrirModal(id) {
    const producto = menuData.find(p => p.id === id);
    productoEnEdicion = producto;
    
    document.getElementById('modal-titulo').textContent = producto.nombre;
    document.getElementById('modal-desc').innerHTML = producto.desc; 
    document.getElementById('notas-modal').value = "";
    document.getElementById('check-mitad').checked = false;
    document.getElementById('selector-mitad').style.display = 'none';
    
    // LIMPIEZA CLAVE
    document.getElementById('contenedor-extras').innerHTML = ''; 
    document.querySelectorAll('.check-aderezo').forEach(cb => cb.checked = false); 

    const opcionesPizza = document.getElementById('opciones-pizza');
    const opcionesHotdog = document.getElementById('opciones-hotdog');
    const opcionesBebida = document.getElementById('opciones-bebida');
    
    // Ocultamos todas las secciones específicas
    opcionesPizza.style.display = 'none';
    opcionesHotdog.style.display = 'none';
    opcionesBebida.style.display = 'none';
    
    // Ocultamos y reseteamos campos de bebidas y extras específicos
    document.getElementById('opcion-tipo-leche').style.display = 'none';
    document.getElementById('opcion-base-bebida').style.display = 'none';
    document.getElementById('sub-opcion-leche').style.display = 'none';
    document.getElementById('select-tipo-leche').value = 'Entera';
    document.getElementById('select-base-bebida').value = 'Agua';
    document.getElementById('select-sub-tipo-leche').value = 'Entera';
    document.getElementById('opcion-salsa-verde').style.display = 'none';

    const esPizza = producto.categoria === "Pizzas" || producto.categoria === "Pizzas Especiales";

    // Determinar qué mostrar según el producto
    if (esPizza) {
        opcionesPizza.style.display = 'block';
        
        // Lógica Mitad y Mitad
        if (producto.permiteMitad !== false) {
            document.getElementById('seccion-mitad-pizza').style.display = 'block';
            llenarSelectorMitad(id);
        } else {
            document.getElementById('seccion-mitad-pizza').style.display = 'none';
        }

        // Lógica Ingredientes Extras (Solo clásicas)
        if (producto.especial) {
            document.getElementById('seccion-extras-pizza').style.display = 'none';
        } else {
            document.getElementById('seccion-extras-pizza').style.display = 'block';
            generarInterfazExtras();
        }

        // Lógica Salsita Verde
        if (producto.salsaVerde) {
            document.getElementById('opcion-salsa-verde').style.display = 'block';
            document.getElementById('check-salsa-verde').checked = false;
        }
        
    } else if (producto.nombre.includes("Hot Dog")) {
        opcionesHotdog.style.display = 'block';
    } else if (producto.personalizable) {
        opcionesBebida.style.display = 'block';
        
        if (producto.personalizable === 'leche') {
            document.getElementById('opcion-tipo-leche').style.display = 'block';
        } else if (producto.personalizable === 'base-agua-leche') {
            document.getElementById('opcion-base-bebida').style.display = 'block';
            toggleTipoLecheBebida(); 
        }
    }

    // Mostrar opciones de elección gratis si la pizza lo requiere
    const divEleccion = document.getElementById('opciones-eleccion');
    const selectorEleccion = document.getElementById('selector-eleccion');
    
    if (producto.eleccionGratis) {
        divEleccion.style.display = 'block';
        selectorEleccion.innerHTML = ''; 
        producto.eleccionGratis.forEach(opcion => {
            selectorEleccion.innerHTML += `<option value="${opcion}">${opcion}</option>`;
        });
    } else {
        divEleccion.style.display = 'none';
    } 
    document.getElementById('modal-personalizar').style.display = 'flex';
}

function toggleTipoLecheBebida() {
    const base = document.getElementById('select-base-bebida').value;
    const subOpcion = document.getElementById('sub-opcion-leche');
    if (base === 'Leche') {
        subOpcion.style.display = 'block';
    } else {
        subOpcion.style.display = 'none';
    }
}

function generarInterfazExtras() {
    const contenedor = document.getElementById('contenedor-extras');
    contenedor.innerHTML = '';

    CONFIG_EXTRAS.forEach(grupo => {
        const labelGrupo = document.createElement('p');
        labelGrupo.style = "font-weight: bold; font-size: 0.8em; color: #888; margin-top: 15px; margin-bottom: 5px; text-transform: uppercase;";
        labelGrupo.textContent = grupo.nombreGrupo;
        contenedor.appendChild(labelGrupo);

        grupo.items.forEach(extra => {
            const div = document.createElement('div');
            div.className = 'fila-extra';
            div.innerHTML = `
                <span>${extra}</span>
                <select class="selector-extra" 
                        data-ingrediente="${extra}" 
                        data-precio-completo="${grupo.precioCompleto}" 
                        data-precio-mitad="${grupo.precioMitad}">
                    <option value="no">No agregar</option>
                    <option value="toda">Toda la pizza (+$${grupo.precioCompleto})</option>
                    <option value="m1" class="label-m1">Solo en una mitad (+$${grupo.precioMitad})</option>
                    <option value="m2" class="label-m2" style="display:none;"></option>
                </select>
            `;
            contenedor.appendChild(div);
        });
    });
}

function llenarSelectorMitad(idActual) {
    const select = document.getElementById('segunda-pizza-select');
    select.innerHTML = '';
    // Filtramos para que se pueda combinar con Clásicas o Especiales (que permitan mitad)
    const otrasPizzas = menuData.filter(p => 
        (p.categoria === "Pizzas" || p.categoria === "Pizzas Especiales") && 
        p.id !== idActual && 
        p.permiteMitad !== false
    );
    otrasPizzas.forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.nombre} ($${p.precio})</option>`;
    });
}

function toggleMitad() {
    const isChecked = document.getElementById('check-mitad').checked;
    document.getElementById('selector-mitad').style.display = isChecked ? 'block' : 'none';
    actualizarNombresMitades();
}

function actualizarNombresMitades() {
    const isMitad = document.getElementById('check-mitad').checked;
    const selectSegunda = document.getElementById('segunda-pizza-select');
    
    if (isMitad) {
        const nombreM1 = productoEnEdicion.nombre;
        const nombreM2 = selectSegunda.options[selectSegunda.selectedIndex]?.text.split(' (')[0] || "Otra Mitad";

        // Solo actualizar labels de extras si existen (pizzas clásicas)
        if (!productoEnEdicion.especial) {
            document.querySelectorAll('.selector-extra').forEach(select => {
                select.querySelector('.label-m1').textContent = `Solo en ${nombreM1} (+$${select.dataset.precioMitad})`;
                const optM2 = select.querySelector('.label-m2');
                optM2.style.display = 'block';
                optM2.textContent = `Solo en ${nombreM2} (+$${select.dataset.precioMitad})`;
            });
        }
    } else {
        if (!productoEnEdicion.especial) {
            document.querySelectorAll('.selector-extra').forEach(select => {
                select.querySelector('.label-m1').textContent = `Solo en una mitad (+$${select.dataset.precioMitad})`;
                const optM2 = select.querySelector('.label-m2');
                optM2.style.display = 'none'; 
                if (select.value === 'm2') select.value = 'no';
            });
        }
    }
}

function cerrarModal() {
    document.getElementById('modal-personalizar').style.display = 'none';
    productoEnEdicion = null;
}

function confirmarAgregar() {
    let nombreFinal = productoEnEdicion.nombre;
    let precioFinal = productoEnEdicion.precio;
    let resumenExtras = [];
    let textoMitad1 = "una mitad";
    let textoMitad2 = "";

    const isMitad = document.getElementById('check-mitad') && document.getElementById('check-mitad').checked;
    const esPizza = productoEnEdicion.categoria === "Pizzas" || productoEnEdicion.categoria === "Pizzas Especiales";

    // LÓGICA PIZZAS MITAD Y MITAD
    if (esPizza && isMitad) {
        const idSegunda = parseInt(document.getElementById('segunda-pizza-select').value);
        const segunda = menuData.find(p => p.id === idSegunda);
        precioFinal = Math.max(productoEnEdicion.precio, segunda.precio);
        
        textoMitad1 = productoEnEdicion.nombre;
        textoMitad2 = segunda.nombre;
        nombreFinal = `Mitad ${textoMitad1} / Mitad ${textoMitad2}`;
    }

    // LÓGICA PIZZAS EXTRAS Y OPCIONES
    if (esPizza) {
        // Solo sumamos ingredientes extra si NO es pizza especial
        if (!productoEnEdicion.especial) {
            document.querySelectorAll('.selector-extra').forEach(select => {
                const opcion = select.value;
                const ingrediente = select.getAttribute('data-ingrediente');
                const pCompleto = parseFloat(select.getAttribute('data-precio-completo'));
                const pMitad = parseFloat(select.getAttribute('data-precio-mitad'));

                if (opcion === 'toda') {
                    precioFinal += pCompleto;
                    resumenExtras.push(`${ingrediente} (Toda)`);
                } else if (opcion === 'm1') {
                    precioFinal += pMitad;
                    resumenExtras.push(`${ingrediente} (Mitad ${isMitad ? textoMitad1 : 'pizza'})`);
                } else if (opcion === 'm2') {
                    precioFinal += pMitad;
                    resumenExtras.push(`${ingrediente} (Mitad ${textoMitad2})`);
                }
            });
        }

        // Elección Gratis (Aplica tanto a clásicas como especiales si la tienen)
        if (productoEnEdicion.eleccionGratis) {
            const eleccion = document.getElementById('selector-eleccion').value;
            resumenExtras.push(`Lleva: ${eleccion}`);
        }

        // Salsita Verde para Barbacoa
        if (productoEnEdicion.salsaVerde && document.getElementById('check-salsa-verde').checked) {
            resumenExtras.push(`Salsita verde (Aparte)`);
        }
    }

    // LÓGICA HOT DOG
    if (productoEnEdicion.nombre.includes("Hot Dog")) {
        let aderezosSeleccionados = [];
        document.querySelectorAll('.check-aderezo:checked').forEach(checkbox => {
            aderezosSeleccionados.push(checkbox.value);
        });
        
        if (aderezosSeleccionados.length > 0) {
            resumenExtras.push(`Aderezos: ${aderezosSeleccionados.join(", ")}`);
        }
    }

    // LÓGICA BEBIDAS
    if (productoEnEdicion.personalizable) {
        if (productoEnEdicion.personalizable === 'leche') {
            const selectLeche = document.getElementById('select-tipo-leche');
            const tipoLeche = selectLeche.value;
            const precioExtra = parseFloat(selectLeche.options[selectLeche.selectedIndex].getAttribute('data-precio'));
            
            precioFinal += precioExtra;
            resumenExtras.push(`Leche: ${tipoLeche}`);
            
        } else if (productoEnEdicion.personalizable === 'base-agua-leche') {
            const base = document.getElementById('select-base-bebida').value;
            if (base === 'Agua') {
                resumenExtras.push(`Base: Agua`);
            } else {
                const selectSubLeche = document.getElementById('select-sub-tipo-leche');
                const tipoLeche = selectSubLeche.value;
                const precioExtra = parseFloat(selectSubLeche.options[selectSubLeche.selectedIndex].getAttribute('data-precio'));
                
                precioFinal += precioExtra;
                resumenExtras.push(`Base: Leche (${tipoLeche})`);
            }
        }
    }

    // NOTAS
    const notas = document.getElementById('notas-modal').value.trim();
    if (notas) resumenExtras.push(`Nota: ${notas}`);

    carrito.push({
        nombre: nombreFinal,
        precio: precioFinal,
        comentario: resumenExtras.join(", ")
    });

    actualizarCarrito();
    cerrarModal();
}

// --- 5. ACTUALIZAR CARRITO Y FORMULARIO ---
function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalPrecio = document.getElementById('total-precio');
    lista.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
        lista.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        carrito.forEach((item, index) => {
            total += item.precio;
            lista.innerHTML += `
                <div class="item-carrito">
                    <div class="item-carrito-top">
                        <span><strong>${item.nombre}</strong></span>
                        <div>
                            <span>$${item.precio}</span>
                            <button class="btn-eliminar" onclick="eliminarDelCarrito(${index})">X</button>
                        </div>
                    </div>
                    ${item.comentario ? `<span class="nota-carrito">${item.comentario}</span>` : ''}
                </div>
            `;
        });
    }
    totalPrecio.textContent = total.toFixed(2);
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// LÓGICA CONDICIONAL DE FORMULARIO
function verificarCamposCondicionales() {
    const tipoEntrega = document.getElementById('tipo-entrega').value;
    const metodoPago = document.getElementById('metodo-pago').value;
    
    const isDomicilio = tipoEntrega === 'A domicilio';
    const isEfectivo = metodoPago === 'Efectivo';
    const isMercadoPago = metodoPago === 'Tarjeta (Mercado Pago / Link)';
    
    // Mostrar/Ocultar campos de Domicilio
    document.getElementById('campos-domicilio').style.display = isDomicilio ? 'flex' : 'none';
    document.getElementById('aviso-domicilio').style.display = isDomicilio ? 'block' : 'none';
    
    // Mostrar/Ocultar campo de Cambio (SOLO si es a Domicilio y en Efectivo)
    document.getElementById('campo-cambio').style.display = (isDomicilio && isEfectivo) ? 'flex' : 'none';

    // Mostrar/Ocultar aviso de Mercado Pago
    document.getElementById('aviso-mercadopago').style.display = isMercadoPago ? 'block' : 'none';
}

function toggleHorarioEspecifico() {
    const selectorHorario = document.getElementById('horario-entrega').value;
    const campoHoraEspecifica = document.getElementById('campo-horario-especifico');
    
    if (selectorHorario === 'Programar horario') {
        campoHoraEspecifica.style.display = 'flex';
    } else {
        campoHoraEspecifica.style.display = 'none';
    }
}

// Event Listeners para detectar cambios en el formulario
document.getElementById('tipo-entrega').addEventListener('change', verificarCamposCondicionales);
document.getElementById('metodo-pago').addEventListener('change', verificarCamposCondicionales);

// LINK DE MERCADO PAGO FIJO
const LINK_MERCADO_PAGO = "https://mpago.la/tu-link-aqui";

function enviarWhatsApp() {
    if (carrito.length === 0) { alert("Agrega productos a tu carrito primero."); return; }
    
    const nombre = document.getElementById('nombre').value;
    const tipoEntrega = document.getElementById('tipo-entrega').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const metodoPago = document.getElementById('metodo-pago').value;
    const cambio = document.getElementById('cambio').value;
    const quiereSalsaMacha = document.getElementById('check-salsa-macha').checked;
    
    // Obtener datos de horario
    const opcionHorario = document.getElementById('horario-entrega').value;
    let horaEspecifica = "";
    if (opcionHorario === 'Programar horario') {
        horaEspecifica = document.getElementById('hora-especifica').value;
    }

    // VALIDACIONES
    if (!nombre) { alert("Por favor ingresa tu nombre."); return; }
    
    if (opcionHorario === 'Programar horario' && !horaEspecifica) {
        alert("Por favor selecciona la hora a la que deseas tu pedido.");
        return;
    }
    
    if (tipoEntrega === 'A domicilio') {
        if (!telefono || !direccion) {
            alert("Para envío a domicilio es necesario ingresar tu teléfono y dirección.");
            return;
        }
    }

    // ARMADO DEL MENSAJE
    let mensaje = `¡Hola Ionics Pizza! 🍕 Soy ${nombre}. Mi pedido:\n\n`;
    carrito.forEach(item => {
        mensaje += `- ${item.nombre} ($${item.precio})\n  ${item.comentario ? `[${item.comentario}]` : ''}\n`;
    });

    const total = carrito.reduce((s, i) => s + i.precio, 0);
    mensaje += `\n*Total pedido:* $${total.toFixed(2)} MXN`;
    
    if (quiereSalsaMacha) {
        mensaje += `\n*🌶️ Extras:* SÍ quiero Salsita Macha`;
    }

    // Agregar horario al mensaje
    if (opcionHorario === 'Lo más pronto posible') {
        mensaje += `\n*Horario:* Lo más pronto posible`;
    } else {
        mensaje += `\n*Horario:* Programado para las ${horaEspecifica}`;
    }

    mensaje += `\n*Servicio:* ${tipoEntrega}`;
    
    if (tipoEntrega === 'A domicilio') {
        mensaje += `\n*Teléfono:* ${telefono}`;
        mensaje += `\n*Dirección:* ${direccion}`;
        mensaje += `\n*Envío:* +$40 MXN (Efectivo al repartidor)`;
    }

    mensaje += `\n*Pago:* ${metodoPago}`;

    if (tipoEntrega === 'A domicilio' && metodoPago === 'Efectivo' && cambio) {
        mensaje += `\n*Llevar cambio de:* $${cambio}`;
    } else if (metodoPago === 'Tarjeta (Mercado Pago / Link)') {
        mensaje += `\n*Aviso:* Acepto que se agregue la comisión de 3.49% + $4 MXN al total de mi cobro.`;
        mensaje += `\n\n_*(Ya estoy realizando el pago por el link de Mercado Pago)*_`;
    }

    const urlWa = `https://wa.me/524441817399?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWa, '_blank');

    if (metodoPago === 'Tarjeta (Mercado Pago / Link)') {
        setTimeout(() => {
            window.location.href = LINK_MERCADO_PAGO;
        }, 1000);
    }
}

// --- 6. LÓGICA DE BARRA DE NAVEGACIÓN INTELIGENTE (SCROLL) ---
let ultimoScroll = window.pageYOffset || document.documentElement.scrollTop;
const header = document.querySelector('.header-principal');

window.addEventListener('scroll', function() {
    const scrollActual = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollActual > ultimoScroll && scrollActual > 80) {
        header.classList.add('header-oculto');
    } else {
        header.classList.remove('header-oculto');
    }
    
    ultimoScroll = scrollActual <= 0 ? 0 : scrollActual; 
}, false);

// --- 7. LÓGICA DE HORARIOS DE APERTURA ---
function verificarHorarioAbierto() {
    const horaMexico = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"});
    const fechaMexico = new Date(horaMexico);

    const dia = fechaMexico.getDay(); 
    const hora = fechaMexico.getHours(); 
    const minutos = fechaMexico.getMinutes();
    
    const horaActualDecimal = hora + (minutos / 60);

    let abierto = false;

    // Regla 1: Jueves (4) y Viernes (5) de 6:00 PM (18.0) a 10:00 PM (22.0)
    if (dia === 4 || dia === 5) {
        if (horaActualDecimal >= 18.0 && horaActualDecimal < 22.0) {
            abierto = true; 
        }
    }
    // Regla 2: Sábado (6) y Domingo (0) de 3:00 PM (15.0) a 10:00 PM (22.0)
    else if (dia === 6 || dia === 0) {
        if (horaActualDecimal >= 15.0 && horaActualDecimal < 22.0) {
            abierto = true; 
        }
    }

    if (!abierto) {
        const btnPedir = document.querySelector('.btn-pedir');
        
        if (btnPedir) { 
            btnPedir.disabled = true;
            btnPedir.style.backgroundColor = '#999'; 
            btnPedir.style.cursor = 'not-allowed';
            btnPedir.textContent = 'Cerrado por el momento';

            const aviso = document.createElement('div');
            aviso.innerHTML = '⚠️ <strong>¡Estamos descansando!</strong><br>Nuestro horario de servicio es:<br>• <strong>Jueves y Viernes:</strong> 6:00 PM a 10:00 PM<br>• <strong>Sábado y Domingo:</strong> 3:00 PM a 10:00 PM<br>Puedes ver el menú y armar tu pedido, pero podrás enviarlo hasta que abramos.';
            aviso.style = 'background-color: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin-bottom: 15px; text-align: center; border: 1px solid #f5c6cb; font-size: 0.9em; line-height: 1.5;';
            
            btnPedir.parentNode.insertBefore(aviso, btnPedir);
        }
    }
}

// --- 8. CONEXIÓN CON GOOGLE SHEETS PARA DISPONIBILIDAD ---
// 🚨 ¡RECUERDA PEGAR TU ENLACE LARGO DE GOOGLE SHEETS AQUÍ ABAJO! 🚨
const URL_GOOGLE_SHEET = "PEGAR_AQUI_TU_ENLACE_LARGO_DE_GOOGLE_SHEETS";

async function cargarDisponibilidadYRenderizar() {
    try {
        const respuesta = await fetch(URL_GOOGLE_SHEET);
        const textoCSV = await respuesta.text();
        
        const filas = textoCSV.split('\n').slice(1);
        
        filas.forEach(fila => {
            if (!fila.trim()) return; 
            
            const columnas = fila.split(',');
            
            const idSheet = parseInt(columnas[0].trim());
            const disponibleSheet = columnas[2].trim().toUpperCase() === 'SI';
            
            const productoEnMenu = menuData.find(p => p.id === idSheet);
            if (productoEnMenu) {
                productoEnMenu.disponible = disponibleSheet;
            }
        });

        renderizarMenu();

    } catch (error) {
        console.error("Hubo un error leyendo Google Sheets, cargando menú por defecto...", error);
        renderizarMenu();
    }
}

// Iniciar aplicación
verificarHorarioAbierto();
cargarDisponibilidadYRenderizar();