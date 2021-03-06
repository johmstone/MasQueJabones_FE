import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import Checkbox from '@material-ui/core/Checkbox';
import { Modal, message } from "antd";

import RolesService from '../../services/roles';

export const RightsRole = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [RightList, setRights] = useState([]);

    const RolesSVC = new RolesService();

    
    useEffect(() => {
        if (isModalVisible) {
            //console.log(props.Role.RoleID)
            LoadPage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalVisible]);

    const LoadPage = () => {
        RolesSVC.Rights(props.Role.RoleID).then(res => {
            setRights(res);
            //console.log(RightList)
        });
    }
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const UpdateRight = (model, Type) => {
        //console.log(model);
        let NewModel = {...model};

        if (model.ReadRight === true && Type === "Read") {
            NewModel.WriteRight = false;
            NewModel.ReadRight = false;
        }
        if (!model.ReadRight && Type === "Read") {
            NewModel.ReadRight = true;            
        }
        if(model.WriteRight === true && Type === "Write") {
            NewModel.WriteRight = false;
        }
        if(!model.WriteRight && Type === "Write") {
            NewModel.WriteRight = true;
            NewModel.ReadRight = true;
        }

        RolesSVC.UpdateRight(NewModel).then(res => {
            if(res) {
                LoadPage()
            } else {
                message.error({
                    content: "Ocurrio un error inesperado, intente de nuevo!!!",
                    style: {
                        marginTop: "30vh"
                    }
                });
            }
        })
    }

    const ModalContent = () => {
        return (
            <article className="card-body mx-auto py-0"  >
                <h4>
                    <i className="fa fa-tags"></i> Rol: <span className="text-primary">{props.Role.RoleName}</span>
                </h4>
                <div style={{ height: 500, overflow: 'scroll' }}>
                    <table className="table table-sm table-hover align-content-center p-0 m-0" >
                        <thead>
                            <tr className="align-middle">
                                <th className="py-2">Directorio</th>
                                <th className="py-2">Controlador</th>
                                <th className="text-center py-2">Lectura</th>
                                <th className="text-center py-2">Escritura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                RightList.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="align-middle">{item.AppID === 1 ? 'No Auth' : 'Auth'}</td>
                                            <td className="align-middle">{item.DisplayName}</td>
                                            <td className="text-center align-middle">
                                                <Checkbox checked={item.ReadRight} onChange={() => UpdateRight(item, 'Read')} />
                                            </td>
                                            <td className="text-center align-middle">
                                                <Checkbox checked={item.WriteRight} onChange={() => UpdateRight(item, 'Write')} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </article>
        )
    }

    return (
        <div>
            <button className="btn btn-outline-primary text-black m-0" onClick={showModal}>
                <i className="fas fa-chevron-circle-right fa-1x"></i> Derechos
        </button>
            <Modal
                title={[
                    <h3 key="title" className="text-center text-primary-color text-font-base m-0"> Crear Nuevo Rol
                </h3>
                ]}
                visible={isModalVisible}
                centered
                onCancel={handleCancel}
                footer={[]}>
                <ModalContent />
            </Modal>
        </div>
    )
}

RightsRole.propTypes = {
    Role: PropType.object
    // 2) add here the new properties into the proptypes object
};