import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";

export default function Homepage() {
    return (
        <>
            <Navbar />

            <div className="container">
                <Modal />
            </div>  
        </>
    );
}