
import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const CollapseHeader = ({ setHeaderCollapse }) => {


    const toggleHeaderCollapse = () => {
        setHeaderCollapse(prev => !prev);
    };

    return (
        <>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="refresh-tooltip">Refresh</Tooltip>}
            >
                <Link to="#">
                    <i className="ti ti-refresh-dot" />
                </Link>
            </OverlayTrigger>
            <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="collapse-tooltip">Collapse</Tooltip>}
            >
                <Link to="#" id="collapse-header" onClick={toggleHeaderCollapse}>
                    <i className="ti ti-chevrons-up" />
                </Link>
            </OverlayTrigger>
        </>
    );
};

export default CollapseHeader;