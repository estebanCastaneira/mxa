import update from "/img/icons/edit.png";
function Update({ width = 30, height = 30 }) {
  return (
    <div className=" p-2 hover:cursor-pointer">
      <img
        className="my-0 mx-auto hover:brightness-110"
        src={update}
        alt="update icon"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Update;
