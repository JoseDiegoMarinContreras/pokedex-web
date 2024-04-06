import { Stat } from "types/poke-api";
import StatBasePoint from "../StatBasePoint";
import './style.css';

interface StatBasePointsProps {
    stats: Stat[]
}

const StatBasePoints = ({ stats } : StatBasePointsProps) => {
    return (
        <div className="maincontainer-sbp-pdp-p">
            {
                stats.map((item) => (
                    <StatBasePoint
                      key={item.stat.name}
                      statName={item.stat.name}
                      statValue={item.base_stat}
                    />
                ))
            }
        </div>
    );
}

export default StatBasePoints;