function Modal({ screenshot }) {
    return (
        <div className="fixed inset-0 left-0 w-screen h-screen z-20 bg-[#262626] bg-opacity-80 p-6 flex justify-center items-center cursor-zoom-out">
            <img src={screenshot} alt="ffff"className="w-[70%] p-4 bg-[#262626] rounded-xl"/>
        </div>
    );
};

export default Modal;
