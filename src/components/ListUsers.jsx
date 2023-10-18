import { useMemo, useContext } from "react"
import {Table} from "react-bootstrap"
import { DataContext } from "../App"
import {tableConfigs} from "../configs/tableConfigs"

function ListUsers({tabPermissions = {}}) {
    const {setUsersData = () => {}, usersData = {}, stakeHolder = {}} = useContext(DataContext);

    const handleDelete = (id) => {
        const finalUsers = usersData?.users?.filter((item) => item?.id !== id);
        setUsersData({users : finalUsers});
    }

    const tableColumns = useMemo(() => tableConfigs(tabPermissions, handleDelete, stakeHolder),[JSON.stringify(tabPermissions)])
    
  return (
    <div>
        <Table striped bordered hover responsive className="table-sm">
        <thead>
            <tr>
            {tableColumns.map((tableItem) => <th key={`${tableItem?.key}_heading`} className="text-light p-1">{tableItem?.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {usersData?.users?.map((user) => <tr key={user?.id}>
                {tableColumns?.map((tableItem) => <td key={`${tableItem?.key}_body`} className="text-body-secondary p-1">{tableItem?.render(user) || " "}</td>)}
            </tr>)}
          </tbody>
        </Table>
    </div>
  )
}

export default ListUsers