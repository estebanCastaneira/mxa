import trashcan from "/img/icons/delete.png";
function Delete({ width = 30, height = 30 }) {
  return (
    <div className="p-2 hover:cursor-pointer">
      <img
        className="my-0 mx-auto hover:brightness-110"
        src={trashcan}
        alt="delete icon"
        width={width}
        height={height}
      />
    </div>
  );
}

export default Delete;
