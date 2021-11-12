import '../../../App.css';
import {Link} from 'react-router-dom';

function SignInBtn() {
    return (
        <div className="body-login">
            <div className="card-login">
                <h4 className="title">_eres nuevo en la hold up?</h4>
                <p className="sub_title">Registrate aquí en pocos pasos.</p>
                <div>
                    <form>
                        <div className="form">
                            <label className="label">nombre</label>
                            <input className="inputs" type="text" id="username" placeholder="  Ej: Carolina" name="name" required autocomplete="off" />
                            <label className="label">apellido</label>
                            <input className="inputs" type="text" id="surname" placeholder="  Ej: González" name="surname" required autocomplete="off" />
                            <label className="label">email</label>
                            <input className="inputs" type="email" id="email" placeholder="  Ej: carolina@gmail.com" name="email" required autocomplete="off" />
                            <label className="label">contraseña</label>
                            <input className="inputs" type="password" id="password" placeholder="  Ej: xxxxxx" name="password1" required autocomplete="off" />
                            <label className="label">rol</label>
                            <input className="inputs" type="text" value="ciudadano" id="rol" name="rol" required autocomplete="off" />
                            

                            <div className="center_div">
                                <Link to={`/user/register`}><button className="btn-crearCuenta">crear cuenta</button></Link>
                                <span className="reg"> ------- o registrate con ------- </span>
                                <div className="center_div_row"> 
                                <Link to={`/user/auth/google`}><i class="fab fa-google"></i></Link>
                                <Link to={`/user/auth/facebook`}><i class="fab fa-facebook"></i></Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default SignInBtn;