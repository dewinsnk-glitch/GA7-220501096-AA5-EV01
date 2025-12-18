// Simulacion de base de datos en memoria
const users = [];

// Registro de usuario
exports.register =(req, res) => {
    const { username, password } = req.body;

    //validacon de datos
    if (!username || !password) {
        return  res.status(400).json({
            message: 'Usuario y contraseña son obligatorios'
        });
}
// Guardar usuario
users.push({ username, password });

res.status(201).json({
    message: 'Usuario registrado exitosamente'
});
};

// Inicio de sesion
exports.login = (req, res) => {
    const { username, passsword } = req.body;

    // Buscar usuario
    const user = user.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        res.status(200).json({
            message: 'Autenticacion exitosa'
        });
    } else {
        res.status(401).json({
            message: 'Error de autenticacion'
        });
    }
};