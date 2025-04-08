export default function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        fetch('https://formsubmit.co/belenlucolman@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                alert('Mensaje enviado con éxito.');
                e.target.reset();
            } else {
                alert('Hubo un error al enviar el formulario.');
            }
        })
        .catch(() => alert('Hubo un error al enviar el formulario.'));
    };

    return (
        <div id="contact" className="px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tighter text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl text-center">
                Contáctame
            </h1>
            <br />
            <p className="max-w-[600px] text-lg text-slate-700 md:text-xl text-center mx-auto">
                Estoy aquí para ayudarle con sus necesidades legales. <br />
                Complete el siguiente formulario y me pondré en contacto con usted lo antes posible.
            </p>
            <br />
            <form className="space-y-4 max-w-[600px] mx-auto" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre" className="w-full p-2 border border-gray-500 rounded" required />
                <input type="email" placeholder="Correo electrónico" className="w-full p-2 border border-gray-500 rounded" required />
                <textarea placeholder="Mensaje" className="w-full p-2 border border-gray-500 rounded" required></textarea>
                <button type="submit" className="px-4 py-2 bg-pink-700 text-white rounded w-full sm:w-auto">
                    Enviar
                </button>
            </form>                        
        </div>
    )
}