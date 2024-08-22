import Create from "../crudIcons/Create";
import Update from "../crudIcons/Update";
import Delete from "../crudIcons/Delete";
import ModalDelete from "../modal/ModalDelete";
import StaffFormCreate from "./StaffFormCreate";
import StaffFormUpdate from "./StaffFromUpdate";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteStaff } from "../../../../redux_config/staffSlice";

function Staff() {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff);

  const [render, setRender] = useState({ render: "", staff: null });

  const handleOnClickCreate = () => {
    setRender({ render: "create" });
  };
  const handleOnClickUpdate = (staff) => {
    setRender({ render: "update", staff: staff });
  };
  const handleOnClickDelete = (staff) => {
    setRender({ render: "delete", staff: staff });
  };

  function renderStaffForm() {
    switch (render.render) {
      case "create":
        return <StaffFormCreate create={true} setRender={setRender} />;
      case "update":
        return <StaffFormUpdate staff={render.staff} setRender={setRender} />;
      case "delete":
        return (
          <ModalDelete
            id={render.staff.id}
            item={render.staff.firstname + " " + render.staff.lastname}
            category={"Equipo"}
            dispatch={dispatch}
            deleter={deleteStaff}
            setRender={setRender}
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
          render.render === "delete" ||
          render.render === "create" ||
          render.render === "update"
            ? "blur-sm opacity-25 -z-50 pointer-events-none"
            : ""
        }
      >
        <div className="flex justify-between items-center mb-5 ">
          <h2 className="font-bold underline text-xl">Equipo</h2>
          <div onClick={handleOnClickCreate}>
            <Create item={"Miembro del Equipo"} />
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
                  Cargo
                </th>
                <th scope="col" className="p-2 border border-main-800 ">
                  Email
                </th>
                <th scope="col" className="p-2 border border-main-800 ">
                  Descripción
                </th>

                <th scope="col" className="p-2 border border-main-800 ">
                  Linkedin
                </th>
                <th scope="col" className="p-2 border border-main-800 ">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="font-normal text-sm">
              {staff.map((staff) => (
                <tr key={staff.id} className="border-main-800">
                  <th scope="row" className="p-2 border border-main-800">
                    {staff.firstname + " " + staff.lastname}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    {staff.position_es}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    {staff.email}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    {staff.description_es.slice(0, 20)}...
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    {staff.linkedin}
                  </th>
                  <th scope="row" className="p-2 border border-main-800">
                    <div className="flex gap-2 justify-around">
                      <div onClick={() => handleOnClickUpdate(staff)}>
                        <Update />
                      </div>
                      <div onClick={() => handleOnClickDelete(staff)}>
                        <Delete />
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="">{renderStaffForm()}</div>
    </>
  );
}

export default Staff;
