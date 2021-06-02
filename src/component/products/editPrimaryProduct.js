/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropType from "prop-types";
import { Tooltip, Modal, message } from 'antd';

export const EditPrimaryProduct = props => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div>
            <Tooltip title="Editar" color="blue">
                <a onClick={() => setIsModalVisible(true)}>
                    <i className="fas fa-pencil-alt align-middle"></i>
                </a>
            </Tooltip>
        </div>
    );
}

EditPrimaryProduct.propTypes = {
    PrimaryProduct: PropType.object
    // 2) add here the new properties into the proptypes object
};