import Create from "../crudIcons/Create";
import Update from "../crudIcons/Update";
import Delete from "../crudIcons/Delete";
import AdminFormCreate from "./AdminFromCreate";
import AdminFormUpdate from "./AdminFormUpdate";
import ModalDelete from "../modal/ModalDelete";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdmin } from "../../../../redux_config/adminSlice";

function Admin() {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admin);
  const [render, setRender] = useState({ render: "", admin: null });

  const handleOnClickCreate = () => {
    setRender({ render: "create" });
  };
  const handleOnClickUpdate = (admin) => {
    setRender({ render: "update", admin: admin });
  };
  const handleOnClickDelete = (admin) => {
    setRender({ render: "delete", admin: admin });
  };

  function renderAdminForm() {
    switch (render.render) {
      case "create":
        return <AdminFormCreate setRender={setRender} />;
      case "update":
        return <AdminFormUpdate setRender={setRender} admin={render.admin} />;
      case "delete":
        return (
          <ModalDelete
            id={render.admin.id}
            item={render.admin.firstname + render.admin.lastname}
            category={"Admin"}
            dispatch={dispatch}
            setRender={setRender}
            deleter={deleteAdmin}
          />
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div
        className={
          render.render === "create" || render.render === "update"
            ? "blur-sm opacity-25 -z-50 pointer-events-none"
            : ""
        }
      >
        <div className="flex justify-between items-center mb-5 ">
          <h2 className="font-bold underline text-xl">Panel de Admin</h2>
          <div onClick={handleOnClickCreate}>
            <Create item={"Administrador"} />
          </div>
        </div>
        <div className="">
          <table className="w-full border border-main-900 ">
            <thead className="bg-neutral-200 font-bold text-sm">
              <tr className="border border-main-800">
                <th scope="col" className="p-2 border border-main-800 w-2/12">
                  Nombre Completo
                </th>
                <th scope="col" className="p-2 border border-main-800">
                  Email
                </th>
                <th scope="col" className="p-2 border border-main-800 ">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="font-normal text-sm">
              {admins.map((admin) => (
                <tr key={admin.id} className="border-main-800">
                  <th scope="row" className="p-2 border border-main-800">
                    {admin.firstname + " " + admin.lastname}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    {admin.email}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    <div className="flex gap-2 justify-around">
                      <div onClick={() => handleOnClickUpdate(admin)}>
                        <Update />
                      </div>
                      {admin.role !== 400 && (
                        <div onClick={() => handleOnClickDelete(admin)}>
                          <Delete />
                        </div>
                      )}
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">{renderAdminForm()}</div>
    </>
  );
}

export default Admin;
