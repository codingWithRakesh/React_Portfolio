
import Skill from './Skill'

const LearnFrom = ({nameSkill}) => {
    return (
        <div className="learnForm">
            <p>
                I have learnt {nameSkill.name} from
            </p>
            {nameSkill.learn.map((data, index) => (
                <Skill data={data} key={index} />
            ))}
        </div>
    )
}

export default LearnFrom