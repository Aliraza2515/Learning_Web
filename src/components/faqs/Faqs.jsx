import React, { useEffect } from 'react';
import './faqs.css';
import Faqsdata from './faqsData'

const Faqs = () => {
    useEffect(() => {
        const faqs = document.querySelectorAll('.faq');

        faqs.forEach(faq => {
            faq.addEventListener('click', () => {
                faq.classList.toggle('open');

                const icon = faq.querySelector('.faq__icon i');
                if (icon.className === 'uil uil-plus') {
                    icon.className = 'uil uil-minus';
                } else {
                    icon.className = 'uil uil-plus';
                }
            });
        });
    }, []);

    return (
        <section className="faqs">
            <h2>Frequently Asked Questions</h2>
            <div className="container faqs__container">
                {
                    Faqsdata.map((item, index) => {
                        return(
                         <article key={index} className='faq'>
                            <div className="faq__icon"><i className='uil uil-plus'></i></div>
                            <div className="question__answer">
                                <h4>{item.Name}</h4>
                                <p>
                                    {item.Description}
                                </p>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Faqs
