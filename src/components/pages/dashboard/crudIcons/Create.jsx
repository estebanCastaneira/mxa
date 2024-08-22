import create from "/img/icons/create.png";

function Create({ width = 40, height = 40, item }) {
  return (
    <div className=" p-2 hover:cursor-pointer ">
      <img
        className="my-0 mx-auto hover:brightness-110"
        src={create}
        alt="create icon"
        width={width}
        height={height}
      />
      <p className="text-sm mt-1">Crear {item}</p>
    </div>
  );
}

export default Create;
