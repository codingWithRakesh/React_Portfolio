import ChartBoxSkill from './ChartBoxSkill'
import Skill from './Skill'
import PropTypes from 'prop-types';

const CertificateChartSkill = ({ matchingSkill }) => {
    return (
        matchingSkill && <div className="ifSkill">
            <div className="showProCerhdj">
                <ChartBoxSkill  classCer="forCerti88" nameSkill={matchingSkill} />
                {[matchingSkill].map((data, index) => (
                    <Skill data={data} key={index} />
                ))}
            </div>
        </div>
    )
}

CertificateChartSkill.propTypes = {
    matchingSkill: PropTypes.shape({
        name: PropTypes.string.isRequired, 
        level: PropTypes.number, 
    }).isRequired, 
};

export default CertificateChartSkill