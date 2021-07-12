const pool = require('../pool');
const sql = require('../sql/empresas_queries');

exports.getEmpresas = async (req, res) => {
    try{
        pool.query('SELECT * FROM empresa_t', (err, response) => {
            if (err) throw err;
            if(response.length)
            res.json(response);
        res.end();
        })
    }catch(error){
        return res.json(error)
    }
}

exports.getById = async = (req, res) => {
    let rut_empresa = req.params.rut_empresa
    try{
        pool.query(`SELECT * FROM empresa_t WHERE rut_empresa =  ${rut_empresa} `, (err, response) =>{
            if(err)
            console.log(err);
            if(response)
            res.json(response);
        res.end();
        })
    }catch(error){
        return res.json(error);
    }
}

exports.createEmpresa = async = (req, res) => {
    let empresa = req.body;

    try{
        pool.query(`
        insert into empresa_t(rut_empresa, razon_social, giro_comercial, direccion, telefono_contacto, nombre_representante, nombre_infotravel, activo, correo, id_comuna, id_nacionalidad)
        values(
            '${empresa.rut_empresa}',
            '${empresa.razon_social}',
            '${empresa.giro_comercial}',
            '${empresa.direccion}',
            '${empresa.telefono_contacto}',
            '${empresa.nombre_representante}',
            '${empresa.nombre_infotravel}',
            '${empresa.activo}',
            '${empresa.correo}',
            '${empresa.id_comuna}',
            '${empresa.id_nacionalidad}'
        )
        `, (err, response) => {
            if(err)
            console.log(err);
            if(response.length)
            res.json({success: "Empresa creada correctamente"});
        res.end();
        }
        )
    }catch(error){
        return res.json(error);
    }
}