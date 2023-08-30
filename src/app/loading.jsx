import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center ">
      <Image width={200} height={200} src="loading.svg" alt="loading....." />
    </div>
  );
};

export default Loading;
