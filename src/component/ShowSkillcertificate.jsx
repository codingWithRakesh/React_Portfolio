import CertificateCom from './CertificateCom'
import PropTypes from 'prop-types';

const ShowSkillcertificate = ({ nameSkillcertificate, nameSkill }) => {
    return (

        nameSkillcertificate.length ? (<div className="certifickteRow">
            <p>
                I have the following {nameSkill.name} certificates
            </p>
            <div className="mainShowCertifickets">
                {nameSkillcertificate.map((data, index) => (<CertificateCom key={index} data={data} />))}
            </div>
        </div>) : ""

    )
}

ShowSkillcertificate.propTypes = {
    nameSkillcertificate: PropTypes.arrayOf(PropTypes.object).isRequired,
    nameSkill: PropTypes.shape({
        name: PropTypes.string.isRequired, 
    }).isRequired,
};

export default ShowSkillcertificate