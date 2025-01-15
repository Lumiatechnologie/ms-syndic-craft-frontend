import synicImages from "../assets/Images/synic-removebg-preview.png"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {Link} from "react-router";
const schema = z.object({
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    Password: z.string()
});
export default function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission, e.g., send data to API
    };
    return (
        <main className={"flex justify-between items-center w-full h-[100vh] montserrat"}>
            <title>Syndic|SignUp</title>
            <p className={"absolute right-3 top-3 text-xl"}>J{"'"}ai un compte ! <Link to={"/SignIn"} className={"text-[#272C56] font-bold uppercase hover:underline "}>Se connecter</Link> </p>
            <div className={"w-full h-full bg-[#272C56] flex flex-col justify-center items-center"}>
                <img src={synicImages} alt={"synicImages"} width={300} height={100} className={"-mt-40"} />
                <p className={"text-white/90 w-[50%] font-normal text-2xl text-center capitalize -mt-20 leading-10"}>bienvenue sur syndipulse ! Siplifiez la gestion  de votre copropriéte avec nos outils pratiques et intuitifs</p>
            </div>
            <div className={"w-full h-full bg-white flex flex-col justify-center items-center"}>
                <h1 className={"text-4xl capitalize font-mono mb-10"}>Inscription</h1>

                <form className={"flex flex-col gap-5"}>
                    <div className={"flex justify-between items-center gap-10"}>
                        <div className={"flex flex-col justify-center items-start gap-2"}>
                            <label htmlFor="first_name" className={"text-sm"}>Nome</label>
                            <input id="first_name" className={"w-full border border-gray-300 rounded-sm p-2"}
                                   type="text"
                                   placeholder="First name "/>
                        </div>
                        <div className={"flex flex-col justify-center items-start gap-2"}>
                            <label htmlFor="prénom">Prénom</label>
                            <input id="prénom" className={"w-full border border-gray-300 rounded-sm p-2"} type="text"
                                   placeholder="prénom "/>
                        </div>
                    </div>
                    <div className={"flex flex-col justify-center items-start gap-2"}>
                        <label htmlFor="Email">Email</label>
                        <input id="Email" className={"w-full border border-gray-300 rounded-sm p-2"} type="text"
                               placeholder="Email "/>
                    </div>

                    <div className={"flex flex-col justify-center items-start gap-2"}>
                        <label htmlFor="Mot de passe">Mot de passe</label>
                        <input id="Mot de passe" className={"w-full border border-gray-300 rounded-sm p-2"} type="Password"
                        />
                    </div>
                    <button className={"p-2 rounded-md w-full mt-5 bg-[#272C56] text-white uppercase"}>SignUp</button>
                </form>
            </div>
        </main>
    )
}
