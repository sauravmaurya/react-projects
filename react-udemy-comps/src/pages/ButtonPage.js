import { GoBell, GoBriefcase, GoBook } from "react-icons/go";
import Button from '../components/Button'

function ButtonPage() {

    const handleClick = ()=>{
        console.log("rest click")
    }

    return (
        <div>
            <div>
                <Button primary onClick={handleClick}>
                    <GoBell className="mr-1" />
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary rounded>
                    <GoBook />
                    Secondary
                </Button>
            </div>
            <div>
                <Button success rounded>
                    <GoBriefcase />
                    Success
                </Button>
            </div>
            <div>
                <Button warning >
                    <GoBell />
                    Warning
                </Button>
            </div>
            <div>
                <Button danger>
                    <GoBriefcase />
                    Danger
                </Button>
            </div>
        </div>
    )
}

export default ButtonPage