
const SingleDetailFelid = ({ label, value }) => {

    return (
        <div className="my-3">

            <span className="text-bold" style={{ fontWeight: "600", fontStyle: "bold" }}>{label}</span> : <h5 style={{ display: "inline" }}><span className="text-dark">{value}</span></h5>
        </div>
    );
};

export default SingleDetailFelid;
