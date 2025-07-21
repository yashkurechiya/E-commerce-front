import React, { useContext, useEffect, useRef } from 'react';
import ai from '../assets/ai.png';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Ai = () => {
    const { showSearch, setshowSearch, navigate } = useContext(ShopContext);
    const recognitionRef = useRef(null);

    const speak = (message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';

            recognition.onresult = (e) => {
                console.log('Speech result:', e);
                const transcript = e.results[0][0].transcript.trim().toLowerCase();

                if (transcript.includes("search") && transcript.includes("open") && !showSearch) {
                    speak("opening search");
                    setshowSearch(true);
                    navigate('/collection');
                } else if (transcript.includes("search") && transcript.includes("close") && showSearch) {
                    speak("closing search");
                    setshowSearch(false);
                } else if (["collection", "collections", "product", "products"].some(word => transcript.includes(word))) {
                    speak("opening collection page");
                    navigate('/collection');
                } else if (["about", "aboutpage", "about us"].some(word => transcript.includes(word))) {
                    speak("opening about page");
                    navigate('/about');
                    setshowSearch(false);
                } else if (["home", "homepage"].some(word => transcript.includes(word))) {
                    speak("opening home page");
                    navigate('/');
                    setshowSearch(false);
                } else if (["cart", "kaat", "caat"].some(word => transcript.includes(word))) {
                    speak("opening cart page");
                    navigate('/cart');
                    setshowSearch(false);
                } else if (["contact", "contactus"].some(word => transcript.includes(word))) {
                    speak("opening contact page");
                    navigate('/contact');
                    setshowSearch(false);
                } else if (["order", "orders", "my order", "my oder"].some(word => transcript.includes(word))) {
                    speak("opening order page");
                    navigate('/order');
                    setshowSearch(false);
                } else {
                    toast.error("Command not recognized. Please try again.");
                }
            };

            recognition.onerror = (e) => {
                console.error('Speech error:', e);
                toast.error('Speech recognition error');
            };

            recognition.onend = () => {
                console.log('Speech recognition ended');
            };

            recognitionRef.current = recognition;
        } else {
            console.warn('Speech Recognition API not supported in this browser.');
            toast.error('Speech recognition not supported in this browser');
        }
    }, [navigate, setshowSearch, showSearch]);

    const handleClick = () => {
        if (recognitionRef.current) {
            recognitionRef.current.start();
        }
    };

    return (
        <div onClick={handleClick} className='fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]'>
            <img src={ai} alt="AI" className='w-[100px] md:w-[150px] cursor-pointer' />
        </div>
    );
};

export default Ai;
