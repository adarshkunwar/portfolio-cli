type DirectoryProps = {
  name: string;
  // link: string;
};

const Directory = ({ name }: DirectoryProps) => {
  // this should return a UI that looks like a directory (folder)
  return (
    <div className=" w-full flex flex-col itemss-center">
      {/* outer body */}
      <div className="bg-blue-600 mx-auto w-3/4 aspect-square relative rounded-t-lg">
        {/* inner body */}
        <div className="h-3/4 w-full bg-blue-500 absolute bottom-0 -skew-x-6 origin-bottom-right rounded-md">
          {/* folder name */}
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

export default Directory;
