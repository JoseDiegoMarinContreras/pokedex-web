import './style.css';

interface StatBasePointProps {
    statName: string;
    statValue: number;
    key?: unknown;
}

const StatBasePoint = ({ statValue=20, statName='', key } : StatBasePointProps) => {
    return(
        <div key={key} className='maincontainer-sbp-pdp'>
            <div className='barcontainer-sbp-pdp'>
                <div className='barvalue-sbp-pdp'
                  style={{ height: `${statValue}%`, }}
                />
            </div>

            <p className='barname-sbp-pdp'>{`${statName}`}</p>
            
            <p className='barnameval-sbp-pdp'>{`(${statValue} pts)`}</p>
        </div>
    );
}

export default StatBasePoint;