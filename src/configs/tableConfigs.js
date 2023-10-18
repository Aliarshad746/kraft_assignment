import {Button} from "react-bootstrap"
import {startCase} from "lodash";
export const tableConfigs = (tabPermissions = {}, deleteHandler = () => {}, stakeHolder = "") => {
    const extraFields = tabPermissions?.can_edit_users ? [{
        key: "action",
        label: "",
        render: (item) => <div className="d-flex justify-content-center">
                        {stakeHolder?.email !== item?.email ? <Button variant="danger" size="sm" onClick={() => deleteHandler(item?.id)}>
                                Delete
                            </Button> : null}
                        </div>,
    }] : [];

    return [
        {
            key : "email",
            label: 'E - mail',
            render : (item) => <div>{item?.email || "-"}</div>
        },
        {
            key : "name",
            label: 'Name',
            render : (item) => <div>{item?.name || "-"}</div>
        },
        {
            key : "role_type",
            label: 'Role',
            render : (item) => <div>{item?.role_type ? startCase(item?.role_type): "-"}</div>
        },
        ...extraFields,
    ]
}