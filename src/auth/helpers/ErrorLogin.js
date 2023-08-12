import Swal from "sweetalert2/dist/sweetalert2.all"
const ErrorLogin = () => {
    return Swal.fire(
        'Debes introducir un usuario y contraseña',
        'Los datos no se guardaran',
        'error'
      )
}

export default ErrorLogin