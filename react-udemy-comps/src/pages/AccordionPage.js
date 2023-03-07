import Accordion from "../components/Accordion"


function AccordionPage() {
    const accordionItems=[
        {
            id:'123',
            title:'First Accordion',
            text:'This is first accordion text. This is first accordion text. This is first accordion text. This is first accordion text. This is first accordion text.'
        },
        {
            id:'124',
            title:'Second Accordion',
            text:'This is second accordion text. This is second accordion text. This is second accordion text. This is second accordion text. This is second accordion text.'
        },
        {
            id:'125',
            title:'Third Accordion',
            text:'This is third accordion text. This is third accordion text. This is third accordion text. This is third accordion text. This is third accordion text. '
        }
    ]

    return(
        <div>
            <Accordion items={accordionItems}></Accordion>
        </div>
    )
    
}

export default AccordionPage