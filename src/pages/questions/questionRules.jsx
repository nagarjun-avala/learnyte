const QuestionRules = ({ setFormOpen }) => {

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
            <h4 className="text-center text-muted p-4">Question guidelines</h4>
            <button className="btn btn-primary" onClick={() => setFormOpen()}>Take test</button>
        </div>
    );
};

export default QuestionRules;
