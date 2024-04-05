
function agregar(e) {
    e.preventDefault()

    console.log('agregar()')


    var inputs = document.getElementsByClassName('entrada')
    console.log(inputs)
    var refNombre = inputs[0]
    var refPrecio = inputs[1]
    var refStock = inputs[2]
    var refMarca = inputs[3]
    var refCategoria = inputs[4]
    var refDesCorta = inputs[5]
    var refDesLarga = inputs[6]
    var refEdadDesde = inputs[7]
    var refEdadHasta = inputs[8]
    var refFoto = inputs[9]
    var refEnvio = inputs[10]


    var nombre = refNombre.value
    var precio = +refPrecio.value
    var stock = +refStock.value
    var marca = refMarca.value
    var categoria = refCategoria.value
    var desCorta = refDesCorta.value
    var desLarga = refDesLarga.value
    var edadDesde = +refEdadDesde.value
    var edadHasta = +refEdadHasta.value
    var foto = refFoto.value
    var envio = refEnvio.checked

    var producto = {
        nombre: nombre,
        precio: precio,
        stock: stock,
        marca: marca,
        categoria: categoria,
        desCorta: desCorta,
        desLarga: desLarga,
        edadDesde: edadDesde,
        edadHasta: edadHasta,
        foto: foto,
        envio: envio,
    }

    console.log(producto)
    productos.push(producto)

    representarTablaProductos()

    refNombre.value = ''
    refPrecio.value = ''
    refStock.value = ''
    refMarca.value = ''
    refCategoria.value = ''
    refDesCorta.value = ''
    refDesLarga.value = ''
    refEdadDesde.value = ''
    refEdadHasta.value = ''
    refFoto.value = ''
    refEnvio.checked = false
}

function representarTablaProductos() {
    var filasTabla

    if(productos.length) {
        filasTabla = '<tr>'  +
                            '<th>nombre</th>' +
                            '<th>precio</th>' +
                            '<th>stock</th>' +
                            '<th>marca</th>' + 
                            '<th>categoria</th>' +
                            '<th>descripcion corta</th>' +
                            '<th>descripcion larga</th>' +
                            '<th>edad desde</th>' +
                            '<th>edad hasta</th>' +
                            '<th>foto</th>' +
                            '<th>envío</th>' +
                        '</tr>';

        for(var i=0; i<productos.length; i++) {
            filasTabla += '<tr>' +
                                '<td>'+ productos[i].nombre + '</td>' +
                                '<td>'+ productos[i].precio + '</td>' +
                                '<td>'+ productos[i].stock + '</td>' +
                                '<td>'+ productos[i].marca + '</td>' + 
                                '<td>'+ productos[i].categoria + '</td>' + 
                                '<td>'+ productos[i].desCorta + '</td>' + 
                                '<td>'+ productos[i].desLarga + '</td>' + 
                                '<td>'+ productos[i].edadDesde + '</td>' + 
                                '<td>'+ productos[i].edadHasta + '</td>' + 
                                '<td><img width="75" src="'+ productos[i].foto + '" alt="foto de '+ productos[i].nombre +'"></td>' +
                                '<td>'+ (productos[i].envio? 'Si':'No') + '</td>' +
                            '</tr>';
        }
    }
    else filasTabla = '<h2 class="msg-error">No se encontraron productos para mostrar</h2>'

    document.querySelector('table').innerHTML = filasTabla 
}

function start() {
    console.warn( document.querySelector('title').innerText )

    representarTablaProductos()
    var refForm = document.querySelector('main form')
    refForm.onsubmit = agregar
}
