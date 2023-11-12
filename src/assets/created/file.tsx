type DirectoryProps = {
  name: string;
  // link: string;
};

const File = ({ name }: DirectoryProps) => {
  // this should return a UI that looks like a directory (folder)
  return (
    <div className=" w-full flex flex-col itemss-center">
      {/* outer body */}
      <div className="mx-auto w-3/4 aspect-square h-full rounded-sm">
        {/* inner body */}

        <div className="w-3/5 mx-auto h-full relative bg-slate-200 text-black">
          <div className="w-full h-full grid place-items-center">{`< />`}</div>
        </div>
      </div>
      <div>
        <p className=" w-full text-xl pt-2 text-center text-blue-600 font-bold">
          {name}
        </p>
      </div>
    </div>
  );
};

export default File;
