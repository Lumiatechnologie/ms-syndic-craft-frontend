import synicImages from "./assets/Images/synic-removebg-preview (1).png"
import synicImages1 from "./assets/Images/synic-removebg-preview.png"
import {Link} from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import slider1 from "./assets/Images/slider1.jpg"
import slider2 from "./assets/Images/tanger.jpg"
import {Check, ChevronRight, House, Mail, Phone} from 'lucide-react';


export default function App() {
    return (

        <>
            <title  >Syndic|Home</title>
            <nav id={"acceuil"} className={"w-full h-24 bg-white fixed top-0 z-10 shadow-sm shadow-gray-400 flex items-center justify-between px-20 montserrat"}>
                <ul className={"mt-2"}>
                    <img src={synicImages} alt={"logo"} width={200}/>
                </ul>
                <ul className={"flex items-center justify-center  gap-10 text-lg font-semibold"}>
                    <li>Accueil</li>
                    <li><a href={"#Fonctionnalités"}>Fonctionnalités</a></li>

                    <li><a href={"#Contact"}>Contact</a></li>
                    <li><a href={"#Faq"}>Faq</a></li>

                </ul>
                <ul className={"p-2 bg-[#272C56] text-white rounded-md uppercase"}>
                    <Link >Accès syndic</Link></ul>
            </nav>
            <header className={"w-full h-[80vh] bg-gray-300 mt-24"} >
                <Swiper className="mySwiper h-full"  centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}>
                    <SwiperSlide className={""}>
                        <div className={"relative w-full h-[80vh] flex justify-center items-center"}>
                            <img src={slider1} className={"bg-cover absolute top-0 left-0 w-full h-full"}/>
                            <div className={" relative flex flex-col gap-5 justify-center items-center w-[50%] text-white bg-gradient-to-tr from-[#272C56] to-[#272C56]/65 py-24 rounded-2xl"}>
                                <h1 className={"text-2xl font-semibold uppercase"}>Gérez Votre Syndic de Copropriété Facilement</h1>
                                <p className={"font-light text-lg text-center w-[80%]"}>Découvrez une application web intuitive et performante conçue pour simplifier la gestion de votre syndic. Suivez les finances, gérez les réunions, communiquez avec les copropriétaires et bien plus, le tout en un seul endroit pratique et sécurisé.</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} className={"bg-center"}/>
                    </SwiperSlide>

                </Swiper>
            </header>
            <main className={"flex items-center justify-between px-20 gap-16 w-full  mt-20 montserrat"}>
                <div className={"w-1/2 space-y-2"}>
                    <h1 className={"text-4xl text-[#272C56]"}>Pourquoi Choisir SANDIPULSE ?</h1>
                    <h2 className={"text-2xl text-red-950 font-normal"}>
                        Le best logiciel de gestion de copropriété au Maroc

                    </h2>
                    <p className={"text-[16px] font-light"}>Syndic Connect est votre partenaire de confiance pour une gestion sans souci de votre copropriété au Maroc. Notre logiciel est spécialement conçu pour répondre aux besoins des syndics professionnels, des syndics bénévoles et des conseils syndicaux, simplifiant ainsi la gestion quotidienne de toutes les tailles de copropriétés. Grâce à notre application mobile, disponible sur l'App Store et Google Play Store, la communication avec les copropriétaires est plus fluide que jamais. Ils peuvent accéder facilement aux informations essentielles concernant leur immeuble, consulter les documents importants, suivre les actualités de la copropriété et soumettre des demandes en quelques clics. Syndic Connect est le choix préféré des syndics à travers tout le Maroc, qu'il s'agisse de résidences haut de gamme comme Prestigia ou de résidences de standing moyen comme Saada. Simplifiez la gestion administrative, financière et technique de votre copropriété dès aujourd'hui avec Syndic Connect.</p>
                </div>
                <div className={"w-1/2"}>
                    <img src={"https://syndicconnect.ma/wp-content/uploads/2024/12/application-web-syndic-connect.webp"} />
                </div>
            </main>
            <div className={"w-[90%] h-[170px] mx-auto rounded-2xl bg-[#272C56] flex items-center justify-between mt-20 px-20"}>
            <div className={"text-white w-1/2"}>
                <p className={"text-2xl text-white font-bold uppercase mb-5"}>Contacter Nous!
                </p>
                <span className={" font-light"}>Nos experts en administration de biens sont à votre disposition pour étudier votre besoin en détails et vous proposer la solution la plus adaptée.</span>
            </div>
                <div>
<button className={"bg-white rounded-full p-2 font-light uppercase text-sm w-[220px] h-[50px]"}>demande d{"'"}information</button>
<button className={" rounded-full p-2 font-light uppercase text-sm w-[220px] h-[50px] ml-10 border border-white text-white"}>APPELER</button>
                </div>
        </div>
            <div className={"mt-20"}>
                <p className={"text-center text-4xl font-light uppercase "}>Nos services :</p>
                <div className={"flex justify-between items-start  mx-32"}>
                    <div className={"w-[29%] mt-20 space-y-4" }>
                        <h1 className={"text-4xl"}>
                            Des services <span className={"text-[#272C56]"}>complets</span> pour votre gestion
                            immobilière
                        </h1>
                        <p className={"text-gray-500 font-light"}>
                            Nous offrons des services complets de gestion de copropriété, property management et facility management au Maroc.
                        </p>
                    </div>
                    <div className={"grid grid-cols-2 gap-10 mt-20 montserrat"}>
                        <div
                            className={"w-[300px] h-[230px] border border-gray-300 rounded-xl shadow-md shadow-gray-200 space-y-3 pt-5 pl-7 "}>
                            <div
                                className={"bg-gray-100 rounded-md h-[50px] w-[60px] flex justify-center items-center"}>
                                <House size={30} color={"#272C56"}/>

                            </div>
                            <h1 className={"text-xl capitalize font-medium"}>Gestion de Copropriété
                            </h1>
                            <p className={"w-[88%] font-light"}>Une gestion professionnelle et transparente pour votre copropriété.</p>
                        </div>
                       <div
                            className={"w-[300px] h-[230px] border border-gray-300 rounded-xl shadow-md shadow-gray-200 space-y-3 pt-5 pl-7 "}>
                            <div
                                className={"bg-gray-100 rounded-md h-[50px] w-[60px] flex justify-center items-center"}>
                                <House size={30} color={"#272C56"}/>

                            </div>
                            <h1 className={"text-xl capitalize font-medium"}>Gestion de Copropriété
                            </h1>
                            <p className={"w-[88%] font-light"}>Une gestion professionnelle et transparente pour votre copropriété.</p>
                        </div><div
                            className={"w-[300px] h-[230px] border border-gray-300 rounded-xl shadow-md shadow-gray-200 space-y-3 pt-5 pl-7 "}>
                            <div
                                className={"bg-gray-100 rounded-md h-[50px] w-[60px] flex justify-center items-center"}>
                                <House size={30} color={"#272C56"}/>

                            </div>
                            <h1 className={"text-xl capitalize font-medium"}>Gestion de Copropriété
                            </h1>
                            <p className={"w-[88%] font-light"}>Une gestion professionnelle et transparente pour votre copropriété.</p>
                        </div><div
                            className={"w-[300px] h-[230px] border border-gray-300 rounded-xl shadow-md shadow-gray-200 space-y-3 pt-5 pl-7 "}>
                            <div
                                className={"bg-gray-100 rounded-md h-[50px] w-[60px] flex justify-center items-center"}>
                                <House size={30} color={"#272C56"}/>

                            </div>
                            <h1 className={"text-xl capitalize font-medium"}>Gestion de Copropriété
                            </h1>
                            <p className={"w-[88%] font-light"}>Une gestion professionnelle et transparente pour votre copropriété.</p>
                        </div>
                         </div>
                </div>
            </div>
            <div id={"Fonctionnalités"} className={"mt-20 flex flex-col items-center justify-center montserrat"}>
                <p className={"text-center text-4xl font-light uppercase "}>Les Fonctionnalités de Syndic Connect :</p>
<span className={"mt-5 w-[50%] font-light text-center"}>L’ensemble des fonctionnalités de SANDIPULSE ont été pensées par des experts en la matière afin de cerner tous les aspects de gestion de la copropriété.</span>
                <div className={"flex items-center justify-center mt-12 gap-12"}>
                    <ul className={"flex flex-col gap-8 justify-center items-end text-end "}>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light"}>Création des lots
                            Création des
                            lots Création des lots es
                            lots<span className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span></li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light"}>Création des lots
                            Création des
                            lots Création des lots es
                            lots<span className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span></li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light"}>Création des lots
                            Création des
                            lots Création des lots es
                            lots<span className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span></li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light"}>Création des lots
                            Création des
                            lots Création des lots es
                            lots<span className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span></li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light"}>Création des lots
                            Création des
                            lots Création des lots es
                            lots<span className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span></li>
                    </ul>
                    <div className={"w-1/3"}><img
                        src={"https://syndicconnect.ma/wp-content/uploads/2024/12/application-web-syndic-connect.webp"}/>
                    </div>
                    <ul className={"flex flex-col gap-8 justify-center items-end text-end "}>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light "}><span
                            className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span>Création
                            des lots Création des
                            lots
                        </li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light "}><span
                            className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span>Création
                            des lots Création des
                            lots
                        </li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light "}><span
                            className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span>Création
                            des lots Création des
                            lots
                        </li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light "}><span
                            className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span>Création
                            des lots Création des
                            lots
                        </li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light "}><span
                            className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span>Création
                            des lots Création des
                            lots
                        </li>
                        <li className={"flex justify-center items-center gap-3 w-[320px] font-light "}><span
                            className={"p-0.5 rounded-full bg-[#272C56]"}><Check color={"white"}/></span>Création
                            des lots Création des
                            lots
                        </li>

                    </ul>
                </div>
            </div>
            <div id={"Contact"} className={"mt-20 flex justify-evenly items-center montserrat"}>
                <div className={"w-1/3"}><img
                    src={"https://syndicconnect.ma/wp-content/uploads/2024/12/application-web-syndic-connect.webp"}/>
                </div>
                <div className={""}>
                    <p className={"text-3xl font-bold text-[#272C56] my-3"}>Avez-vous des questions ?
                    </p>
                    <span className={"mb-3 font-light text-lg "}>Restez en contact avec nous
                <form className={"flex flex-col gap-5 mt-7"}>
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
                        <label htmlFor="Telephone">Telephone</label>
                        <input id="Telephone" className={"w-full border border-gray-300 rounded-sm p-2"}
                               type="text"
                        />
                    </div> <div className={"flex flex-col justify-center items-start gap-2"}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className={"w-full border border-gray-300 rounded-sm p-2"}

                        />
                    </div>
                    <button className={"p-2 rounded-md w-full mt-5 bg-[#272C56] text-white uppercase"}>Envoyer</button>
                </form>

</span>
                </div>
            </div>
            <footer className={"w-full h-[60vh] bg-[#272C56] mt-20 flex gap-16 montserrat"}>
                <div
                    className={"relative flex flex-col gap-5 items-center justify-center w-1/3 after:absolute after:top-[15%] after:-right-5 after:h-[70%] after:w-0.5 after:bg-white/50"}>
                    <ul className={" w-[260px] h-[260px] overflow-hidden -mt-20"}>
                        <img src={synicImages1} alt={"logo"} className={"h-full w-full"}/>
                    </ul>
                    <ul className={"-mt-20 ml-16 text-center text-white text-xl font-light"}><p>Grâce à notre logiciel,
                        la comptabilité de votre résidence deviendra un jeu d'enfant pour vous.</p></ul>

                </div>
                <div className={"flex flex-col items-start justify-center gap-3 relative after:absolute after:top-[15%] after:-right-9 after:h-[70%] after:w-0.5 after:bg-white/50"}>
                    <p className={"text-white font-semibold text-xl uppercase"}>Contact Info
                    </p>
                    <ul className={" flex  items-center justify-start gap-3"}>
                        <p className={"text-white bg-gray-900 border border-white/90 border-dotted p-2 rounded-full "}>
                            <Mail/></p>
                        <div className={"flex flex-col justify-center items-start gap-2 text-white"}>
                            <p className={"uppercase text-lg"}>Email:</p>
                            <a href="mailto:contact@lumiatechnologie.com"
                               className={" font-light"}>Contact@lumiatechnologie.com</a>
                        </div>
                    </ul>
                    <ul className={" flex  items-center justify-start gap-3"}>
                        <p className={"text-white bg-gray-900 border border-white/90 border-dotted p-2 rounded-full "}>
                            <Phone/></p>
                        <div className={"flex flex-col justify-center items-start gap-2 text-white"}>
                            <p className={"uppercase text-lg"}>Phone:</p>
                            <a href=""
                               className={" font-light"}>06060606060</a>
                        </div>
                    </ul>
                    <ul className={" flex  items-center justify-start gap-3"}>
                        <p className={"text-white bg-gray-900 border border-white/90 border-dotted p-2 rounded-full "}>
                            <Mail/></p>
                        <div className={"flex flex-col justify-center items-start gap-2 text-white"}>
                            <p className={"uppercase text-lg"}>Email:</p>
                            <a href="mailto:contact@lumiatechnologie.com"
                               className={" font-light"}>Contact@lumiatechnologie.com</a>
                        </div>
                    </ul>

                </div>
                <div className={"flex flex-col items-start justify-center gap-3"}>
                    <p className={"text-white font-semibold text-xl uppercase"}>Liens rapides
                    </p>
                    <ul className={" flex  items-center justify-start gap-3"}>
                        <p className={"text-white bg-gray-900 border border-white/90 border-dotted p-1 rounded-full "}>
                            <ChevronRight/></p>
                        <div className={"  text-white"}>
                            <a href={"#acceuil"} className={"uppercase text-lg"}>Acceuil</a>


                        </div>
                    </ul>  <ul className={" flex  items-center justify-start gap-3"}>
                        <p className={"text-white bg-gray-900 border border-white/90 border-dotted p-1 rounded-full "}>
                            <ChevronRight/></p>
                        <div className={"  text-white"}>
                            <a href={"#Fonctionnalités"} className={"uppercase text-lg"}>Fonctionnalités</a>

                        </div>
                    </ul> <ul className={" flex  items-center justify-start gap-3"}>
                        <p className={"text-white bg-gray-900 border border-white/90 border-dotted p-1 rounded-full "}>
                            <ChevronRight/></p>
                        <div className={"  text-white"}>
                            <a href={"#Contact"} className={"uppercase text-lg"}>Contact</a>

                        </div>
                    </ul> <ul className={" flex  items-center justify-start gap-3"}>
                        <p className={"text-white bg-gray-900 border border-white/90 border-dotted p-1 rounded-full "}>
                            <ChevronRight/></p>
                        <div className={"  text-white"}>
                            <a href={"#Faq"} className={"uppercase text-lg"}>Faq</a>

                        </div>
                    </ul>


                </div>
            </footer>
        </>

    )
}
