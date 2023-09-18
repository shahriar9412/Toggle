import React from 'react'
import { faqsData } from './data'
import FAQ from './FAQ'

const FAQS = () => {
    return (
        <main>
            <section>
                <h1>FAQs</h1>
                {faqsData.map(faq => <FAQ key={faq.id} {...faq} />)}
            </section>
        </main>
    )
}

export default FAQS
