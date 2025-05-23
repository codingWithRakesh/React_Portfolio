import { useImageShow } from "../contexts/imageContext";

const ClientsCard = ({data}) => {
    const [imageShow, setImageShow] = useImageShow();
    return (
        <div className="clientBox boxShadows">
            <div className="clientImg">
                <img onClick={()=>setImageShow({ ...imageShow, isOn: true, image: data.image })} src={data.image} alt="Tarapada Garai" />
            </div>
            <div className="clientWrite">
                <p>
                    {data.saying}
                </p>
                <h2>{data.name}</h2>
                <h5>{data.founder}</h5>
            </div>
        </div>
    )
}

export default ClientsCard
