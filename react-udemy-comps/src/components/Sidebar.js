import Link from "./Link";

function Sidebar() {
    const listofLinks = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Button', path: '/button' },
        { label: 'Modal', path: '/modal' },
        { label: 'Counter', path: '/counter' },
        { label: 'CounterFeatures', path: '/counter-features' },
    ]

    const renderedLinks = listofLinks.map((link) => {
        return <Link to={link.path} key={link.label} className="mb-3" activeClassname="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    })

    return (<div className="sticky top-0 overflow-y-scroll flex flex-col items-start">{renderedLinks}</div>)
}

export default Sidebar