import CollapseHeader from "../../CollapseHeader/CollapseHeader"

const PageHeader = ({ title, count }) => {

    return <div className="page-header">
        <div className="row align-items-center">
            <div className="col-4">
                <h4 className="page-title">
                    {title}<span className="count-title">{count}</span>
                </h4>
            </div>
            <div className="col-8 text-end">
                <div className="head-icons">
                    <CollapseHeader />
                </div>
            </div>
        </div>
    </div>
}


export default PageHeader