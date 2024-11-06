class Generate {

    // Método para CREATE
    create(table, data) {
        const columns = Object.keys(data).join(', ');
        const values = Object.values(data).map(value => `'${value}'`).join(', ');
        return `INSERT INTO ${table} (${columns}) VALUES(${values});`;
    }

    // Método para READ
    read(table, columns = ["*"]) {
        const columnList = columns.join(', ');
        return `SELECT ${columnList} FROM ${table}`;
    }

    // Método para READById
    readById(table, columns = ["*"], id) {
        const columnList = columns.join(', ');
        return `SELECT ${columnList} FROM ${table} WHERE id = ${id};`;
    }

    // Método para UPDATE
    update(table, data, id) {
        const setClause = Object.entries(data)
            .map(([key, value]) => `${key} = '${value}'`)
            .join(', ');
        return `UPDATE ${table} SET ${setClause} WHERE id = ${id};`;
    }

    // Método para DELETE
    delete(table, id) {
        return `DELETE FROM ${table} WHERE id = ${id};`;
    }
}

// Ejemplo de uso
const createDat = {
    id: 6,
    nombre: 'tata',
    especie: 'gata',
    raza: 'criolla',
    fecha_nacimiento: '2024-05-07',
    propietarioId: 101
};

const generator = new Generate();

// console.log(generator.create('mascotas', createDat));
// Salida: INSERT INTO mascotas (id, nombre, especie, raza, fecha_nacimiento, propietarioId) VALUES('6', 'tata', 'gata', 'criolla', '2024-05-07', '101');

// console.log(generator.read('mascotas', ["nombre", "especie"]));
// Salida: SELECT nombre, especie FROM mascotas;

// console.log(generator.update('mascotas', { nombre: 'Tom', especie: 'gato' }, 6));
// Salida: UPDATE mascotas SET nombre = 'Tom', especie = 'gato' WHERE id = 6;

// console.log(generator.delete('mascotas', 6));
// Salida: DELETE FROM mascotas WHERE id = 6;


module.exports = Generate;