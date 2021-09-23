import Navbar from "../../components/Navbar/Navbar";
import Modal from "../../components/Modal/Modal";
import { Taskform } from "../../components/Taskform/Taskform";
import { CategoryForm } from "../../components/Categoryform/Categoryform";

export default function Homepage() {
    return (
        <>
            <Navbar />

            <div className="container">
                <Modal view={<Taskform />} title="Add new task" />
                <Modal view={<CategoryForm />} title="Add category" />
            </div>  
        </>
    );
}