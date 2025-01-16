import synicImages from "./assets/Images/synic-removebg-preview (1).png"
import {Link} from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import slider1 from "./assets/Images/slider1.jpg"
import slider2 from "./assets/Images/tanger.jpg"
import { House } from 'lucide-react';


export default function App() {
    return (

        <>
            <title>Syndic|Home</title>
            <nav className={"w-full h-24 bg-white  shadow-sm shadow-gray-400 flex items-center justify-between px-20 montserrat"}>
                <ul className={"mt-2"}>
                    <img src={synicImages} alt={"logo"} width={200}/>
                </ul>
                <ul className={"flex items-center justify-center  gap-10 text-lg font-semibold"}>
                    <li>Accueil</li>
                    <li>Fonctionnalités</li>
                    <li>Témoignages</li>
                    <li>Contact</li>

                </ul>
                <ul className={"p-2 bg-[#272C56] text-white rounded-md uppercase"}>
                    <Link >Accès syndic</Link></ul>
            </nav>
            <header className={"w-full h-[80vh] bg-gray-300"}>
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
                    <SwiperSlide>
                        <img src={slider1} className={"bg-cover"}/>
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
                <div className={"flex justify-between items-center mx-32"}>
                    <div className={"w-[29%] mt-7 space-y-4" }>
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
                        </div>
                         </div>
                </div>
            </div>
        </>

    )
}
