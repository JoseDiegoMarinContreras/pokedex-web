import { useOutlet, } from 'react-router-dom';
import './style.css';

const Template = () => {
    const outlet = useOutlet();
    return(
        <div className="maincontainer-home">
            <section className="section-home">
                { outlet }
            </section>
        </div>
    );
}

export default Template;