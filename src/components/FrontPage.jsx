import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import swal from 'sweetalert';
import { TypeAnimation } from 'react-type-animation';
import jopay from '../music/jopay1.mp3';
import ReactPlayer from 'react-player';
import Navbar from './layout/Navbar';
import Landing from './Landing';


function FrontPage() {

    const [visible, setVisible] = useState(false)
    const [loading, setloading] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false);
    const [passworddata, setpassword] = useState({
        password: "",
    });
    const handleinput = (e) => {
        e.persist();
        setpassword({ ...passworddata, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setVisible(true)
    }, []);

    const SubmitCode = (e) => {
        e.preventDefault();

        const data = {
            password: passworddata.password,
        }

        if (data.password === "05042024") {
            setVisible(false)
            setloading(false)
            setIsPlaying(true)
            localStorage.setItem('auth_token', 'mahal kita');
            // audioPlayer.current && audioPlayer.current.play();
        }
        else {
            swal("Warning", "Error Pin", 'warning');
            document.getElementById('pin').reset();
        }

    }

    


    return (
        <>
            <Dialog header="Enter 8 Pin" position='top' draggable={false} visible={visible} onHide={() => setVisible(false)}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="container">
                    <form onSubmit={SubmitCode} id='pin'>
                        <div className="row">
                            <div className="col-lg-12">
                                <label htmlFor="" className="form-label">
                                    Enter Password
                                </label>
                                <InputText type='password' maxLength={8} keyfilter={'pint'} onChange={handleinput} name='password' className='w-100 p-inputtext-sm' />
                            </div>
                            <div className="mt-3">
                                <Button className='p-button-sm p-button-info w-100' label="Enter" />
                            </div>
                        </div>
                    </form>
                </div>
            </Dialog>

            <Landing />



            {
                loading ? "" :
                    <>
                        <Navbar />
                        <div className="container mt-3">
                            <div className="row">
                                <Card className='bg-transparent'>
                                    <h5 className="text-center">
                                    </h5>
                                    <div className="">
                                    </div>
                                </Card>    
                            </div>
                        </div>
                        <div className="container">
                            <ReactPlayer
                                url={jopay}
                                playing={isPlaying}
                                width="300px"
                                height="50px"
                                loop={true}
                                volume={1}
                            />
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 mb-2">
                                    <Card className='bg-transparent'>
                                        <TypeAnimation
                                            sequence={[
                                                `Dear Love,
                                                
                                            \n Hi, Love nais ko pala iparating sayo na itong mensahe na ito, sana magustuhan mo tong munting suprise ko sayo, even though LDR ta pero I'm trying my best. para maging masaya ka din sa piling ko, pasensya kana din sa kin kung di kita masuyo minsan kasi alam mo naman sobrang busy ko din pasensya na din kung may pag kukulang din ako sayo pasensya na din kung may nagawa man akong mali na ikakasakit sayo pero love, always remember mahal na mahal kita, walang ibang babae na mas hihigit pa sayo kasi your the only one who always makes me happy and kontento na ako sayo love. Thankful ako kay god kasi natagpuan kita at ikaw yung babae na rare para sakin love. 

                                            \n Napapagtanto ko kung gaano ka kahalaga sa buhay ko love. Ang iyong mga ngiti ay tila araw na sumisiklab sa aking madilim na mundo na nagbibigay din ng kulay. Love dito lang lage ako kahit anong mangyari nasa tabi mo lang ako nagmamahal lagi sayo at handa kitang alagaan. Thank you for letting me in your life and trusting me na I can love you back the way you deserved. Ikaw lang yung babaeng mamahalin ko habang buhay at wala ng iba I love you very much LOVE 😙💗. Hinihiling ko nalang na sana dumating yung panahon na mayakap kita kasi gustong gusto kita yakapin love tiyaka halikan sa noo mo ayieee si love.

                                            \nYour Special Person,

                                            Georgie Recabo 💓💖`
                                            ]}

                                            wrapper="p"
                                            speed={50}
                                            style={{ whiteSpace: 'pre-line', fontSize: '10px', display: 'inline-block', color: 'white' }}
                                        />
                                    </Card>

                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default FrontPage
